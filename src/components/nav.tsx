"use client";

import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/config/site";
import { Magnetic } from "@/components/magnetic";

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

const SECTION_IDS = navLinks.map((l) => l.href.replace("#", ""));

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: aktif bölümü işaretle
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
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
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#"
          className="group flex items-center gap-3"
          aria-label="Ana sayfaya dön"
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="pulse-soft absolute inline-flex h-2 w-2 rounded-full bg-accent/50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted transition-colors group-hover:text-foreground">
            Y·A·G
            <span className="ml-2 text-dim">/ folio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link, i) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`group flex items-baseline gap-1.5 text-sm transition-colors ${
                  isActive ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                <span
                  className={`font-mono text-[10px] transition-colors ${
                    isActive ? "text-accent" : "text-dim group-hover:text-accent"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={isActive ? "" : "link-underline"}>
                  {link.label}
                </span>
                {isActive && (
                  <span className="ml-1 h-1 w-1 rounded-full bg-accent" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <LiveClock />
          <Magnetic strength={0.3}>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-background transition-all hover:bg-accent-hover"
            >
              Hire me
            </a>
          </Magnetic>
        </div>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-md border border-border-bright bg-surface md:hidden"
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

      {/* Reading progress — CSS scroll-driven, görünmez kalır desteklenmeyen tarayıcıda */}
      <span
        aria-hidden
        className="scroll-progress pointer-events-none absolute inset-x-0 bottom-0 block h-px bg-accent"
      />

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-40 bg-background/70 backdrop-blur-md md:hidden"
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
                    className="flex items-baseline gap-3 py-4 font-serif text-2xl tracking-tight text-foreground"
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
