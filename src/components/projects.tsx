"use client";

import { useMemo, useState } from "react";
import { projects, projectCategories } from "@/data/projects";
import type { ProjectCategory } from "@/types/project";
import { ProjectThumbnail } from "@/components/project-thumbnail";
import { SectionHeader } from "@/components/section-header";
import { IconArrowDown } from "@/components/icons";

type Filter = ProjectCategory | "all";

/** İmleç konumunu CSS değişkeni olarak karta yazar (state yok, re-render yok). */
function trackSpotlight(e: React.PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const sorted = useMemo(
    () =>
      [...projects].sort((a, b) => {
        if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
        return Number(b.year) - Number(a.year);
      }),
    [],
  );

  const visible = useMemo(
    () => (filter === "all" ? sorted : sorted.filter((p) => p.category === filter)),
    [sorted, filter],
  );

  return (
    <section id="projects" className="scroll-mt-24 px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <div data-reveal>
          <SectionHeader
            index="01"
            label="Selected work"
            kicker="2025-2026 · canlı ve geliştirilmekte olan"
            title="Üretim kalitesinde sistemler"
            description="Fikirden canlı ürüne: SaaS, IoT ve yapay zekâ otomasyonları. Üçü de mimarisini ben kurdum, kodunu ben yazdım, deployment'ını ben yönetiyorum."
          />
        </div>

        {/* FILTER TABS */}
        <div
          data-reveal
          className="mb-10 flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label="Proje filtresi"
        >
          {projectCategories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setFilter(cat.id)}
                className={`rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-all ${
                  isActive
                    ? "border-accent bg-accent text-background"
                    : "border-border-bright bg-surface text-muted hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <ul key={filter} className="animate-fade-in-up grid gap-5 lg:grid-cols-12">
          {visible.map((project, i) => {
            const isHero = i === 0;
            const isWide = i === 1;
            const span = isHero
              ? "lg:col-span-12"
              : isWide
                ? "lg:col-span-7"
                : "lg:col-span-5";

            return (
              <li key={project.id} data-reveal={String(Math.min(i, 4))} className={span}>
                <article
                  onPointerMove={trackSpotlight}
                  className={`luxe-card spotlight-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface ${
                    isHero ? "lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-stretch" : ""
                  }`}
                >
                  <div className={`p-4 sm:p-5 ${isHero ? "lg:p-6" : ""}`}>
                    <ProjectThumbnail
                      projectId={project.id}
                      title={project.title}
                      gradientFrom={project.gradientFrom}
                      gradientTo={project.gradientTo}
                      image={project.image}
                      featured={isHero}
                    />
                  </div>

                  <div
                    className={`flex flex-1 flex-col p-5 sm:p-7 ${isHero ? "lg:justify-between lg:pl-4" : ""}`}
                  >
                    <header className="mb-5">
                      <div className="mb-4 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em]">
                        {project.isFeatured && (
                          <span className="rounded-sm bg-accent px-1.5 py-0.5 text-background">
                            featured
                          </span>
                        )}
                        <span className="text-dim">{project.year}</span>
                        <span className="text-dim">/</span>
                        <span className="text-muted">{project.id}</span>
                      </div>

                      <h3
                        className={`display-text leading-[1.02] text-foreground transition-colors group-hover:text-accent ${
                          isHero
                            ? "text-4xl sm:text-5xl lg:text-6xl"
                            : "text-3xl sm:text-4xl"
                        }`}
                      >
                        {project.title}
                      </h3>

                      {project.tagline && (
                        <p
                          className={`mt-3 font-serif italic text-accent ${
                            isHero ? "text-lg sm:text-xl" : "text-base"
                          }`}
                        >
                          {project.tagline}
                        </p>
                      )}
                    </header>

                    <p
                      className={`mb-6 text-muted ${
                        isHero
                          ? "max-w-md text-base leading-relaxed sm:text-lg"
                          : "text-sm leading-relaxed sm:text-[0.95rem]"
                      }`}
                    >
                      {project.description}
                    </p>

                    <div className="mt-auto border-t border-border pt-5">
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-border bg-paper px-2.5 py-1 font-mono text-[11px] text-muted transition-colors group-hover:border-border-bright"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {(project.demoUrl || project.githubUrl) && (
                        <div className="mt-5 flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.18em]">
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-underline text-accent"
                            >
                              live demo →
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-underline text-muted hover:text-foreground"
                            >
                              source →
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex items-center justify-between gap-4 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
          <span>End of selection</span>
          <IconArrowDown className="h-3 w-3 rotate-[-90deg]" />
          <a href="#about" className="link-underline text-muted hover:text-foreground">
            devamı / hakkımda
          </a>
        </div>
      </div>
    </section>
  );
}
