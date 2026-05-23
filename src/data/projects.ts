import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "modu-grid",
    title: "MODÜ-GRID",
    tagline: "Yapay Zekâ Tabanlı Akıllı Şebeke Simülasyon Ekosistemi",
    description:
      "IoT ve akıllı altyapı katmanlarını birleştiren, enerji dağıtımını ve şebeke yükünü otonom şekilde optimize eden simülasyon platformu.",
    tags: ["FastAPI", "IoT", "AI Automation", "PostgreSQL"],
    year: "2026",
    isFeatured: true,
    gradientFrom: "from-emerald-600/20",
    gradientTo: "to-zinc-900",
  },
  {
    id: "randevu-asistanim",
    title: "RandevuAsistanim.online",
    tagline: "Multi-Tenant SaaS & Otonom WhatsApp Entegrasyonu",
    description:
      "İşletmeler için randevu süreçlerini tamamen otonom hale getiren, arka planda gelişmiş yetkilendirme mekanizmaları barındıran çok kiracılı SaaS platformu.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "JWT", "WhatsApp API"],
    year: "2026",
    isFeatured: true,
    demoUrl: "https://randevuasistanim.online",
    gradientFrom: "from-teal-600/20",
    gradientTo: "to-zinc-900",
  },
  {
    id: "solveny",
    title: "Solveny",
    tagline: "Workflow Engineering & Otomasyon Ajansı",
    description:
      "Karmaşık iş süreçlerini, n8n ve yapay zekâ tabanlı iş akışları kullanarak prodüksiyon kalitesinde otonom sistemlere dönüştüren otomasyon merkezi.",
    tags: ["n8n", "AI Workflows", "Automation Engineering", "Next.js"],
    year: "2025",
    isFeatured: false,
    gradientFrom: "from-cyan-600/20",
    gradientTo: "to-zinc-900",
  },
];
