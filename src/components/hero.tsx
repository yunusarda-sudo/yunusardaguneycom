import { siteConfig, socialLinks } from "@/config/site";
import { IconArrowDown, IconGitHub } from "@/components/icons";

export function Hero() {
  const nameParts = siteConfig.name.split(" ");
  const firstName = nameParts.slice(0, -1).join(" ");
  const lastName = nameParts[nameParts.length - 1];

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center px-5 pt-[4.25rem] sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/80 px-4 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-dim" />
          </span>
          <span className="font-mono text-xs tracking-wide text-muted">
            {siteConfig.role}
          </span>
        </div>

        <h1 className="animate-fade-in-up animate-delay-100 mb-6 max-w-4xl text-[2.75rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="block text-foreground">{firstName}</span>
          <span className="block bg-gradient-to-r from-accent via-emerald-300 to-accent-dim bg-clip-text text-transparent">
            {lastName}
          </span>
        </h1>

        <p className="animate-fade-in-up animate-delay-200 mb-12 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {siteConfig.tagline}
        </p>

        <div className="animate-fade-in-up animate-delay-300 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-dim px-6 py-3 text-sm font-medium text-zinc-950 transition-all hover:bg-accent hover:shadow-[0_0_32px_rgba(16,185,129,0.35)]"
          >
            Projeleri gör
            <IconArrowDown className="h-4 w-4" />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border-bright bg-surface/50 px-6 py-3 text-sm text-foreground backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent"
          >
            <IconGitHub className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={socialLinks.email}
            className="rounded-lg border border-border-bright bg-transparent px-6 py-3 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
          >
            Mail
          </a>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-accent md:flex"
        aria-label="Projelere kaydır"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">scroll</span>
        <IconArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
