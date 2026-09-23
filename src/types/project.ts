export type ProjectCategory = "saas" | "ai" | "iot";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
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
