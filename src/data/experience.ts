export interface TimelineItem {
  org: string;
  role: string;
  period: string;
  points: string[];
}

/**
 * Deneyim ve eğitim verisi — gerçek bilgilerinle güncelle.
 * Tarih aralıkları "period" alanında serbest metin (ör. "2024 — devam").
 */
export const experience: TimelineItem[] = [
  {
    org: "Solveny",
    role: "Kurucu · Otomasyon & Workflow Mühendisi",
    period: "2025 — devam",
    points: [
      "n8n ve yapay zekâ tabanlı iş akışlarıyla uçtan uca otomasyon sistemleri kuruyorum.",
      "İşletmelere özel multi-tenant SaaS ürünlerini fikirden canlıya taşıyorum.",
      "Backend mimarisi, deployment ve süreç tasarımını tek başıma yönetiyorum.",
    ],
  },
  {
    org: "MODÜ-GRID",
    role: "Full-stack & AI Engineer",
    period: "2025 — 2026",
    points: [
      "Akıllı şebeke simülasyonu için FastAPI tabanlı backend ve IoT katmanı geliştirdim.",
      "Enerji dağıtımını optimize eden otonom karar mekanizmalarını tasarladım.",
    ],
  },
  {
    org: "Bağımsız Projeler",
    role: "Software & Automation Builder",
    period: "2023 — 2025",
    points: [
      "Next.js, FastAPI ve PostgreSQL stack'iyle production kalitesinde web uygulamaları geliştirdim.",
      "Teorik yaklaşımları hızlıca çalışan prototiplere ve canlı ürünlere dönüştürdüm.",
    ],
  },
];

export const education: TimelineItem[] = [
  {
    org: "Üniversite", // ← okulunla güncelle
    role: "Lisans · [Bölüm]",
    period: "[Yıl] — [Yıl]",
    points: [
      "Analitik altyapı ve mühendislik temelli problem çözme yaklaşımı.",
    ],
  },
];
