import { NextRequest } from "next/server";

// Rachel — warm, professional, calm. Change via env var if desired.
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID ?? "21m00Tcm4TlvDq8ikWAM";
const MODEL_ID = "eleven_turbo_v2_5"; // lowest latency model

export async function POST(req: NextRequest) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    return new Response("ElevenLabs API key not configured", { status: 503 });
  }

  let text: string;
  try {
    ({ text } = await req.json());
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  if (!text?.trim()) {
    return new Response("No text provided", { status: 400 });
  }

  // Stay well under the 5 000-char limit
  const truncated = text.slice(0, 3000);

  const elRes = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}/stream`,
    {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
      body: JSON.stringify({
        text: truncated,
        model_id: MODEL_ID,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
          style: 0.0,
          use_speaker_boost: true,
        },
      }),
    }
  );

  if (!elRes.ok) {
    const err = await elRes.text().catch(() => "unknown");
    console.error("ElevenLabs TTS error:", elRes.status, err);
    return new Response("TTS generation failed", { status: 502 });
  }

  // Pipe ElevenLabs stream straight back to the browser
  return new Response(elRes.body, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "no-cache",
      "Transfer-Encoding": "chunked",
    },
  });
}
