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
  imagePreviews?: string[];
}

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi there! I'm Fratelli AI, here to help you get a rough sense of what your remodel might cost before you ever have to pick up the phone.\n\nI'll ask you a few questions about your project, and if you can share a photo, even better — John always says a picture is worth a thousand dollar signs. 😄\n\nPrefer to talk directly with John right now? Call or text **(702) 324-7949**. If he doesn't answer, he's likely hands-on with clients — texting is usually best and he responds personally.\n\nTo get started: **what are you thinking about remodeling?**",
};

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
  const n = messages.filter((m) => m.role === "user").length;
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 3;
  if (n <= 5) return 4;
  if (n <= 7) return 5;
  return 6;
}

function renderMarkdown(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part.split("\n").map((line, j, arr) => (
      <span key={`${i}-${j}`}>
        {line}
        {j < arr.length - 1 && <br />}
      </span>
    ));
  });
}

/** Strip markdown and clean up text before sending to TTS */
function stripForSpeech(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1") // bold → plain
    .replace(/\*/g, "")
    .replace(/\(702\) 324-7949/g, "seven oh two, three two four, seventy nine forty nine")
    .replace(/😄|😊|🙂/g, "")
    .replace(/\n+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

interface PendingImage {
  preview: string;
  url: string | null;
  uploading: boolean;
  error: string | null;
}

async function compressImage(file: File): Promise<File> {
  return new Promise((resolve) => {
    const img = new window.Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const MAX = 1400;
      let { width, height } = img;
      if (width > MAX || height > MAX) {
        if (width > height) {
          height = Math.round((height * MAX) / width);
          width = MAX;
        } else {
          width = Math.round((width * MAX) / height);
          height = MAX;
        }
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);
      canvas.toBlob(
        (blob) =>
          resolve(
            new File([blob!], file.name.replace(/\.[^.]+$/, ".jpg"), {
              type: "image/jpeg",
            })
          ),
        "image/jpeg",
        0.82
      );
    };
    img.src = url;
  });
}

export default function EstimateChat() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [pendingImages, setPendingImages] = useState<PendingImage[]>([]);
  const [conversationId] = useState<string | null>(null);

  // Voice state
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [speechInputSupported, setSpeechInputSupported] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const voiceEnabledRef = useRef(voiceEnabled);

  // Keep ref in sync so closures inside sendMessage see the current value
  useEffect(() => {
    voiceEnabledRef.current = voiceEnabled;
  }, [voiceEnabled]);

  // Detect browser speech recognition support
  useEffect(() => {
    setSpeechInputSupported(
      typeof window !== "undefined" &&
        ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)
    );
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAudio();
      recognitionRef.current?.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ─── Audio (voice output) ────────────────────────────────────────────────

  function stopAudio() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current = null;
    }
    setIsPlaying(false);
  }

  async function speakText(text: string) {
    stopAudio();
    if (!voiceEnabledRef.current) return;
    try {
      setIsPlaying(true);
      const res = await fetch("/api/speak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: stripForSpeech(text) }),
      });
      if (!res.ok) {
        setIsPlaying(false);
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(url);
        audioRef.current = null;
      };
      audio.onerror = () => {
        setIsPlaying(false);
        audioRef.current = null;
      };
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  }

  function toggleVoice() {
    if (voiceEnabled) stopAudio();
    setVoiceEnabled((v) => !v);
  }

  // ─── Speech recognition (voice input) ───────────────────────────────────

  function toggleRecording() {
    if (isRecording) {
      recognitionRef.current?.stop();
    } else {
      startRecording();
    }
  }

  function startRecording() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;
    stopAudio(); // stop speaking before listening

    const recognition = new SR();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results as ArrayLike<SpeechRecognitionResult>)
        .map((r: SpeechRecognitionResult) => r[0].transcript)
        .join("");
      setInput(transcript);
    };

    recognition.onend = () => {
      setIsRecording(false);
      recognitionRef.current = null;
    };

    recognition.onerror = () => {
      setIsRecording(false);
      recognitionRef.current = null;
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsRecording(true);
  }

  // ─── Scroll ──────────────────────────────────────────────────────────────

  const scrollToBottom = useCallback(() => {
    const c = messagesContainerRef.current;
    if (c) c.scrollTop = c.scrollHeight;
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // ─── Textarea auto-height ────────────────────────────────────────────────

  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 160) + "px";
  }, [input]);

  // ─── Image upload ────────────────────────────────────────────────────────

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const newImages: PendingImage[] = files.map((file) => ({
      preview: URL.createObjectURL(file),
      url: null,
      uploading: true,
      error: null,
    }));
    setPendingImages((prev) => [...prev, ...newImages]);

    const startIndex = pendingImages.length;
    await Promise.all(
      files.map(async (file, i) => {
        const idx = startIndex + i;
        try {
          const compressed = await compressImage(file);
          const formData = new FormData();
          formData.append("file", compressed);
          const res = await fetch("/api/upload", { method: "POST", body: formData });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error || "Upload failed");
          setPendingImages((prev) =>
            prev.map((img, j) =>
              j === idx ? { ...img, url: data.url, uploading: false } : img
            )
          );
        } catch (err) {
          setPendingImages((prev) =>
            prev.map((img, j) =>
              j === idx
                ? { ...img, uploading: false, error: (err as Error).message }
                : img
            )
          );
        }
      })
    );

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removePendingImage = (idx: number) => {
    setPendingImages((prev) => {
      URL.revokeObjectURL(prev[idx].preview);
      return prev.filter((_, i) => i !== idx);
    });
  };

  // ─── Send message ────────────────────────────────────────────────────────

  const isUploading = pendingImages.some((img) => img.uploading);
  const readyImageUrls = pendingImages
    .filter((img) => img.url && !img.error)
    .map((img) => img.url as string);
  const canSend =
    (input.trim() || readyImageUrls.length > 0) && !isStreaming && !isUploading;

  const sendMessage = async () => {
    if (!canSend) return;

    // Stop recording if still active
    recognitionRef.current?.stop();
    setIsRecording(false);

    const text = input.trim();
    const imagePreviews = pendingImages
      .filter((img) => img.url)
      .map((img) => img.preview);

    let userContent: string | ContentBlock[];
    if (readyImageUrls.length > 0) {
      const blocks: ContentBlock[] = [];
      if (text) blocks.push({ type: "text", text });
      readyImageUrls.forEach((url) =>
        blocks.push({ type: "image_url", image_url: { url } })
      );
      userContent = blocks;
    } else {
      userContent = text;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userContent,
      imagePreviews: imagePreviews.length > 0 ? imagePreviews : undefined,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setPendingImages([]);
    setIsStreaming(true);

    const assistantId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: "assistant", content: "" },
    ]);

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
          conversationId,
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";
      let pendingChunk = "";
      let rafId: ReturnType<typeof requestAnimationFrame> | null = null;

      const flush = () => {
        if (pendingChunk) {
          accumulated += pendingChunk;
          pendingChunk = "";
          const snap = accumulated;
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: snap } : m
            )
          );
        }
        rafId = null;
      };

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        pendingChunk += decoder.decode(value, { stream: true });
        if (!rafId) rafId = requestAnimationFrame(flush);
      }

      if (rafId) cancelAnimationFrame(rafId);
      flush();

      // Speak the completed response
      if (accumulated.trim()) {
        speakText(accumulated);
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
  const lastAssistantId = [...messages].reverse().find((m) => m.role === "assistant")?.id;

  // ─── Render ──────────────────────────────────────────────────────────────

  return (
    <div className="flex flex-col h-full">

      {/* Progress bar + voice controls */}
      <div className="px-6 pt-5 pb-3 border-b border-[#E5DDD4]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#8B6F47] text-xs tracking-[0.2em] uppercase font-medium">
            Project Assessment
          </span>
          <div className="flex items-center gap-3">
            {/* Stop speaking button */}
            {isPlaying && (
              <button
                onClick={stopAudio}
                title="Stop speaking"
                className="text-[#8B6F47] hover:text-[#7A6040] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                </svg>
              </button>
            )}

            {/* Voice on/off toggle */}
            <button
              onClick={toggleVoice}
              title={voiceEnabled ? "Mute voice responses" : "Enable voice responses"}
              className={`transition-colors ${
                voiceEnabled
                  ? "text-[#8B6F47] hover:text-[#7A6040]"
                  : "text-[#C4A882] hover:text-[#8B6F47]"
              }`}
            >
              {voiceEnabled ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              )}
            </button>

            <span className="text-[#9A9A9A] text-xs">{PROGRESS_STEPS[progressStep]}</span>
          </div>
        </div>
        <div className="h-1 rounded-full bg-[#E5DDD4] overflow-hidden">
          <div
            className="h-full rounded-full bg-[#8B6F47] transition-all duration-700 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Messages */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto px-6 py-4 space-y-5"
      >
        {messages.map((msg) => {
          const isSpeakingThis =
            isPlaying && msg.id === lastAssistantId && msg.role === "assistant";

          return (
            <div
              key={msg.id}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-3`}
            >
              {msg.role === "assistant" && (
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#8B6F47] flex items-center justify-center mt-0.5 transition-all duration-300 ${
                    isSpeakingThis
                      ? "ring-2 ring-[#8B6F47]/40 ring-offset-2 animate-pulse"
                      : ""
                  }`}
                >
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
                {msg.imagePreviews && msg.imagePreviews.length > 0 && (
                  <div className="mb-2 flex gap-2 flex-wrap">
                    {msg.imagePreviews.map((src, i) => (
                      <div key={i} className="rounded-lg overflow-hidden">
                        <Image
                          src={src}
                          alt={`Uploaded photo ${i + 1}`}
                          width={msg.imagePreviews!.length === 1 ? 260 : 120}
                          height={msg.imagePreviews!.length === 1 ? 180 : 90}
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                )}

                {msg.content === "" && msg.role === "assistant" ? (
                  <div className="flex items-center gap-1 py-1 h-5">
                    <div className="w-2 h-2 rounded-full bg-[#C4A882] animate-pulse [animation-delay:0ms]" />
                    <div className="w-2 h-2 rounded-full bg-[#C4A882] animate-pulse [animation-delay:300ms]" />
                    <div className="w-2 h-2 rounded-full bg-[#C4A882] animate-pulse [animation-delay:600ms]" />
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
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Pending image thumbnails */}
      {pendingImages.length > 0 && (
        <div className="px-6 pb-2 flex gap-2 flex-wrap">
          {pendingImages.map((img, i) => (
            <div
              key={i}
              className="relative inline-flex items-center gap-1.5 bg-[#F2EDE6] border border-[#E5DDD4] rounded-lg px-2 py-1.5"
            >
              {img.uploading ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-[#8B6F47] border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs text-[#8B6F47]">Uploading…</span>
                </>
              ) : img.error ? (
                <>
                  <span className="text-xs text-red-500 max-w-[140px] truncate">
                    {img.error}
                  </span>
                  <button
                    onClick={() => removePendingImage(i)}
                    className="text-[#9A9A9A] hover:text-[#1A1A1A] text-xs"
                  >
                    ✕
                  </button>
                </>
              ) : (
                <>
                  <Image
                    src={img.preview}
                    alt="Photo to send"
                    width={32}
                    height={32}
                    className="object-cover rounded"
                    unoptimized
                  />
                  <span className="text-xs text-[#8B6F47]">Ready</span>
                  <button
                    onClick={() => removePendingImage(i)}
                    className="text-[#9A9A9A] hover:text-[#1A1A1A] text-xs ml-0.5"
                  >
                    ✕
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Recording indicator */}
      {isRecording && (
        <div className="mx-6 mb-2 flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-red-600 text-xs font-medium">Listening… speak your message</span>
          <button
            onClick={() => recognitionRef.current?.stop()}
            className="ml-auto text-red-400 hover:text-red-600 text-xs underline"
          >
            Done
          </button>
        </div>
      )}

      {/* Input bar */}
      <div className="px-6 pb-6 pt-2">
        <div className="flex items-end gap-2 bg-[#FAFAF8] border border-[#E5DDD4] focus-within:border-[#8B6F47] rounded-xl px-4 py-3 transition-colors">

          {/* Photo attach */}
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading || isStreaming}
            title="Attach photos"
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
            multiple
            onChange={handleFileSelect}
            className="hidden"
          />

          {/* Mic button — shown only if browser supports Web Speech API */}
          {speechInputSupported && (
            <button
              onClick={toggleRecording}
              disabled={isStreaming}
              title={isRecording ? "Stop recording" : "Speak your message"}
              className={`flex-shrink-0 mb-0.5 transition-all disabled:opacity-40 ${
                isRecording
                  ? "text-red-500 scale-110"
                  : "text-[#C4A882] hover:text-[#8B6F47]"
              }`}
            >
              {isRecording ? (
                /* Filled mic = active */
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                /* Outline mic = idle */
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              )}
            </button>
          )}

          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isRecording ? "Listening…" : "Describe your project…"}
            rows={1}
            disabled={isStreaming}
            className="flex-1 resize-none bg-transparent text-[#1A1A1A] text-sm leading-relaxed placeholder:text-[#B0A898] focus:outline-none disabled:opacity-60 max-h-40"
          />

          <button
            onClick={sendMessage}
            disabled={!canSend}
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
