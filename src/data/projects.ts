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
    problem: "Enerji dağıtımını ve değişen şebeke yüklerini tek bir simülasyon ortamında ele almak.",
    contribution: "Simülasyon mimarisi, veri katmanı ve IoT entegrasyonları.",
    status: "Simülasyon çalışması",
    title: "MODÜ-GRID",
    tagline: "Yapay Zekâ Tabanlı Akıllı Şebeke Simülasyon Ekosistemi",
    description:
      "Enerji dağıtımını ve şebeke yüklerini modellemek için IoT verisi ile yapay zekâyı bir araya getiren simülasyon projesi.",
    tags: ["FastAPI", "IoT", "AI Automation", "PostgreSQL"],
    year: "2026",
    category: "iot",
    isFeatured: true,
    gradientFrom: "from-orange-200/70",
    gradientTo: "to-stone-100",
  },
  {
    id: "randevu-asistanim",
    problem: "İşletmelerin randevu takibini ve müşteri iletişimini ortak bir akışta birleştirmek.",
    contribution: "Çok kiracılı uygulama mimarisi, arayüz, yetkilendirme ve WhatsApp entegrasyonu.",
    status: "SaaS projesi",
    title: "RandevuAsistanim.online",
    displayTitle: "Randevu Asistanım",
    tagline: "Multi-Tenant SaaS & Otonom WhatsApp Entegrasyonu",
    description:
      "İşletmelerin randevu takibini, takvimini ve WhatsApp üzerinden müşteri iletişimini bir araya getiren çok kiracılı SaaS projesi.",
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
    problem: "Tekrarlayan işlerin farklı araçlar arasında manuel olarak yürütülmesi.",
    contribution: "İş akışı tasarımı, n8n otomasyonları ve yapay zekâ entegrasyonları.",
    status: "Otomasyon çalışmaları",
    title: "Solveny",
    tagline: "Workflow Engineering & Otomasyon Ajansı",
    description:
      "Tekrarlayan işleri azaltmak ve farklı araçları birbirine bağlamak için n8n ve yapay zekâ tabanlı iş akışları geliştirdiğim girişim.",
    tags: ["n8n", "AI Workflows", "Automation Engineering", "Next.js"],
    year: "2025",
    category: "ai",
    isFeatured: false,
    gradientFrom: "from-yellow-200/70",
    gradientTo: "to-stone-100",
  },
];

/** Kavramsal şemalar; canlı arayüz veya ölçülmüş sonuç içermez. */
export const projectVisuals: Record<string, { kind: "grid" | "calendar" | "flow"; title: string; labels: string[] }> = {
  "modu-grid": { kind: "grid", title: "Bağlantılı bir enerji ekosistemi", labels: ["Üretim", "Şebeke", "Tüketim", "IoT verisi", "Simülasyon"] },
  "randevu-asistanim": { kind: "calendar", title: "Bir randevunun yolculuğu", labels: ["Talep", "Planlama", "Hatırlatma", "İşletme", "Müşteri"] },
  "solveny": { kind: "flow", title: "Tekrarlayan işten, tanımlı akışa", labels: ["Tetikleyici", "İş akışı", "Yapay zekâ", "İşlem", "Çıktı"] },
};

/** Original typographic project covers, not screenshots. */
export const projectArtwork: Record<string,{style:string;word:string;label:string;subtitle:string}> = {
  "modu-grid":{style:"grid",word:"MODÜ|GRID",label:"Enerji / IoT",subtitle:"Akıllı şebekeler. Bağlantılı sistemler."},
  "randevu-asistanim":{style:"randevu",word:"ra.",label:"SaaS / Randevu yönetimi",subtitle:"RandevuAsistanım"},
  "solveny":{style:"solveny",word:"solveny",label:"İş akışları / Otomasyon",subtitle:"Fikir → Akış → Sistem"},
};
