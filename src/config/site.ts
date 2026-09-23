export const siteConfig = {
  name: "Yunus Arda Güney",
  role: "Software & AI Automation Engineer",
  tagline:
    "Üretim standartlarında (production-grade) web uygulamaları, ölçeklenebilir SaaS platformları ve yapay zekâ destekli otomasyon sistemleri inşa ediyorum.",
  url: "https://yunusardaguney.com",
  email: "contact@solveny.co",
  assets: {
    /** Set to "/me.jpg" after adding public/me.jpg */
    profilePhoto: null as string | null,
    /** Set to "/cv.pdf" after adding public/cv.pdf — null gizler */
    cv: null as string | null,
  },
} as const;

/** Hero'da değişen başlıklar (typing efekti) */
export const heroRotatingTitles = [
  "Software Engineer",
  "AI Automation Engineer",
  "SaaS Builder",
  "Full-stack Developer",
] as const;

/** Hakkımda istatistikleri (sayaç animasyonlu) */
export const stats = [
  { value: 3, suffix: "+", label: "Canlı / aktif proje" },
  { value: 3, suffix: "+", label: "Yıl üretim deneyimi" },
  { value: 100, suffix: "%", label: "Uçtan uca sahiplik" },
] as const;

export const socialLinks = {
  github: "https://github.com/yunusardaguney",
  linkedin: "https://linkedin.com/in/yunusardaguney",
  email: "mailto:contact@solveny.co",
} as const;

export const navLinks = [
  { label: "Projeler", href: "#projects" },
  { label: "Hakkımda", href: "#about" },
  { label: "Deneyim", href: "#experience" },
  { label: "İletişim", href: "#contact" },
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
  'Yazılım dünyasındaki konumumu "sadece kod yazan" değil, "fikirden üretime (idea to production) uçtan uca sistemler inşa eden bir builder" olarak tanımlıyorum. Akademik arka planımdan aldığım analitik altyapıyı, modern web teknolojileri ve yapay zekâ otomasyonlarıyla birleştirerek ölçeklenebilir, prodüksiyon kalitesinde çözümler dönüştürmeye odaklanıyorum. Sadece çalışan değil; performansı yüksek, mimarisi temiz ve kullanıcı deneyimi güçlü SaaS platformları geliştirmek ana motivasyonum.',
  "Geliştirme süreçlerinde FastAPI, Next.js, PostgreSQL ve gelişmiş JWT yetkilendirme mekanizmaları gibi modern ve güvenilir teknolojileri içeren bir stack kullanıyorum. Teorik yaklaşımları hızla çalışan prototiplere ve ardından canlı ürünlere dönüştürme konusunda n8n ve yapay zekâ tabanlı iş akışlarını projelerime entegre ediyorum. Akıllı şebeke simülasyonlarından (MODÜ-GRID), otonom WhatsApp entegrasyonuna sahip çok kiracılı (multi-tenant) SaaS sistemlerine (RandevuAsistanim) kadar geniş bir yelpazede, backend mimarisi ve full-stack süreçlerini yönetiyorum.",
  "Teknolojinin sadece yazılım katmanında değil, fiziksel dünya ile kesiştiği IoT ve akıllı altyapı alanlarında da aktif olarak projeler üretiyorum. Girişimci bir zihin yapısıyla, Solveny çatısı altında iş akışı mühendisliği ve otomasyon süreçleri geliştirirken, bir yandan da projelerimi startup ekosistemine ve gerçek dünya problemlerine entegre etmeye devam ediyorum.",
] as const;
