import { education, experience, type TimelineItem } from "@/data/experience";
import { SectionHeader } from "@/components/section-header";

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="timeline-rail relative ml-2">
      {items.map((item) => (
        <li key={`${item.org}-${item.period}`} data-reveal className="relative pb-12 pl-8 last:pb-0">
          {/* Node */}
          <span className="timeline-node absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />

          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h4 className="font-serif text-2xl italic text-foreground">
              {item.org}
            </h4>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
              {item.period}
            </span>
          </div>

          <p className="mt-1 text-sm font-medium text-accent">{item.role}</p>

          <ul className="mt-4 flex flex-col gap-2">
            {item.points.map((point) => (
              <li
                key={point.slice(0, 32)}
                className="flex gap-3 text-sm leading-relaxed text-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-bright" />
                {point}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border/70 px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal>
          <SectionHeader
            index="03"
            label="Track record"
            kicker="kronolojik · deneyim & eğitim"
            title="Yol haritası"
            description="Üretime odaklı bir builder olarak attığım adımlar: kurduğum sistemler ve aldığım altyapı."
          />
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          <div>
            <p
              data-reveal
              className="mb-8 font-mono text-[10px] uppercase tracking-[0.24em] text-dim"
            >
              / Deneyim
            </p>
            <Timeline items={experience} />
          </div>

          <div>
            <p
              data-reveal
              className="mb-8 font-mono text-[10px] uppercase tracking-[0.24em] text-dim"
            >
              / Eğitim
            </p>
            <Timeline items={education} />
          </div>
        </div>
      </div>
    </section>
  );
}
