import { siteConfig, socialLinks, techStack } from "@/config/site";
import { IconArrowDown, IconGitHub } from "@/components/icons";

const nameParts = siteConfig.name.split(" ");
const firstName = nameParts.slice(0, -1).join(" ");
const lastName = nameParts[nameParts.length - 1];

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] px-5 pt-32 pb-12 sm:px-8 sm:pt-40 sm:pb-16">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_minmax(220px,280px)] lg:gap-16">
        {/* MAIN COLUMN */}
        <div className="relative">
          <div className="animate-fade-in-up mb-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-dim">
            <span>Issue 01</span>
            <span className="h-px w-8 bg-border-bright" />
            <span>Est. 2025</span>
            <span className="h-px w-8 bg-border-bright" />
            <span className="text-accent">{siteConfig.role}</span>
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 display-text text-foreground">
            <span className="block text-[clamp(3.5rem,11vw,9rem)]">
              {firstName}
            </span>
            <span className="display-italic block text-[clamp(3.5rem,11vw,9rem)] text-accent text-shadow-glow">
              {lastName}
            </span>
          </h1>

          <p className="animate-fade-in-up animate-delay-200 mt-10 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            {siteConfig.tagline}
          </p>

          <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-accent hover:shadow-[0_8px_40px_rgba(52,211,153,0.35)]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                01
              </span>
              <span className="h-3 w-px bg-current opacity-30" />
              Projeleri gör
              <IconArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border-bright bg-surface/50 px-5 py-3 text-sm text-foreground backdrop-blur-sm transition-colors hover:border-accent/50 hover:text-accent"
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
        <aside className="animate-fade-in-up animate-delay-400 flex flex-col gap-8 lg:items-end lg:text-right lg:pt-3">
          <div className="flex w-full flex-col gap-2 border-t-2 border-foreground/90 pt-4 lg:max-w-[260px]">
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

      {/* TECH MARQUEE */}
      <div className="animate-fade-in-up animate-delay-500 mt-20 -mx-5 sm:-mx-8 border-y border-border/60 bg-background/30 overflow-hidden backdrop-blur-sm">
        <div className="marquee-track flex w-max items-center py-4">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 px-6">
              <span className="font-serif text-2xl italic text-foreground/85">
                {tech}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
            </div>
          ))}
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <a
        href="#projects"
        className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-accent sm:bottom-6 md:flex"
        aria-label="Projelere kaydır"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          scroll
        </span>
        <span className="block h-8 w-px bg-gradient-to-b from-border-bright to-transparent" />
      </a>
    </section>
  );
}
