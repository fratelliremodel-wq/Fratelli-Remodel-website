import { NextRequest, NextResponse } from "next/server";

const JOHN_EMAIL = process.env.JOHN_EMAIL ?? "fratelliremodel@gmail.com";
const JOHN_PHONE = process.env.JOHN_PHONE ?? "+17023247949";

export async function POST(req: NextRequest) {
  let body: {
    name: string;
    contact: string;
    estimateDisplay: string;
    estimateFactors: string[];
    conversationSummary: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, contact, estimateDisplay, estimateFactors, conversationSummary } = body;

  // Fire both notifications concurrently — one failure doesn't block the other
  const [emailResult, smsResult] = await Promise.allSettled([
    sendEmail({ name, contact, estimateDisplay, estimateFactors, conversationSummary }),
    sendSMS({ name, contact, estimateDisplay }),
  ]);

  if (emailResult.status === "rejected") {
    console.error("Email notification failed:", emailResult.reason);
  }
  if (smsResult.status === "rejected") {
    console.error("SMS notification failed:", smsResult.reason);
  }

  // Return success as long as at least one channel worked
  const bothFailed =
    emailResult.status === "rejected" && smsResult.status === "rejected";

  if (bothFailed) {
    return NextResponse.json({ error: "All notifications failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

// ─── Email via Resend REST API ───────────────────────────────────────────────

async function sendEmail({
  name,
  contact,
  estimateDisplay,
  estimateFactors,
  conversationSummary,
}: {
  name: string;
  contact: string;
  estimateDisplay: string;
  estimateFactors: string[];
  conversationSummary: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY not configured");

  const factorsHtml = estimateFactors
    .map(
      (f) =>
        `<li style="margin-bottom:8px;display:flex;align-items:flex-start;gap:8px;">
          <span style="color:#8B6F47;flex-shrink:0;">→</span>
          <span>${f}</span>
        </li>`
    )
    .join("");

  const html = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#F2EDE6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:580px;margin:32px auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:#8B6F47;padding:28px 32px;">
      <p style="color:rgba(255,255,255,0.7);font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin:0 0 6px;">Fratelli Remodel AI Estimator</p>
      <h1 style="color:white;margin:0;font-size:24px;font-weight:700;">New Estimate Lead</h1>
    </div>

    <!-- Contact info -->
    <div style="padding:28px 32px;background:#FAFAF8;border-bottom:1px solid #E5DDD4;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:10px 0;color:#8B6F47;font-size:11px;text-transform:uppercase;letter-spacing:0.12em;width:90px;vertical-align:top;">Name</td>
          <td style="padding:10px 0;font-size:16px;font-weight:600;color:#1A1A1A;">${name}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#8B6F47;font-size:11px;text-transform:uppercase;letter-spacing:0.12em;vertical-align:top;">Contact</td>
          <td style="padding:10px 0;font-size:16px;font-weight:600;color:#1A1A1A;">${contact}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#8B6F47;font-size:11px;text-transform:uppercase;letter-spacing:0.12em;vertical-align:top;">Estimate</td>
          <td style="padding:10px 0;font-size:20px;font-weight:700;color:#8B6F47;">${estimateDisplay}</td>
        </tr>
      </table>
    </div>

    ${
      estimateFactors.length > 0
        ? `<!-- Estimate factors -->
    <div style="padding:24px 32px;border-bottom:1px solid #E5DDD4;">
      <p style="color:#9A9A9A;font-size:11px;text-transform:uppercase;letter-spacing:0.15em;margin:0 0 14px;">What drove this estimate</p>
      <ul style="margin:0;padding:0;list-style:none;color:#4A4A4A;font-size:14px;line-height:1.6;">${factorsHtml}</ul>
    </div>`
        : ""
    }

    <!-- Conversation -->
    <div style="padding:24px 32px;border-bottom:1px solid #E5DDD4;">
      <p style="color:#9A9A9A;font-size:11px;text-transform:uppercase;letter-spacing:0.15em;margin:0 0 14px;">Conversation summary</p>
      <p style="color:#4A4A4A;font-size:13px;line-height:1.7;white-space:pre-wrap;margin:0;">${conversationSummary}</p>
    </div>

    <!-- CTA -->
    <div style="padding:24px 32px;text-align:center;">
      <a href="sms:${JOHN_PHONE}?body=Hi ${encodeURIComponent(name)}, I saw your estimate from Fratelli AI — happy to talk through the details!"
         style="display:inline-block;background:#8B6F47;color:white;font-size:14px;font-weight:600;padding:14px 28px;border-radius:10px;text-decoration:none;">
        Reply by Text
      </a>
      <p style="color:#B0A898;font-size:12px;margin:12px 0 0;">
        fratelliremodel.com/estimate
      </p>
    </div>

  </div>
</body>
</html>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Fratelli AI <estimator@fratelliremodel.com>",
      to: [JOHN_EMAIL],
      subject: `New estimate lead — ${name} · ${estimateDisplay}`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => "unknown");
    throw new Error(`Resend ${res.status}: ${err}`);
  }
}

// ─── SMS via Twilio REST API ─────────────────────────────────────────────────

async function sendSMS({
  name,
  contact,
  estimateDisplay,
}: {
  name: string;
  contact: string;
  estimateDisplay: string;
}) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_PHONE_NUMBER;

  if (!sid || !token || !from) throw new Error("Twilio env vars not configured");

  const messageBody = [
    "🏠 New Fratelli AI lead",
    "",
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Estimate: ${estimateDisplay}`,
    "",
    "Full details sent to your email.",
  ].join("\n");

  const params = new URLSearchParams({
    To: JOHN_PHONE,
    From: from,
    Body: messageBody,
  });

  const res = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    }
  );

  if (!res.ok) {
    const err = await res.text().catch(() => "unknown");
    throw new Error(`Twilio ${res.status}: ${err}`);
  }
}
