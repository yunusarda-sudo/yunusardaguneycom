import { projects } from "@/data/projects";
import { ProjectThumbnail } from "@/components/project-thumbnail";
import { SectionHeader } from "@/components/section-header";

export function Projects() {
  const sorted = [...projects].sort((a, b) => {
    if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
    return Number(b.year) - Number(a.year);
  });

  return (
    <section id="projects" className="scroll-mt-24 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="01"
          label="Projeler"
          title="Üretim kalitesinde sistemler"
          description="Fikirden canlı ürüne — SaaS, IoT ve yapay zekâ otomasyonları."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {sorted.map((project) => (
            <article
              key={project.id}
              className={`card-glow group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-surface hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] ${
                project.isFeatured ? "lg:min-h-[420px]" : "lg:col-span-2 lg:max-w-xl"
              }`}
            >
              <div className="p-4 pb-0 sm:p-5 sm:pb-0">
                <ProjectThumbnail
                  projectId={project.id}
                  title={project.title}
                  gradientFrom={project.gradientFrom}
                  gradientTo={project.gradientTo}
                  image={project.image}
                  featured={project.isFeatured}
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent/90">
                      {project.tagline}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    {project.isFeatured && (
                      <span className="rounded-md border border-accent/20 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                        featured
                      </span>
                    )}
                    <span className="font-mono text-xs text-muted/70">
                      {project.year}
                    </span>
                  </div>
                </div>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/80 bg-background/50 px-2.5 py-1 font-mono text-[11px] text-muted transition-colors group-hover:border-border-bright group-hover:text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(project.demoUrl || project.githubUrl) && (
                    <div className="flex gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] text-accent transition-colors hover:text-accent-hover"
                        >
                          demo →
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] text-muted transition-colors hover:text-accent"
                        >
                          github →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
