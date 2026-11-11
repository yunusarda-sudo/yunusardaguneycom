export const siteConfig = {
  name: "Yunus Arda Güney",
  role: "Software & AI Automation Engineer",
  tagline:
    "I build web products and AI-powered automations, taking ideas from thoughtful interfaces to the systems behind them.",
  url: "https://yunusardaguney.com",
  email: "yunusarda.dev@gmail.com",
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
  github: "https://github.com/yunusarda-sudo",
  linkedin: "https://tr.linkedin.com/in/yunus-arda-guney",
  email: "mailto:yunusarda.dev@gmail.com",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Selected Work", href: "#projects" },
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
    overline: "Engineering Student · Founder · İzmir",
    location: "Istanbul, Türkiye ↗",
    intro: "I enjoy understanding how things work, finding problems worth solving, and building solutions that make a difference.",
    secondary: "My interests span engineering, AI, and entrepreneurship, but what drives me most is turning real problems into useful products.",
    cta: "Explore my work",
    artLabel: "Curious about systems.",
  },
  work: { heading: "Things I've been building.", intro: "Products and systems across AI, SaaS, biomass, and energy.", title: "Selected Work", period: "2025—2026", details: "My role", visit: "Visit project", artCaption: "A typographic cover made for this project" },
  about: {
    title: "Beyond the code.",
    label: "About",
    intro: "I'm a 21-year-old Electrical and Electronics Engineering student at İzmir Kâtip Çelebi University, interested in AI, entrepreneurship, and solving real-world problems.",
    description: "I enjoy building things, but I'm equally interested in understanding the problems behind them. Through engineering projects, startup experiments, and open-source contributions, I'm learning how to turn ideas into products that people actually need.",
    outside: "Outside of my projects, I enjoy connecting with other builders, exploring new technologies, playing the bağlama (a traditional Turkish string instrument), and strength training.",
  },
  openSource: {
    title: "Building in the open.",
    intro: "I contribute to open-source projects focused on AI agents, developer tools, and automation.",
    description: "Working with real codebases helps me learn from other developers, understand complex systems, and contribute to tools people actually use.",
    projects: "Some of my contributions include work on OpenAdapt, Agenta, and other AI infrastructure projects.",
    cta: "Explore my GitHub",
  },
  contact: {
    label: "Contact",
    title: "Let's build something useful.",
    intro: "I'm always interested in meeting people working on interesting problems, exploring new ideas, or building something from scratch.",
    description: "Whether it's a startup, an engineering project, or an open-source collaboration, feel free to reach out.",
    cta: "Get in touch",
    form: "Prefer to leave a message",
    emailLabel: "Email",
    socialLabel: "Find me elsewhere",
  },
  footer: "Design, code, and everything in between.",
} as const;
