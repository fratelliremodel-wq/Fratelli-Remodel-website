import { NextRequest } from "next/server";

// "Aria" — ElevenLabs' newest generation, warm American female.
// Sounds natural and conversational, not robotic.
// Override by setting ELEVENLABS_VOICE_ID in Vercel env vars.
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID ?? "9BWtsMINqrJLrRacOk9x";

// eleven_multilingual_v2 = highest quality, most natural-sounding model.
// Slower than turbo but the difference is audible — worth it for this use case.
const MODEL_ID = "eleven_multilingual_v2";

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
          // Lower stability = more expressive, varied delivery (less robotic)
          stability: 0.30,
          // Higher similarity = stays faithful to the voice character
          similarity_boost: 0.85,
          // Style adds warmth and emotional range
          style: 0.35,
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

  return new Response(elRes.body, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "no-cache",
      "Transfer-Encoding": "chunked",
    },
  });
}
