"use client";

import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/config/site";

function LiveClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/Istanbul",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
      IST · {time}
    </span>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#"
          className="flex items-center gap-3 group"
          aria-label="Ana sayfaya dön"
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="pulse-soft absolute inline-flex h-2 w-2 rounded-full bg-accent/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted transition-colors group-hover:text-foreground">
            Y·A·G
            <span className="ml-2 text-dim">// folio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-baseline gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              <span className="font-mono text-[10px] text-dim group-hover:text-accent transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="link-underline">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <LiveClock />
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border-bright bg-surface/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-surface"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            müsait
          </a>
        </div>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-md border border-border-bright bg-surface/60 backdrop-blur-sm md:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`absolute block h-px w-5 bg-foreground transition-all duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute block h-px w-5 bg-foreground transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute block h-px w-5 bg-foreground transition-all duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </div>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-40 bg-background/75 backdrop-blur-md md:hidden"
            aria-label="Menüyü kapat"
            onClick={() => setOpen(false)}
          />
          <nav className="relative z-50 border-t border-border/70 bg-background/95 px-5 py-8 md:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <li
                  key={link.href}
                  className="border-b border-border/50 last:border-b-0"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-3 py-4 text-2xl font-serif tracking-tight text-foreground"
                  >
                    <span className="font-mono text-xs text-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
              <span>{siteConfig.name}</span>
              <LiveClock />
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
