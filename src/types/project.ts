export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  year: string;
  isFeatured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  gradientFrom: string;
  gradientTo: string;
}
