import { siteConfig, socialLinks } from "@/config/site";
import { SectionHeader } from "@/components/section-header";
import { IconGitHub, IconLinkedIn, IconMail } from "@/components/icons";

const links = [
  {
    label: "E-posta",
    href: socialLinks.email,
    value: siteConfig.email,
    icon: IconMail,
  },
  {
    label: "GitHub",
    href: socialLinks.github,
    value: "github.com/yunusardaguney",
    icon: IconGitHub,
  },
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    value: "linkedin.com/in/yunusardaguney",
    icon: IconLinkedIn,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border/60 px-5 py-28 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          label="İletişim"
          title="Birlikte inşa edelim"
          description="Yeni proje, iş birliği veya teknik danışmanlık için doğrudan ulaşabilirsin."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {links.map((link) => {
            const Icon = link.icon;
            const external = !link.href.startsWith("mailto");

            return (
              <a
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="card-glow group flex flex-col rounded-2xl border border-border bg-surface/50 p-6 transition-all hover:border-accent/25 hover:bg-surface hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.45)]"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted transition-colors group-hover:border-accent/30 group-hover:text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="mb-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                  {link.label}
                </span>
                <span className="text-sm text-muted transition-colors group-hover:text-foreground">
                  {link.value}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
