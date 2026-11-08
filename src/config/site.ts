export const siteConfig = {
  name: "Yunus Arda Güney",
  role: "Software & AI Automation Engineer",
  tagline:
    "I build web products and AI-powered automations, taking ideas from thoughtful interfaces to the systems behind them.",
  url: "https://yunusardaguney.com",
  email: "contact@solveny.co",
  assets: {
    /** Set to "/me.jpg" after adding public/me.jpg */
    profilePhoto: null as string | null,
    /** Set to "/cv.pdf" after adding public/cv.pdf — null gizler */
    cv: null as string | null,
  },
} as const;

/** Rotating hero titles */
export const heroRotatingTitles = [
  "Software Engineer",
  "AI Automation Engineer",
  "SaaS Builder",
  "Full-stack Developer",
] as const;

/** About section statistics */
export const stats = [
  { value: 3, suffix: "+", label: "Live / active projects" },
  { value: 3, suffix: "+", label: "Years building software" },
  { value: 100, suffix: "%", label: "End-to-end ownership" },
] as const;

export const socialLinks = {
  github: "https://github.com/yunusardaguney",
  linkedin: "https://linkedin.com/in/yunusardaguney",
  email: "mailto:contact@solveny.co",
} as const;

export const navLinks = [
  { label: "Selected work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const techStack = [
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "TypeScript",
  "n8n",
  "AI Automation",
] as const;

export const aboutParagraphs = [
  "I care about the path from an idea to a working product. I think about the interface people use, how data moves, and the workflows running behind it as one connected system.",
  "I build web applications with Next.js, FastAPI, and PostgreSQL, and create automations with n8n and AI integrations. MODÜ-GRID, Appointment Assistant, and Solveny bring that work to energy, appointment management, and business operations.",
  "A good solution pairs a clear experience with a system that can keep growing. I start by understanding the need, then move forward in small, practical steps.",
] as const;

export const projectCopy = {
  label: "Selected work",
  kicker: "2025–2026 · SaaS, energy, and automation",
  title: "From idea to system.",
  description: "Three projects across different fields, each shaped by a problem I set out to solve and the work I took on.",
  problem: "The problem",
  contribution: "My contribution",
  technologies: "Technologies",
  illustrative: "Conceptual project diagram · not a product screen",
  statusNote: "Three projects · three different problems",
} as const;

export const portfolioDesign = {
  hero: {
    overline: "Software · AI · Istanbul",
    location: "Istanbul, Türkiye ↗",
    intro: "I build web products and AI-powered workflows, connecting the interface to the systems behind it.",
    cta: "Explore selected work",
    artLabel: "Curious about systems.",
  },
  work: { heading: "SaaS, energy, and automation.", intro: "Three projects I’m working on and the role I play in each.", title: "Selected work", period: "2025—2026", details: "My role", visit: "Visit project", artCaption: "A typographic cover made for this project" },
  about: { title: "Behind the code.", label: "About", intro: "I’m as interested in how an interface feels as I am in how the system behind it works.", description: "I build products with Next.js and FastAPI, connecting systems with n8n, AI, and IoT. My current focus spans appointment management, smart grids, and business automation.", approach: "Start small. Make it work. Make it better." },
  contact: { label: "A new beginning", title: "Have an idea?", cta: "Let’s talk ↗", form: "Prefer to leave a message", emailLabel: "Email", socialLabel: "Find me elsewhere" },
  footer: "Design, code, and everything in between.",
} as const;
