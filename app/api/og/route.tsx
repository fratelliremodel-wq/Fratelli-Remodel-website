import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

async function loadFont(): Promise<ArrayBuffer | null> {
  try {
    // Request Google Fonts CSS with old UA to get TTF/WOFF format
    const css = await fetch(
      "https://fonts.googleapis.com/css?family=Playfair+Display:700",
      {
        headers: {
          "User-Agent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)",
        },
      }
    ).then((r) => r.text());

    const match = css.match(/url\(([^)]+)\)/);
    if (!match) return null;

    const fontRes = await fetch(match[1]);
    if (!fontRes.ok) return null;
    return fontRes.arrayBuffer();
  } catch {
    return null;
  }
}

export async function GET() {
  try {
    const [fontData, imageBuffer] = await Promise.all([
      loadFont(),
      readFile(
        path.join(
          process.cwd(),
          "public/images/portfolio-lisa-kitchen-wide.jpg"
        )
      ),
    ]);

    const imageBase64 = `data:image/jpeg;base64,${imageBuffer.toString("base64")}`;
    const fontFamily = fontData ? "Playfair" : "serif";

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            position: "relative",
            backgroundColor: "#1A1A1A",
          }}
        >
          {/* Background photo */}
          <img
            src={imageBase64}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          {/* Dark gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(105deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 55%, rgba(0,0,0,0.35) 100%)",
              display: "flex",
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 90px",
            }}
          >
            {/* Label */}
            <div
              style={{
                display: "flex",
                color: "#C4A882",
                fontSize: 15,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                fontFamily: fontFamily,
                marginBottom: 28,
              }}
            >
              Las Vegas General Contractor
            </div>

            {/* Headline */}
            <div
              style={{
                display: "flex",
                color: "white",
                fontSize: 66,
                fontFamily: fontFamily,
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 30,
                maxWidth: 880,
              }}
            >
              Remodeling Done Right in Las Vegas.
            </div>

            {/* Trust badges */}
            <div
              style={{
                display: "flex",
                color: "rgba(255,255,255,0.70)",
                fontSize: 19,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: fontFamily,
              }}
            >
              Licensed · Insured · Trusted
            </div>
          </div>

          {/* Domain — bottom right */}
          <div
            style={{
              position: "absolute",
              bottom: 36,
              right: 90,
              display: "flex",
              color: "#C4A882",
              fontSize: 15,
              letterSpacing: "0.12em",
              fontFamily: fontFamily,
            }}
          >
            fratelliremodel.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: fontData
          ? [
              {
                name: "Playfair",
                data: fontData,
                weight: 700,
                style: "normal",
              },
            ]
          : [],
      }
    );
  } catch (err) {
    console.error("OG image error:", err);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
