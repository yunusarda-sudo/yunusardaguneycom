export type ProjectCategory = "saas" | "ai" | "iot";

export interface Project {
  id: string;
  title: string;
  displayTitle?: string;
  tagline: string;
  description: string;
  problem: string;
  contribution: string;
  status: string;
  tags: string[];
  year: string;
  category: ProjectCategory;
  isFeatured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  gradientFrom: string;
  gradientTo: string;
}
