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
    org: "Marx Finance",
    role: "Growth Engineer Intern",
    period: "Oct 2026 — Present",
    points: [
      "Working on growth experiments, developer outreach, and user acquisition for an AI-powered financial research platform.",
    ],
  },
  {
    org: "ORS (Ortadoğu Rulman Sanayi)",
    role: "Electrical & Electronics Engineering Intern",
    period: "Jun — Jul 2026",
    points: [
      "Gained practical exposure to electrical maintenance, motor drives, industrial automation, and measurement systems in a large-scale manufacturing environment.",
    ],
  },
  {
    org: "AI Tinkerers İzmir",
    role: "Founder & Chapter Lead",
    period: "Oct 2026 — Present",
    points: [
      "Establishing the İzmir chapter of AI Tinkerers, bringing together AI builders to share technical projects, exchange ideas, and connect through community events.",
    ],
  },
  {
    org: "MentiGuide",
    role: "Volunteer Mentor",
    period: "Jun 2026 — Present",
    points: [
      "Supporting students through mentorship, helping them explore educational opportunities, career paths, and personal development.",
    ],
  },
  {
    org: "Solveny",
    role: "Founder",
    period: "2025 — Present",
    points: [
      "Building software and AI-powered automation solutions while exploring real business problems and opportunities for new products.",
    ],
  },
  {
    org: "İKÇÜ Artificial Intelligence Laboratory",
    role: "Artificial Intelligence Researcher",
    period: "Feb — Oct 2025",
    points: [
      "Participated in AI research, technical experimentation, and collaborative engineering projects.",
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
