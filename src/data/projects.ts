import type { Project, ProjectCategory } from "@/types/project";

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "saas", label: "SaaS" },
  { id: "ai", label: "AI · Automation" },
  { id: "iot", label: "IoT" },
];

export const projects: Project[] = [
  {
    id: "modu-grid",
    problem: "Model energy distribution and changing grid loads in one simulation environment.",
    contribution: "Simulation architecture, data layer, and IoT integrations.",
    status: "Simulation study",
    title: "MODÜ-GRID",
    tagline: "AI-Powered Smart Grid Simulation Ecosystem",
    description:
      "A simulation project combining IoT data and AI to model energy distribution and grid loads.",
    tags: ["FastAPI", "IoT", "AI Automation", "PostgreSQL"],
    year: "2026",
    category: "iot",
    isFeatured: true,
    gradientFrom: "from-orange-200/70",
    gradientTo: "to-stone-100",
  },
  {
    id: "randevu-asistanim",
    problem: "Bring appointment tracking and customer communication together in one workflow for businesses.",
    contribution: "Multi-tenant application architecture, interface, authorization, and WhatsApp integration.",
    status: "SaaS project",
    title: "RandevuAsistanim.online",
    displayTitle: "Appointment Assistant",
    tagline: "Multi-Tenant SaaS & WhatsApp Automation",
    description:
      "A multi-tenant SaaS product that brings appointment tracking, calendars, and customer conversations on WhatsApp together.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "JWT", "WhatsApp API"],
    year: "2026",
    category: "saas",
    isFeatured: true,
    demoUrl: "https://randevuasistanim.online",
    gradientFrom: "from-amber-200/70",
    gradientTo: "to-rose-100",
  },
  {
    id: "solveny",
    problem: "Reduce the manual work of repeating the same tasks across disconnected tools.",
    contribution: "Workflow design, n8n automations, and AI integrations.",
    status: "Automation work",
    title: "Solveny",
    tagline: "Workflow Engineering & Automation Studio",
    description:
      "A venture where I build n8n and AI-powered workflows to reduce repetitive work and connect the tools businesses rely on.",
    tags: ["n8n", "AI Workflows", "Automation Engineering", "Next.js"],
    year: "2025",
    category: "ai",
    isFeatured: false,
    gradientFrom: "from-yellow-200/70",
    gradientTo: "to-stone-100",
  },
];

/** Conceptual diagrams; these are not live interfaces or measured results. */
export const projectVisuals: Record<string, { kind: "grid" | "calendar" | "flow"; title: string; labels: string[] }> = {
  "modu-grid": { kind: "grid", title: "A connected energy ecosystem", labels: ["Generation", "Grid", "Consumption", "IoT data", "Simulation"] },
  "randevu-asistanim": { kind: "calendar", title: "An appointment journey", labels: ["Request", "Scheduling", "Reminder", "Business", "Customer"] },
  "solveny": { kind: "flow", title: "From repetitive work to a clear workflow", labels: ["Trigger", "Workflow", "AI", "Action", "Outcome"] },
};

/** Original typographic project covers, not screenshots. */
export const projectArtwork: Record<string,{style:string;word:string;label:string;subtitle:string}> = {
  "modu-grid":{style:"grid",word:"MODÜ|GRID",label:"Energy / IoT",subtitle:"Smart grids. Connected systems."},
  "randevu-asistanim":{style:"randevu",word:"ra.",label:"SaaS / Appointment scheduling",subtitle:"Appointment Assistant"},
  "solveny":{style:"solveny",word:"solveny",label:"Workflows / Automation",subtitle:"Idea → Workflow → System"},
};
