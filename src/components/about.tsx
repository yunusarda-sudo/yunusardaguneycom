import { aboutParagraphs, siteConfig, techStack } from "@/config/site";
import { ProfilePhoto } from "@/components/profile-photo";
import { SectionHeader } from "@/components/section-header";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border/60 px-5 py-28 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="02"
          label="Hakkımda"
          title="Builder mindset"
          description="Fikirden üretime uçtan uca — mimari, otomasyon ve ürün."
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16 lg:items-start">
          <ProfilePhoto
            src={siteConfig.assets.profilePhoto}
            alt={siteConfig.name}
          />

          <div className="space-y-6">
            {aboutParagraphs.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 40)}
                className={`leading-[1.75] text-muted ${
                  i === 0 ? "text-base text-foreground/90 sm:text-lg" : "text-[0.9375rem]"
                }`}
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-surface/80 px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
