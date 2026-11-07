import { projects } from "@/data/projects";
import { portfolioDesign } from "@/config/site";
import { ProjectFocus } from "@/components/project-focus";

export function Projects() {
  const sorted = [...projects].sort(
    (a, b) => Number(b.isFeatured) - Number(a.isFeatured) || Number(b.year) - Number(a.year),
  );

  return (
    <section id="projects" className="folio-wrap portfolio-section projects-section">
      <div className="projects-layout">
        <ProjectFocus projects={sorted.map(project => ({
          id: project.id,
          title: project.displayTitle ?? project.title,
          summary: project.problem,
        }))} />
        <ol className="work-list">
          {sorted.map((project, i) => (
            <li key={project.id} className="work-entry" data-project-id={project.id}>
              <p className="eyebrow">0{i + 1} · {project.status} · {project.year}</p>
              <h3 className="work-title">{project.displayTitle ?? project.title}</h3>
              <p className="work-description">{project.description}</p>
              <div className="work-role">
                <p className="eyebrow mb-2">{portfolioDesign.work.details}</p>
                <p>{project.contribution}</p>
              </div>
              <p className="work-tech">{project.tags.join(" · ")}</p>
              {project.demoUrl && (
                <a href={project.demoUrl} className="text-link mt-4" target="_blank" rel="noopener noreferrer">
                  {portfolioDesign.work.visit} ↗
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
