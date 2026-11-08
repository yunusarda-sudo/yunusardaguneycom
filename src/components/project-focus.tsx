"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioDesign } from "@/config/site";

type FocusProject = { id: string; title: string; summary: string };

export function ProjectFocus({ projects }: { projects: FocusProject[] }) {
  const [activeId, setActiveId] = useState<string | null>(projects[0]?.id ?? null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = introRef.current?.closest("section");
    if (!section) return;
    const entries = Array.from(section.querySelectorAll<HTMLElement>("[data-project-id]"));
    const desktop = window.matchMedia("(min-width: 1024px)");
    let frame: number | null = null;

    const update = () => {
      frame = null;
      if (!desktop.matches) return;
      // A card becomes current as its top reaches the upper third of the viewport.
      // Reading all positions also handles reverse scroll, anchor jumps and resize.
      const line = Math.max(window.innerHeight * 0.3, (introRef.current?.offsetHeight ?? 0) + 40);
      const positions = entries.map(entry => ({ id: entry.dataset.projectId!, top: entry.getBoundingClientRect().top }));
      const current = positions.findLast(entry => entry.top <= line) ?? positions[0];
      setActiveId(current?.id ?? null);
    };

    const schedule = () => {
      if (desktop.matches && frame === null) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("pageshow", schedule);
    desktop.addEventListener("change", schedule);
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("pageshow", schedule);
      desktop.removeEventListener("change", schedule);
    };
  }, []);

  const index = projects.findIndex(project => project.id === activeId);
  const current = projects[index];

  return (
    <div className="work-intro" ref={introRef} data-active-project={current?.id}>
      <div className="work-focus">
        <p className="eyebrow">{String(index < 0 ? 1 : index + 1).padStart(2, "0")} / {portfolioDesign.work.title}</p>
        <h2 className="section-title">{current?.title ?? portfolioDesign.work.heading}</h2>
        <p className="work-intro-copy">{current?.summary ?? portfolioDesign.work.intro}</p>
      </div>
      <div className="work-mobile-heading">
        <p className="eyebrow">01 / {portfolioDesign.work.title}</p>
        <h2 className="section-title">{portfolioDesign.work.heading}</h2>
        <p className="work-intro-copy">{portfolioDesign.work.intro}</p>
      </div>
    </div>
  );
}
