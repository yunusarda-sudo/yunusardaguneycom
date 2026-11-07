export const siteConfig = {
  name: "Yunus Arda Güney",
  role: "Software & AI Automation Engineer",
  tagline:
    "Web ürünleri ve yapay zekâ otomasyonları geliştiriyorum. Fikirleri, kullanışlı arayüzlerden arka plandaki sistemlere kadar uçtan uca ele alıyorum.",
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
  "Bir fikrin çalışan bir ürüne dönüşme süreciyle ilgileniyorum. Kullanıcının gördüğü arayüzü, verinin nasıl işlendiğini ve arka plandaki iş akışlarını birlikte düşünerek geliştiriyorum.",
  "Next.js, FastAPI ve PostgreSQL ile web uygulamaları; n8n ve yapay zekâ entegrasyonlarıyla otomasyonlar üzerinde çalışıyorum. MODÜ-GRID, RandevuAsistanim ve Solveny, bu ilginin enerji, randevu yönetimi ve iş süreçlerindeki karşılıkları.",
  "Benim için iyi bir çözüm, anlaşılır bir deneyim ve sürdürülebilir bir teknik yapı demek. Yeni projelerde önce ihtiyacı netleştiriyor, ardından küçük ve somut adımlarla ilerliyorum.",
] as const;

export const projectCopy = {
  label: "Seçili çalışmalar",
  kicker: "2025–2026 · SaaS, enerji ve otomasyon",
  title: "Fikirden sisteme.",
  description: "Farklı alanlarda üzerinde çalıştığım üç proje. Her birinde çözmeye odaklandığım problem ve üstlendiğim sorumluluklar.",
  problem: "Odaklandığım problem",
  contribution: "Katkım",
  technologies: "Teknolojiler",
  illustrative: "Temsili proje şeması · ürün ekranı değildir",
  statusNote: "Üç çalışma · üç farklı problem",
} as const;

export const portfolioDesign = {
  hero: {
    overline: "Yazılım · Yapay zekâ · İstanbul",
    location: "İstanbul, Türkiye ↗",
    intro: "Web ürünleri geliştiriyor, yapay zekâ ile iş akışları kuruyorum. Arayüzden altyapıya, fikrin bütününe odaklanıyorum.",
    cta: "Çalışmaları keşfet",
    artLabel: "Sistemlere meraklı.",
  },
  work: { heading: "SaaS, enerji ve otomasyon.", intro: "Üzerinde çalıştığım üç proje ve her birinde üstlendiğim rol.", title: "Seçili çalışmalar", period: "2025—2026", details: "Bu projedeki rolüm", visit: "Projeyi aç", artCaption: "Proje için tasarlanan tipografik kapak" },
  about: { title: "Kodun arkasında.", label: "Hakkımda", intro: "Bir arayüzün nasıl göründüğü kadar, arkasındaki sistemin nasıl çalıştığı da ilgimi çekiyor.", description: "Next.js ve FastAPI ile ürün geliştiriyor; n8n, yapay zekâ ve IoT ile farklı sistemleri birbirine bağlıyorum. Şu sıralar odağım randevu yönetimi, akıllı şebekeler ve iş otomasyonları.", approach: "Küçük başla. Çalışır hale getir. İyileştir." },
  contact: { label: "Yeni bir başlangıç", title: "Bir fikrin var mı?", cta: "Konuşalım ↗", form: "Mesaj bırakmayı tercih ederim", emailLabel: "E-posta", socialLabel: "Diğer yerlerde" },
  footer: "Tasarım, kod ve aradaki her şey.",
} as const;
