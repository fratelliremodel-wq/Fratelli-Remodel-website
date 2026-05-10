import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { getSupabase } from "@/lib/supabase";
import { ESTIMATOR_SYSTEM_PROMPT } from "@/lib/estimator-prompt";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

type MessageRole = "user" | "assistant";

interface ChatMessage {
  role: MessageRole;
  content:
    | string
    | Array<
        | { type: "text"; text: string }
        | { type: "image_url"; image_url: { url: string } }
      >;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, conversationId } = body as {
      messages: ChatMessage[];
      conversationId?: string;
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    // Build Anthropic-formatted messages (handle image URLs)
    const anthropicMessages: Anthropic.MessageParam[] = messages.map((msg) => {
      if (typeof msg.content === "string") {
        return { role: msg.role, content: msg.content };
      }

      // Content is an array — convert image_url to image blocks
      const content: Anthropic.ContentBlockParam[] = msg.content.map((block) => {
        if (block.type === "text") {
          return { type: "text", text: block.text };
        }
        // image_url block — use URL source
        return {
          type: "image",
          source: {
            type: "url",
            url: (block as { type: "image_url"; image_url: { url: string } })
              .image_url.url,
          },
        } as Anthropic.ImageBlockParam;
      });

      return { role: msg.role, content };
    });

    // Create a ReadableStream that pipes the Claude stream to the client
    const stream = new ReadableStream({
      async start(controller) {
        let fullText = "";

        try {
          const claudeStream = anthropic.messages.stream({
            model: "claude-sonnet-4-5",
            max_tokens: 1024,
            system: ESTIMATOR_SYSTEM_PROMPT,
            messages: anthropicMessages,
          });

          for await (const event of claudeStream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              const chunk = event.delta.text;
              fullText += chunk;
              controller.enqueue(new TextEncoder().encode(chunk));
            }
          }

          controller.close();
        } catch (err) {
          console.error("Claude stream error:", err);
          controller.error(err);
          return;
        }

        // Save assistant message to Supabase
        try {
          const supabase = getSupabase();
          let convId = conversationId;

          // If no conversation yet, create one
          if (!convId) {
            const { data: conv, error: convError } = await supabase
              .from("conversations")
              .insert({ status: "active" })
              .select("id")
              .single();

            if (convError) {
              console.error("Failed to create conversation:", convError);
            } else {
              convId = conv.id;
            }
          }

          if (convId) {
            // Save the latest user message
            const lastUserMsg = [...messages].reverse().find((m) => m.role === "user");
            if (lastUserMsg) {
              const userContent =
                typeof lastUserMsg.content === "string"
                  ? lastUserMsg.content
                  : lastUserMsg.content
                      .filter((b) => b.type === "text")
                      .map((b) => (b as { type: "text"; text: string }).text)
                      .join(" ");

              const hasImage =
                typeof lastUserMsg.content !== "string" &&
                lastUserMsg.content.some((b) => b.type === "image_url");

              await supabase.from("messages").insert({
                conversation_id: convId,
                role: "user",
                content: userContent,
                has_image: hasImage,
              });
            }

            // Save assistant response
            await supabase.from("messages").insert({
              conversation_id: convId,
              role: "assistant",
              content: fullText,
              has_image: false,
            });
          }
        } catch (dbErr) {
          // Non-fatal — log but don't break the response
          console.error("DB save error:", dbErr);
        }
      },
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (err) {
    console.error("Estimate route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
