import { siteConfig, socialLinks } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm text-foreground">{siteConfig.name}</p>
          <p className="mt-1 text-xs text-muted">{siteConfig.role}</p>
        </div>

        <div className="flex flex-wrap gap-6 font-mono text-xs">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={socialLinks.email}
            className="text-muted transition-colors hover:text-accent"
          >
            Mail
          </a>
        </div>

        <p className="font-mono text-[10px] text-muted/60 sm:text-right">
          © {year} · Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
