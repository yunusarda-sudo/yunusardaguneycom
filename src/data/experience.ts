export interface TimelineItem {
  org: string;
  role: string;
  period: string;
  points: string[];
}

/**
 * Experience and education data. Keep date ranges as plain text (for example, "2024 — Present").
 */
export const experience: TimelineItem[] = [
  {
    org: "Solveny",
    role: "Founder · Automation & Workflow Engineer",
    period: "2025 — Present",
    points: [
      "I build end-to-end automation systems with n8n and AI-powered workflows.",
      "I take multi-tenant SaaS products for businesses from idea to launch.",
      "I lead backend architecture, deployment, and workflow design.",
    ],
  },
  {
    org: "MODÜ-GRID",
    role: "Full-stack & AI Engineer",
    period: "2025 — 2026",
    points: [
      "Built a FastAPI backend and IoT layer for a smart grid simulation.",
      "Designed autonomous decision systems to optimize energy distribution.",
    ],
  },
  {
    org: "Independent Projects",
    role: "Software & Automation Builder",
    period: "2023 — 2025",
    points: [
      "Built production-grade web applications with Next.js, FastAPI, and PostgreSQL.",
      "Turned early concepts into working prototypes and live products.",
    ],
  },
];

export const education: TimelineItem[] = [
  {
    org: "University", // Replace with the institution name when confirmed.
    role: "Bachelor's degree · [Field]",
    period: "[Year] — [Year]",
    points: [
      "Analytical foundations and an engineering approach to problem-solving.",
    ],
  },
];
