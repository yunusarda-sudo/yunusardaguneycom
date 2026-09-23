import type { Project, ProjectCategory } from "@/types/project";

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "Tümü" },
  { id: "saas", label: "SaaS" },
  { id: "ai", label: "AI · Otomasyon" },
  { id: "iot", label: "IoT" },
];

export const projects: Project[] = [
  {
    id: "modu-grid",
    title: "MODÜ-GRID",
    tagline: "Yapay Zekâ Tabanlı Akıllı Şebeke Simülasyon Ekosistemi",
    description:
      "IoT ve akıllı altyapı katmanlarını birleştiren, enerji dağıtımını ve şebeke yükünü otonom şekilde optimize eden simülasyon platformu.",
    tags: ["FastAPI", "IoT", "AI Automation", "PostgreSQL"],
    year: "2026",
    category: "iot",
    isFeatured: true,
    gradientFrom: "from-orange-200/70",
    gradientTo: "to-stone-100",
  },
  {
    id: "randevu-asistanim",
    title: "RandevuAsistanim.online",
    tagline: "Multi-Tenant SaaS & Otonom WhatsApp Entegrasyonu",
    description:
      "İşletmeler için randevu süreçlerini tamamen otonom hale getiren, arka planda gelişmiş yetkilendirme mekanizmaları barındıran çok kiracılı SaaS platformu.",
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
    title: "Solveny",
    tagline: "Workflow Engineering & Otomasyon Ajansı",
    description:
      "Karmaşık iş süreçlerini, n8n ve yapay zekâ tabanlı iş akışları kullanarak prodüksiyon kalitesinde otonom sistemlere dönüştüren otomasyon merkezi.",
    tags: ["n8n", "AI Workflows", "Automation Engineering", "Next.js"],
    year: "2025",
    category: "ai",
    isFeatured: false,
    gradientFrom: "from-yellow-200/70",
    gradientTo: "to-stone-100",
  },
];
