import type { Project, ProjectCategory } from "@/types/project";

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "saas", label: "SaaS" },
  { id: "ai", label: "AI · Automation" },
  { id: "iot", label: "IoT" },
];

export const projects: Project[] = [
  {
    id: "hambu",
    title: "HAMBU",
    tagline: "Agent-Powered Biomass Marketplace",
    description:
      "A marketplace connecting biomass suppliers with industrial buyers. Starting with olive pomace, HAMBU uses AI agents to discover opportunities, match supply with demand, and help coordinate trades.",
    problem: "Connect biomass suppliers and industrial buyers, starting with olive pomace.",
    contribution: "Founder",
    status: "Agent-Powered Biomass Marketplace",
    recognition: "1st Place · DEKATHON 2026",
    tags: ["AI Agents", "Biomass", "Marketplace"],
    year: "2026",
    category: "ai",
    isFeatured: true,
    linkUrl: "https://hambu.energy/",
    linkLabel: "Visit HAMBU",
    gradientFrom: "from-orange-200/70",
    gradientTo: "to-stone-100",
  },
  {
    id: "pickable",
    title: "Pickable",
    tagline: "Agent-Powered SaaS Growth",
    description:
      "Pickable helps micro-SaaS founders understand how AI agents discover and interact with their products. Agent-driven research and feasibility assessments turn discoverability gaps into actionable growth recommendations.",
    problem: "Help micro-SaaS founders turn AI-agent discoverability gaps into growth opportunities.",
    contribution: "Co-Founder & CEO",
    status: "Agent-Powered SaaS Growth",
    recognition: "3rd Place · Techstars Startup Weekend Urla 2026",
    tags: ["AI Agents", "SaaS", "Growth"],
    year: "2026",
    category: "saas",
    isFeatured: true,
    linkUrl:
      "https://tr.linkedin.com/posts/yunus-arda-guney_techstars-startupweekend-startupweekendurla-activity-7515851479044358144-2VEc",
    linkLabel: "Project Announcement",
    gradientFrom: "from-amber-200/70",
    gradientTo: "to-rose-100",
  },
  {
    id: "randevuo",
    title: "Randevuo",
    tagline: "AI Appointment Platform",
    description:
      "An appointment platform where AI assistants handle customer conversations, check availability, and book appointments through WhatsApp. Randevuo also supports booking through external AI agents.",
    problem: "Make appointment booking available through WhatsApp and external AI agents.",
    contribution: "Founder",
    status: "AI Appointment Platform",
    tags: ["AI Assistants", "WhatsApp", "Scheduling"],
    year: "2026",
    category: "saas",
    isFeatured: true,
    linkUrl: "https://randevuo.com.tr/",
    linkLabel: "Visit Randevuo",
    gradientFrom: "from-amber-200/70",
    gradientTo: "to-rose-100",
  },
  {
    id: "modu-grid",
    title: "MODÜ-GRID",
    tagline: "Industrial Energy Flexibility",
    description:
      "An energy decision-support project exploring how industrial facilities can shift electricity consumption without disrupting production, helping identify opportunities for more efficient energy use.",
    problem: "Explore how facilities can shift electricity consumption without disrupting production.",
    contribution: "Engineering & Product Development",
    status: "Industrial Energy Flexibility",
    recognition: "3rd Place · Emlak Konut GYO Ideathon 2026",
    tags: ["Energy", "Industrial Systems", "Decision Support"],
    year: "2025–2026",
    category: "iot",
    isFeatured: true,
    linkUrl: "https://modu-grid.com/",
    linkLabel: "Visit MODÜ-GRID",
    gradientFrom: "from-orange-200/70",
    gradientTo: "to-stone-100",
  },
  {
    id: "arda-suite",
    title: "AegisOS",
    tagline: "Local-First Desktop Assistant & Bounded Runtime",
    description:
      "A local-first desktop assistant and bounded agent runtime for macOS and Linux. It handles everyday workflows through push-to-talk voice commands, cursor-level dictation, and Obsidian task sync, while ensuring autonomous agent actions run within strict permission boundaries and persistent memory.",
    problem: "Combine everyday desktop productivity with safe, permission-bounded AI agent execution that runs entirely locally.",
    contribution: "Creator & Developer",
    status: "Local-First Desktop AI",
    tags: ["Local-First AI", "Bounded Agents", "MCP", "macOS"],
    year: "2026",
    category: "ai",
    isFeatured: true,
    linkUrl: "https://github.com/yunusarda-sudo/arda-suite",
    linkLabel: "Explore on GitHub",
    gradientFrom: "from-slate-200/70",
    gradientTo: "to-stone-100",
  },
];

/** Conceptual diagrams; these are not live interfaces or measured results. */
export const projectVisuals: Record<string, { kind: "grid" | "calendar" | "flow"; title: string; labels: string[] }> = {
  "modu-grid": { kind: "grid", title: "Industrial energy flexibility", labels: ["Production", "Grid", "Consumption", "Flexibility"] },
  randevuo: { kind: "calendar", title: "An appointment journey", labels: ["WhatsApp", "Availability", "Booking", "AI agent"] },
};

/** Original typographic project covers, not screenshots. */
export const projectArtwork: Record<string, { style: string; word: string; label: string; subtitle: string }> = {
  "hambu": { style: "solveny", word: "hambu", label: "Biomass / Marketplace", subtitle: "Supply meets demand." },
  pickable: { style: "randevu", word: "pickable", label: "AI / SaaS growth", subtitle: "Make products discoverable." },
  randevuo: { style: "randevu", word: "ra.", label: "AI / Appointment platform", subtitle: "Booking through conversation." },
  "modu-grid": { style: "grid", word: "MODÜ|GRID", label: "Energy / Industry", subtitle: "Flexible energy decisions." },
  "arda-suite": { style: "grid", word: "aegis|os", label: "Local AI / Bounded Runtime", subtitle: "Safe, bounded execution." },
};
