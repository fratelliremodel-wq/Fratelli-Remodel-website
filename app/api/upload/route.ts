import { NextRequest, NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Please upload a JPG, PNG, or WEBP image." },
        { status: 400 }
      );
    }

    // Validate file size (8MB max)
    const maxSize = 8 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 8MB." },
        { status: 400 }
      );
    }

    // Convert to base64 data URL — no external storage needed
    const arrayBuffer = await file.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");
    const mediaType = file.type === "image/heic" || file.type === "image/heif"
      ? "image/jpeg"
      : file.type;
    const dataUrl = `data:${mediaType};base64,${base64}`;

    return NextResponse.json({ url: dataUrl });
  } catch (err) {
    console.error("Upload route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
