import {
  heroRotatingTitles,
  siteConfig,
  socialLinks,
  techStack,
} from "@/config/site";
import { Typing } from "@/components/typing";
import { Magnetic } from "@/components/magnetic";
import { IconArrowDown, IconGitHub } from "@/components/icons";

const nameParts = siteConfig.name.split(" ");
const firstName = nameParts.slice(0, -1).join(" ");
const lastName = nameParts[nameParts.length - 1];

const LETTER_STAGGER_MS = 45;

function SplitLetters({
  text,
  delayOffsetMs = 0,
}: {
  text: string;
  delayOffsetMs?: number;
}) {
  return (
    <>
      {Array.from(text).map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="letter-rise"
          style={{ animationDelay: `${delayOffsetMs + i * LETTER_STAGGER_MS}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] px-5 pt-32 pb-12 sm:px-8 sm:pt-40 sm:pb-16">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_minmax(220px,280px)] lg:gap-16">
        {/* MAIN COLUMN */}
        <div className="relative">
          <div className="animate-fade-in-up mb-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.26em] text-dim">
            <span className="text-muted">{siteConfig.role}</span>
            <span className="hidden h-px w-8 bg-border-bright sm:block" />
            <span className="hidden sm:block">İstanbul, TR</span>
          </div>

          <h1 className="display-text text-foreground">
            <span className="sr-only">{siteConfig.name}</span>
            <span aria-hidden className="block text-[clamp(3.5rem,11vw,9rem)]">
              <SplitLetters text={firstName} />
            </span>
            <span
              aria-hidden
              className="display-italic block text-[clamp(3.5rem,11vw,9rem)] leading-[1.05] text-accent"
            >
              <SplitLetters
                text={lastName}
                delayOffsetMs={firstName.length * LETTER_STAGGER_MS + 120}
              />
            </span>
          </h1>

          {/* Typing rotating titles */}
          <div className="animate-fade-in-up animate-delay-200 mt-8 flex items-baseline gap-3 text-2xl sm:text-3xl">
            <span className="font-serif italic text-muted">Building as a</span>
            <Typing
              words={heroRotatingTitles}
              className="font-serif text-foreground"
            />
          </div>

          <p className="animate-fade-in-up animate-delay-300 mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            {siteConfig.tagline}
          </p>

          <div className="animate-fade-in-up animate-delay-400 mt-10 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-all hover:bg-accent hover:shadow-[0_14px_38px_-12px_rgba(180,97,47,0.55)]"
              >
                Projeleri gör
                <IconArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Magnetic>

            {siteConfig.assets.cv && (
              <a
                href={siteConfig.assets.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border-bright bg-surface px-5 py-3 text-sm text-foreground transition-colors hover:border-accent/60 hover:text-accent"
              >
                <span className="link-underline">CV indir</span>
                <span className="transition-transform group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            )}

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border-bright bg-surface px-5 py-3 text-sm text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              <IconGitHub className="h-4 w-4" />
              <span className="link-underline">GitHub</span>
            </a>
            <a
              href={socialLinks.email}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              <span className="link-underline">{siteConfig.email}</span>
            </a>
          </div>
        </div>

        {/* META SIDEBAR */}
        <aside className="animate-fade-in-up animate-delay-400 flex flex-col gap-8 lg:items-end lg:pt-3 lg:text-right">
          <div className="flex w-full flex-col gap-2 border-t-2 border-foreground/85 pt-4 lg:max-w-[260px]">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-dim">
              Konum
            </span>
            <p className="font-serif text-2xl italic leading-tight text-foreground">
              İstanbul, TR
            </p>
          </div>

          <div className="flex w-full flex-col gap-2 border-t border-border-bright pt-4 lg:max-w-[260px]">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-dim">
              Focus
            </span>
            <ul className="flex flex-col gap-1 text-sm text-foreground/90">
              <li>SaaS · multi-tenant</li>
              <li>AI · n8n automation</li>
              <li>IoT · smart grid</li>
            </ul>
          </div>

          <div className="flex w-full flex-col gap-2 border-t border-border-bright pt-4 lg:max-w-[260px]">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-dim">
              Şu sıralar
            </span>
            <p className="text-sm leading-relaxed text-muted">
              MODÜ-GRID için akıllı şebeke simülasyonu;{" "}
              <span className="text-foreground">RandevuAsistanim</span>{" "}
              multi-tenant SaaS.
            </p>
          </div>
        </aside>
      </div>

      {/* TECH MARQUEE — sessiz */}
      <div className="animate-fade-in-up animate-delay-500 mt-20 -mx-5 overflow-hidden border-y border-border/70 sm:-mx-8">
        <div className="marquee-track flex w-max items-center py-4">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 px-6">
              <span className="font-serif text-2xl italic text-foreground/55">
                {tech}
              </span>
              <span className="h-1 w-1 rounded-full bg-accent/40" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
