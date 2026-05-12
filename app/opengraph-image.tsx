import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-dynamic";

async function loadPlayfairFont(): Promise<ArrayBuffer | null> {
  try {
    // Request Google Fonts CSS with an older UA to get TTF/WOFF format
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=block",
      {
        headers: {
          "User-Agent":
            "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)",
        },
      }
    ).then((r) => r.text());

    const match = css.match(/url\(([^)]+)\)/);
    if (!match) return null;

    return fetch(match[1]).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OGImage() {
  const [fontData, imageBuffer] = await Promise.all([
    loadPlayfairFont(),
    readFile(
      path.join(process.cwd(), "public/images/portfolio-lisa-kitchen-wide.jpg")
    ),
  ]);

  const imageBase64 = `data:image/jpeg;base64,${imageBuffer.toString("base64")}`;

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

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.35) 100%)",
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
              fontFamily: fontData ? "Playfair" : "serif",
              fontWeight: 400,
              marginBottom: 28,
            }}
          >
            Las Vegas General Contractor
          </div>

          {/* Main headline — one line */}
          <div
            style={{
              display: "flex",
              color: "white",
              fontSize: 68,
              fontFamily: fontData ? "Playfair" : "serif",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 30,
              maxWidth: 900,
            }}
          >
            Remodeling Done Right in Las Vegas.
          </div>

          {/* Trust line */}
          <div
            style={{
              display: "flex",
              color: "rgba(255,255,255,0.70)",
              fontSize: 20,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: fontData ? "Playfair" : "serif",
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
            fontFamily: fontData ? "Playfair" : "serif",
          }}
        >
          fratelliremodel.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: "Playfair", data: fontData, weight: 700, style: "normal" }]
        : [],
    }
  );
}
