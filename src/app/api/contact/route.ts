import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function parse(body: unknown): ContactPayload | null {
  if (typeof body !== "object" || body === null) return null;
  const b = body as Record<string, unknown>;
  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";

  if (!name || name.length > 120) return null;
  if (!email || !EMAIL_RE.test(email)) return null;
  if (!message || message.length > 5000) return null;

  return { name, email, message };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const payload = parse(json);
  if (!payload) {
    return NextResponse.json(
      { error: "Lütfen tüm alanları geçerli biçimde doldur." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Servis henüz bağlanmadı — sessizce "başarılı" demiyoruz.
    return NextResponse.json(
      {
        error: `Form servisi henüz yapılandırılmadı. Lütfen doğrudan ${siteConfig.email} adresine yaz.`,
      },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO ?? siteConfig.email;
  const from = process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: payload.email,
        subject: `Portfolio iletişim · ${payload.name}`,
        html: `<p><strong>${escapeHtml(payload.name)}</strong> (${escapeHtml(
          payload.email,
        )}) yazdı:</p><p>${escapeHtml(payload.message).replace(/\n/g, "<br>")}</p>`,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Mesaj gönderilemedi, lütfen e-posta ile dene." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Mesaj gönderilemedi, lütfen e-posta ile dene." },
      { status: 502 },
    );
  }
}
