"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMsg("Lütfen tüm alanları doldur.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setErrorMsg("Geçerli bir e-posta gir.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(body?.error ?? "Gönderilemedi.");
      }

      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Beklenmeyen bir hata oldu. Doğrudan e-posta atabilirsin.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-none border border-border bg-surface px-8 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-none bg-accent text-2xl text-background">
          ✓
        </span>
        <p className="text-2xl text-foreground">
          Mesajın ulaştı, teşekkürler!
        </p>
        <p className="max-w-sm text-sm text-muted">
          Genellikle 24 saat içinde dönüş yapıyorum.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent link-underline"
        >
          Yeni mesaj →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-6"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="İsim" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Adın"
            className="input-base"
          />
        </Field>
        <Field label="E-posta" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="seninadres@mail.com"
            className="input-base"
          />
        </Field>
      </div>

      <Field label="Mesaj" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Proje, iş birliği ya da danışmanlık…"
          className="input-base resize-none"
        />
      </Field>

      {status === "error" && (
        <p className="text-sm text-accent" role="alert">
          {errorMsg}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="text-link disabled:opacity-60"
        >
          {status === "submitting" ? "Gönderiliyor…" : "Gönder"}
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </button>
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted link-underline hover:text-foreground"
        >
          ya da direkt yaz
        </a>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="eyebrow">
        {label}
      </span>
      {children}
    </label>
  );
}
