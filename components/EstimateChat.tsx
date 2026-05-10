"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

type MessageRole = "user" | "assistant";

interface ContentBlock {
  type: "text" | "image_url";
  text?: string;
  image_url?: { url: string };
}

interface Message {
  id: string;
  role: MessageRole;
  content: string | ContentBlock[];
  imagePreview?: string; // local blob URL for display
}

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi there! I'm Fratelli AI, here to help you get a rough sense of what your remodel might cost before you ever have to pick up the phone.\n\nI'll ask you a few questions about your project, and if you can share a photo, even better — John always says a picture is worth a thousand dollar signs. 😄\n\nPrefer to talk directly with John right now? Call or text **(702) 324-7949**. If he doesn't answer, he's likely hands-on with clients — texting is usually best and he responds personally.\n\nTo get started: **what are you thinking about remodeling?**",
};

// Progress steps — loosely tracks conversation depth
const PROGRESS_STEPS = [
  "Getting started",
  "Project type",
  "Scope & layout",
  "Finishes & style",
  "Details & photos",
  "Building your estimate",
  "Estimate ready",
];

function estimateProgress(messages: Message[]): number {
  const userMessages = messages.filter((m) => m.role === "user").length;
  if (userMessages === 0) return 0;
  if (userMessages === 1) return 1;
  if (userMessages === 2) return 2;
  if (userMessages === 3) return 3;
  if (userMessages <= 5) return 4;
  if (userMessages <= 7) return 5;
  return 6;
}

function renderMarkdown(text: string): React.ReactNode {
  // Simple markdown: bold (**text**), line breaks
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    // Handle newlines
    return part.split("\n").map((line, j, arr) => (
      <span key={`${i}-${j}`}>
        {line}
        {j < arr.length - 1 && <br />}
      </span>
    ));
  });
}

export default function EstimateChat() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [pendingImageUrl, setPendingImageUrl] = useState<string | null>(null); // Supabase URL
  const [pendingImagePreview, setPendingImagePreview] = useState<string | null>(null); // local blob
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 160) + "px";
  }, [input]);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError(null);
    setIsUploading(true);

    // Show local preview immediately
    const blobUrl = URL.createObjectURL(file);
    setPendingImagePreview(blobUrl);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Upload failed");
      }

      setPendingImageUrl(data.url);
    } catch (err) {
      setUploadError((err as Error).message);
      setPendingImagePreview(null);
      setPendingImageUrl(null);
      URL.revokeObjectURL(blobUrl);
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const clearPendingImage = () => {
    if (pendingImagePreview) URL.revokeObjectURL(pendingImagePreview);
    setPendingImagePreview(null);
    setPendingImageUrl(null);
    setUploadError(null);
  };

  const sendMessage = async () => {
    const text = input.trim();
    if ((!text && !pendingImageUrl) || isStreaming) return;

    // Build content for this message
    let userContent: string | ContentBlock[];
    let userPreview: string | undefined;

    if (pendingImageUrl) {
      const blocks: ContentBlock[] = [];
      if (text) blocks.push({ type: "text", text });
      blocks.push({ type: "image_url", image_url: { url: pendingImageUrl } });
      userContent = blocks;
      userPreview = pendingImagePreview || undefined;
    } else {
      userContent = text;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userContent,
      imagePreview: userPreview,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    clearPendingImage();
    setIsStreaming(true);

    // Add placeholder assistant message
    const assistantId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: "assistant", content: "" },
    ]);

    try {
      // Build API payload — only send role + content (no imagePreview)
      const apiMessages = updatedMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: apiMessages,
          conversationId,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });

        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: accumulated } : m
          )
        );
      }

      // Extract conversation ID from Supabase if we don't have one yet
      // (The API route creates it on the first message; we'll track it client-side on next call)
      if (!conversationId) {
        // Heuristic: if the assistant message includes an estimate, it's likely further in
        // We don't get the ID back from the streaming endpoint — that's OK for Phase 1
        // The DB still saves it correctly; we just can't link follow-ups
        // TODO Phase 2: return conversation ID in a header
      }
    } catch (err) {
      console.error("Send error:", err);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? {
                ...m,
                content:
                  "I'm sorry, something went wrong. Please try again, or reach out to John directly at (702) 324-7949.",
              }
            : m
        )
      );
    } finally {
      setIsStreaming(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const progressStep = estimateProgress(messages);
  const progressPct = Math.round((progressStep / (PROGRESS_STEPS.length - 1)) * 100);

  return (
    <div className="flex flex-col h-full">
      {/* Progress bar */}
      <div className="px-6 pt-5 pb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#8B6F47] text-xs tracking-[0.2em] uppercase font-medium">
            Project Assessment
          </span>
          <span className="text-[#9A9A9A] text-xs">
            {PROGRESS_STEPS[progressStep]}
          </span>
        </div>
        <div className="h-1 rounded-full bg-[#E5DDD4] overflow-hidden">
          <div
            className="h-full rounded-full bg-[#8B6F47] transition-all duration-700 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-3`}
          >
            {/* AI avatar */}
            {msg.role === "assistant" && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8B6F47] flex items-center justify-center mt-0.5">
                <span className="text-white text-xs font-bold font-[family-name:var(--font-playfair)]">
                  F
                </span>
              </div>
            )}

            <div
              className={`max-w-[80%] ${
                msg.role === "user"
                  ? "bg-[#8B6F47] text-white rounded-2xl rounded-tr-sm px-4 py-3"
                  : "bg-white border border-[#E5DDD4] rounded-2xl rounded-tl-sm px-4 py-3"
              }`}
            >
              {/* Image preview in message */}
              {msg.imagePreview && (
                <div className="mb-2 rounded-lg overflow-hidden">
                  <Image
                    src={msg.imagePreview}
                    alt="Uploaded photo"
                    width={260}
                    height={180}
                    className="object-cover w-full"
                    unoptimized
                  />
                </div>
              )}

              {/* Text content */}
              {msg.content === "" && msg.role === "assistant" ? (
                // Typing indicator
                <div className="flex items-center gap-1 py-1">
                  <div className="w-2 h-2 rounded-full bg-[#C4A882] animate-bounce [animation-delay:0ms]" />
                  <div className="w-2 h-2 rounded-full bg-[#C4A882] animate-bounce [animation-delay:150ms]" />
                  <div className="w-2 h-2 rounded-full bg-[#C4A882] animate-bounce [animation-delay:300ms]" />
                </div>
              ) : (
                <p
                  className={`text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user" ? "text-white" : "text-[#2A2A2A]"
                  }`}
                >
                  {typeof msg.content === "string"
                    ? renderMarkdown(msg.content)
                    : msg.content
                        .filter((b) => b.type === "text")
                        .map((b, i) => (
                          <span key={i}>{renderMarkdown(b.text || "")}</span>
                        ))}
                </p>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Image pending preview */}
      {(pendingImagePreview || isUploading || uploadError) && (
        <div className="px-6 pb-2">
          <div className="inline-flex items-center gap-2 bg-[#F2EDE6] border border-[#E5DDD4] rounded-lg px-3 py-2">
            {isUploading ? (
              <>
                <div className="w-4 h-4 border-2 border-[#8B6F47] border-t-transparent rounded-full animate-spin" />
                <span className="text-xs text-[#8B6F47]">Uploading photo…</span>
              </>
            ) : uploadError ? (
              <>
                <span className="text-xs text-red-500">{uploadError}</span>
                <button
                  onClick={clearPendingImage}
                  className="text-[#9A9A9A] hover:text-[#1A1A1A] text-xs ml-1"
                >
                  ✕
                </button>
              </>
            ) : (
              <>
                {pendingImagePreview && (
                  <Image
                    src={pendingImagePreview}
                    alt="Photo to send"
                    width={40}
                    height={40}
                    className="object-cover rounded"
                    unoptimized
                  />
                )}
                <span className="text-xs text-[#8B6F47]">Photo ready to send</span>
                <button
                  onClick={clearPendingImage}
                  className="text-[#9A9A9A] hover:text-[#1A1A1A] text-xs ml-1"
                >
                  ✕
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Input area */}
      <div className="px-6 pb-6 pt-2">
        <div className="flex items-end gap-2 bg-[#FAFAF8] border border-[#E5DDD4] focus-within:border-[#8B6F47] rounded-xl px-4 py-3 transition-colors">
          {/* Photo upload button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading || isStreaming}
            title="Attach a photo"
            className="flex-shrink-0 text-[#C4A882] hover:text-[#8B6F47] transition-colors disabled:opacity-40 mb-0.5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
            </svg>
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
            onChange={handleFileSelect}
            className="hidden"
          />

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Describe your project…"
            rows={1}
            disabled={isStreaming}
            className="flex-1 resize-none bg-transparent text-[#1A1A1A] text-sm leading-relaxed placeholder:text-[#B0A898] focus:outline-none disabled:opacity-60 max-h-40"
          />

          {/* Send button */}
          <button
            onClick={sendMessage}
            disabled={(!input.trim() && !pendingImageUrl) || isStreaming || isUploading}
            className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#8B6F47] disabled:bg-[#C4A882] flex items-center justify-center transition-colors hover:bg-[#7A6040] mb-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>

        <p className="text-center text-[#B0A898] text-[11px] mt-2">
          Rough estimate only — not a quote. Always talk to John before making decisions.
        </p>
      </div>
    </div>
  );
}
