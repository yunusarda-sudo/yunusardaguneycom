import { siteConfig, socialLinks } from "@/config/site";
import { SectionHeader } from "@/components/section-header";
import { IconGitHub, IconLinkedIn, IconMail } from "@/components/icons";

const links = [
  {
    label: "E-posta",
    href: socialLinks.email,
    value: siteConfig.email,
    icon: IconMail,
    cta: "Yaz",
  },
  {
    label: "GitHub",
    href: socialLinks.github,
    value: "github.com/yunusardaguney",
    icon: IconGitHub,
    cta: "Takip et",
  },
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    value: "linkedin.com/in/yunusardaguney",
    icon: IconLinkedIn,
    cta: "Bağlan",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border/60 px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="03"
          label="Get in touch"
          kicker="açığım · yeni iş / iş birliği"
          title="Birlikte inşa edelim"
          description="Yeni proje, iş birliği veya teknik danışmanlık için doğrudan ulaşabilirsin. Genellikle 24 saat içinde dönüş yapıyorum."
        />

        {/* OVERSIZED MAILTO */}
        <a
          href={socialLinks.email}
          className="group block border-y border-border/60 py-12 transition-colors hover:bg-surface/40"
        >
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
                Direkt yaz →
              </p>
              <p className="display-text text-[clamp(2.25rem,7vw,5.5rem)] text-foreground transition-colors group-hover:text-accent">
                {siteConfig.email}
              </p>
            </div>
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-foreground/90 text-2xl transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-background">
              →
            </span>
          </div>
        </a>

        {/* SOCIAL GRID */}
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {links.map((link) => {
            const Icon = link.icon;
            const external = !link.href.startsWith("mailto");

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="card-glow group flex h-full flex-col justify-between gap-8 rounded-2xl border border-border bg-surface/50 p-6 transition-all hover:border-accent/30 hover:bg-surface"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-bright bg-background text-foreground transition-colors group-hover:border-accent/40 group-hover:text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
                      {link.cta} →
                    </span>
                  </div>
                  <div>
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                      {link.label}
                    </p>
                    <p className="font-serif text-xl italic leading-tight text-foreground transition-colors group-hover:text-accent">
                      {link.value}
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
