import { siteConfig, socialLinks } from "@/config/site";

const COLOPHON = [
  { label: "Build", value: "Next.js 15 · Tailwind 4" },
  { label: "Type", value: "Geist Sans · Instrument Serif" },
  { label: "Host", value: "Vercel · Istanbul edge" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/60 px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        {/* GIANT WORDMARK — outline, hover'da clay dolar, scroll'da yükselir */}
        <div className="mb-10 overflow-hidden">
          <p
            aria-hidden
            className="wordmark-outline display-text select-none text-[clamp(3rem,12vw,10rem)] leading-[0.88]"
          >
            YUNUS <span className="display-italic">ARDA</span>
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end">
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-6">
            {COLOPHON.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
                  {item.label}
                </span>
                <span className="mt-1 font-mono text-xs text-foreground/85">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <nav className="flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.18em]">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-muted hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-muted hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.email}
              className="link-underline text-muted hover:text-foreground"
            >
              Mail
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
          <span>© {year} · {siteConfig.name}</span>
          <span>{"İstanbul'da tasarlandı & kodlandı"}</span>
          <a href="#" className="link-underline text-muted hover:text-foreground">
            yukarı çık ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
