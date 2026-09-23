import { siteConfig, socialLinks } from "@/config/site";
import { SectionHeader } from "@/components/section-header";
import { ContactForm } from "@/components/contact-form";
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
      className="scroll-mt-24 border-t border-border/70 bg-accent-muted/30 px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal>
          <SectionHeader
            index="04"
            label="Get in touch"
            kicker="açığım · yeni iş / iş birliği"
            title="Birlikte inşa edelim"
            description="Yeni proje, iş birliği veya teknik danışmanlık için doğrudan ulaşabilirsin. Genellikle 24 saat içinde dönüş yapıyorum."
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* LEFT — invite + links */}
          <div data-reveal className="flex flex-col">
            <p className="max-w-md font-serif text-2xl italic leading-snug text-foreground sm:text-3xl">
              Bir fikrin mi var, yoksa sadece merhaba mı demek istiyorsun? Kutu
              her zaman açık.
            </p>

            <ul className="mt-10 flex flex-col">
              {links.map((link) => {
                const Icon = link.icon;
                const external = !link.href.startsWith("mailto");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 border-b border-border py-4 transition-colors hover:border-accent/50"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-bright bg-surface text-foreground transition-colors group-hover:border-accent/50 group-hover:text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
                          {link.label}
                        </span>
                        <span className="text-sm text-foreground transition-colors group-hover:text-accent">
                          {link.value}
                        </span>
                      </span>
                      <span className="ml-auto text-muted transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* RIGHT — form */}
          <div data-reveal>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
