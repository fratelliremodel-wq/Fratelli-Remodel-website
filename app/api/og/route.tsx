import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

const SITE_URL = "https://fratelliremodel.com";

export async function GET() {
  try {
    const fontData = await readFile(
      path.join(process.cwd(), "public/fonts/PlayfairDisplay-Bold.ttf")
    )
      .then((buf) => buf.buffer as ArrayBuffer)
      .catch(() => null);

    const fontFamily = fontData ? "Playfair" : "serif";

    return new ImageResponse(
      (
        <div
          style={{
            width: "1200px",
            height: "630px",
            display: "flex",
            position: "relative",
            backgroundColor: "#1A1A1A",
          }}
        >
          {/* Background photo — fetched by Satori via URL */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${SITE_URL}/images/portfolio-lisa-kitchen-wide.jpg`}
            width={1200}
            height={630}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "1200px",
              height: "630px",
            }}
          />

          {/* Dark gradient overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "1200px",
              height: "630px",
              background:
                "linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.30) 100%)",
              display: "flex",
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "1200px",
              height: "630px",
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
                maxWidth: "880px",
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
