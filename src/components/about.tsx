import { aboutParagraphs, siteConfig, stats, techStack } from "@/config/site";
import { ProfilePhoto } from "@/components/profile-photo";
import { SectionHeader } from "@/components/section-header";
import { Counter } from "@/components/counter";

const FACTS = [
  { label: "Rol", value: "Software & AI Automation" },
  { label: "Tabanı", value: "Full-stack · Backend-leaning" },
  { label: "Stack", value: "Next · FastAPI · Postgres · n8n" },
  { label: "Yaklaşım", value: "İdea → production · uçtan uca" },
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border/60 px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal>
          <SectionHeader
            index="02"
            label="Field notes"
            kicker="şahsi · operasyonel"
            title="Builder mindset"
            description="Fikirden üretime uçtan uca: mimari, otomasyon ve ürün."
          />
        </div>

        {/* STAT COUNTERS */}
        <dl
          data-reveal
          className="mb-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:mb-20"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 bg-surface px-4 py-7 text-center sm:py-9"
            >
              <dd className="display-text text-4xl text-foreground sm:text-5xl lg:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim sm:text-[11px]">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-20 lg:items-start">
          {/* SIDEBAR */}
          <aside className="flex flex-col gap-8">
            <ProfilePhoto
              src={siteConfig.assets.profilePhoto}
              alt={siteConfig.name}
            />

            <dl className="flex flex-col">
              {FACTS.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`flex items-baseline justify-between gap-4 py-3 ${
                    i !== FACTS.length - 1 ? "border-b border-border/60" : ""
                  }`}
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
                    {fact.label}
                  </dt>
                  <dd className="text-right text-sm text-foreground/90">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="border-t-2 border-foreground/90 pt-4">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
                Stack günlük
              </p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-surface/80 px-2.5 py-1 font-mono text-[11px] text-foreground/85 transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* COLUMN */}
          <article className="max-w-2xl">
            {aboutParagraphs.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 40)}
                className={`mb-7 ${
                  i === 0
                    ? "drop-cap text-lg leading-[1.7] text-foreground/95 sm:text-xl"
                    : "text-[0.975rem] leading-[1.8] text-muted sm:text-base"
                }`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-12 flex items-center gap-4 border-t border-border/60 pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
                Yunus Arda Güney
              </span>
              <span className="h-px flex-1 bg-border" />
              <span className="font-serif text-base italic text-accent">
                İstanbul
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
