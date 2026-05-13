import { NextResponse } from "next/server";

// Temporary debug route — lists available ElevenLabs voices
// Visit /api/voices to see which voices + IDs are on this account
export async function GET() {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "No API key" }, { status: 503 });
  }

  const res = await fetch("https://api.elevenlabs.io/v1/voices", {
    headers: { "xi-api-key": apiKey },
  });

  const data = await res.json();

  // Return just name + voice_id for easy reading
  const voices = (data.voices ?? []).map((v: { name: string; voice_id: string; category: string }) => ({
    name: v.name,
    voice_id: v.voice_id,
    category: v.category,
  }));

  return NextResponse.json(voices);
}
