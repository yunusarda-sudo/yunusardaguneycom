# Product Spec — yunusardaguney.com

Kişisel portföy sitesi. Odak: yaptığım projeleri net, hızlı ve profesyonel şekilde listelemek.

---

## 1. Amaç

Ziyaretçi siteye girdiğinde 30 saniye içinde şunları anlamalı:

- Kimim
- Ne tür işler yapıyorum
- Hangi projeleri yaptım
- Nasıl iletişime geçebilir

Site bir blog değil, **proje odaklı portföy**.

---

## 2. Hedef Kitle

| Segment | Ne arıyor |
|---------|-----------|
| İşveren / recruiter | Deneyim, proje kalitesi, tech stack |
| Freelance müşteri | Referans projeler, iletişim kolaylığı |
| Developer network | GitHub, açık kaynak, side project'ler |

---

## 3. Kapsam (v1)

### Dahil

- Tek sayfa scroll layout (anchor navigation)
- Hero bölümü
- Projeler grid/list
- Kısa hakkımda + profil fotoğrafı
- İletişim + sosyal linkler
- Responsive (mobile-first)
- SEO temelleri (meta, OG tags)
- Karanlık tema
- Vercel Analytics (tek tık, sıfır JS bundle)

### Dahil değil (v1)

- Blog / yazılar
- CMS / admin panel
- Çoklu dil (i18n)
- Kullanıcı girişi
- Proje kaynak kodu / repo linkleri (mimari açıklama + ekran görüntüsü yeterli)

---

## 4. Sayfa Yapısı

```
┌─────────────────────────────────────┐
│  Nav: Hakkımda · Projeler · İletişim │
├─────────────────────────────────────┤
│  HERO                                │
│  İsim, rol, 1-2 cümle tagline        │
│  [Projeler] [GitHub] [Mail]          │
├─────────────────────────────────────┤
│  PROJELER                            │
│  ┌──────┐ ┌──────┐ ┌──────┐         │
│  │ Kart │ │ Kart │ │ Kart │         │
│  └──────┘ └──────┘ └──────┘         │
├─────────────────────────────────────┤
│  HAKKIMDA                            │
│  Profil fotoğrafı, bio, tech badges  │
├─────────────────────────────────────┤
│  İLETİŞİM                            │
│  Mail, LinkedIn, GitHub, X           │
├─────────────────────────────────────┤
│  Footer                              │
└─────────────────────────────────────┘
```

---

## 5. Bölüm Detayları

### 5.1 Hero

| Alan | Değer |
|------|-------|
| İsim | Yunus Arda Güney |
| Rol | **Software & AI Automation Engineer** |
| Tagline | Üretim standarlarında (production-grade) web uygulamaları, ölçeklenebilir SaaS platformları ve yapay zekâ destekli otomasyon sistemleri inşa ediyorum. |
| CTA | "Projeler" (scroll), GitHub, Mail |

**Not:** Unvan, Next.js/FastAPI full-stack yetkinliği ile yapay zekâ/otomasyon (n8n, LLM entegrasyonları) kasını tek seferde recruiter ve müşteriye iletir.

### 5.2 Projeler

Her proje kartında:

| Alan | Zorunlu | Açıklama |
|------|---------|----------|
| `title` | ✓ | Proje adı |
| `description` | ✓ | 1–3 cümle |
| `tags` | ✓ | Tech stack |
| `liveUrl` | — | Canlı demo linki |
| `repoUrl` | — | GitHub linki (v1'de opsiyonel / gizli projeler için boş) |
| `image` | — | Ekran görüntüsü / thumbnail |
| `featured` | — | Öne çıkan proje işareti |
| `year` | — | Tamamlanma yılı |

**Sıralama:** `featured` önce, sonra yıl (yeniden eskiye).

#### v1 Proje Listesi

**1. MODÜ-GRID** `featured: true` · `year: 2026`

- **Description:** Yapay zekâ destekli, akıllı şebeke (smart grid) yönetim ve simülasyon ekosistemi. IoT entegrasyonu ve enerji optimizasyonuna odaklanan altyapı projesi.
- **Tags:** `Next.js`, `FastAPI`, `PostgreSQL`, `IoT`, `AI`

**2. RandevuAsistanim.online** `featured: true` · `year: 2026`

- **Description:** Otonom WhatsApp entegrasyonuna sahip, çok kiracılı (multi-tenant) SaaS randevu ve yönetim platformu.
- **Tags:** `React`, `Next.js`, `FastAPI`, `PostgreSQL`, `JWT`, `WhatsApp API`

**3. Solveny Agency Showcase** `featured: false` · `year: 2025`

- **Description:** Kurucusu olduğum otomasyon ve iş akışı mühendisliği ajansının, n8n ve yapay zekâ entegrasyonlu iş çözümlerini sergileyen operasyonel altyapısı.
- **Tags:** `Next.js`, `Tailwind CSS`, `n8n`, `AI Automation`

### 5.3 Hakkımda

- 3 paragraf — builder vizyonu, mühendislik derinliği, ürün odaklılık
- Kullanılan teknolojiler badge olarak
- **Profil fotoğrafı:** Evet — `public/me.jpg`, emerald border + blur skeleton yer tutucu

**Metin (v1):**

> Yazılım dünyasındaki konumumu "sadece kod yazan" değil, **"fikirden üretime (idea to production) uçtan uca sistemler inşa eden bir builder"** olarak tanımlıyorum. Akademik arka planımdan aldığım analitik altyapıyı, modern web teknolojileri ve yapay zekâ otomasyonlarıyla birleştirerek ölçeklenebilir, prodüksiyon kalitesinde çözümler dönüştürmeye odaklanıyorum. Sadece çalışan değil; performansı yüksek, mimarisi temiz ve kullanıcı deneyimi güçlü SaaS platformları geliştirmek ana motivasyonum.
>
> Geliştirme süreçlerinde **FastAPI, Next.js, PostgreSQL ve gelişmiş JWT yetkilendirme mekanizmaları** gibi modern ve güvenilir teknolojileri içeren bir stack kullanıyorum. Teorik yaklaşımları hızla çalışan prototiplere ve ardından canlı ürünlere dönüştürme konusunda n8n ve yapay zekâ tabanlı iş akışlarını projelerime entegre ediyorum. Akıllı şebeke simülasyonlarından (MODÜ-GRID), otonom WhatsApp entegrasyonuna sahip çok kiracılı (multi-tenant) SaaS sistemlerine (RandevuAsistanim) kadar geniş bir yelpazede, backend mimarisi ve full-stack süreçlerini yönetiyorum.
>
> Teknolojinin sadece yazılım katmanında değil, fiziksel dünya ile kesiştiği IoT ve akıllı altyapı alanlarında da aktif olarak projeler üretiyorum. Girişimci bir zihin yapısıyla, Solveny çatısı altında iş akışı mühendisliği ve otomasyon süreçleri geliştirirken, bir yandan da projelerimi startup ekosistemine ve gerçek dünya problemlerine entegre etmeye devam ediyorum.

### 5.4 İletişim

- Mail (v1'de mailto)
- Sosyal linkler: GitHub, LinkedIn

**`src/config/site.ts`:**

```typescript
export const socialLinks = {
  github: "https://github.com/yunusardaguney",
  linkedin: "https://linkedin.com/in/yunusardaguney",
  email: "mailto:contact@solveny.co",
};
```

### 5.5 Görsel Stratejisi

| Varlık | Yol | Strateji |
|--------|-----|----------|
| Profil fotoğrafı | `public/me.jpg` | Emerald border'lı skeleton yer tutucu; görsel eklenince otomatik geçiş |
| Proje görselleri | `public/projects/{id}.png` | `zinc-900` kart içinde gradyan/SVG pattern yer tutucu; gerçek dashboard screenshot'ları hazır olunca değiştir |

---

## 6. Proje Veri Modeli

```ts
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  featured?: boolean;
  year?: number;
}
```

Projeler statik `projects.ts` dosyasında tutulacak — CMS yok.

### v1 Statik Veri (`projects.ts`)

```ts
import { Project } from './types';

export const projects: Project[] = [
  {
    id: "modu-grid",
    title: "MODÜ-GRID",
    description: "Yapay zekâ destekli akıllı şebeke simülasyonu ve IoT tabanlı enerji yönetim ekosistemi.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "AI"],
    featured: true,
    year: 2026
  },
  {
    id: "randevu-asistanim",
    title: "RandevuAsistanim.online",
    description: "Otonom WhatsApp entegrasyonuna sahip, çok kiracılı (multi-tenant) SaaS randevu yönetim platformu.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "JWT", "WhatsApp API"],
    featured: true,
    year: 2026
  },
  {
    id: "solveny",
    title: "Solveny",
    description: "Yapay zekâ ve n8n tabanlı gelişmiş iş akışı otomasyonları ve operasyonel mühendislik çözümleri.",
    tags: ["Next.js", "Tailwind CSS", "n8n", "Automation"],
    featured: false,
    year: 2025
  }
];
```

---

## 7. Tasarım Yönü

| Özellik | Tercih |
|---------|--------|
| Tema | Karanlık, minimal |
| Arka plan | `bg-zinc-950` veya `bg-slate-950` |
| Accent renk | **Zümrüt yeşili** (`emerald-500`) — birincil tercih. Alternatif: siber mavi (`sky-500` / `indigo-500`) |
| Tipografi | Temiz sans-serif (Inter, Geist veya benzeri) |
| Layout | Geniş boşluk, okunaklı tipografi |
| Animasyon | Hafif (hover, fade-in) — abartısız |
| Referans his | Developer portföyü — sade ve modern |

---

## 8. Teknik Stack

| Katman | Seçim |
|--------|-------|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Deploy | Vercel |
| Domain | yunusardaguney.com |
| İçerik | `projects.ts` statik data |
| Font | next/font |
| Analytics | Vercel Analytics (dashboard'dan tek tık, sıfır kod) |

**Neden:** Hızlı geliştirme, iyi SEO, kolay deploy, portföy için fazlasıyla yeterli.

---

## 9. İçerik Checklist

- [x] Rol / unvan → Software & AI Automation Engineer
- [x] Tagline
- [x] Hakkımda metni (3 paragraf — builder vizyonu)
- [x] En az 3 proje:
  - [x] MODÜ-GRID
  - [x] RandevuAsistanim.online
  - [x] Solveny Agency Showcase
- [x] Sosyal linkler (GitHub, LinkedIn, mail → `src/config/site.ts`)
- [ ] Profil fotoğrafı → `public/me.jpg` (skeleton yer tutucu aktif)
- [ ] Proje ekran görüntüleri → `public/projects/*.png` (gradyan yer tutucu aktif)

---

## 10. SEO & Meta

| Alan | Değer |
|------|-------|
| Title | Yunus Arda Güney — Software & AI Automation Engineer |
| Description | Production-grade web uygulamaları, SaaS platformları ve yapay zekâ destekli otomasyon sistemleri. |
| OG image | Sosyal paylaşım için statik görsel |
| Favicon | Basit monogram veya initials (YA) |

---

## 11. Performans Hedefleri

- Lighthouse Performance: 90+
- First load: < 2s (3G hariç)
- Görseller: WebP/AVIF, lazy load
- JS bundle: minimal (statik site)

---

## 12. Başarı Kriterleri

v1 tamam sayılır eğer:

1. Mobilde ve desktop'ta düzgün görünüyorsa
2. En az 3 proje listeleniyorsa
3. Her projede en az açıklama + tag varsa
4. İletişim linkleri çalışıyorsa
5. yunusardaguney.com'da canlıysa

---

## 13. Gelecek (v2+)

- Blog / notlar
- Proje detay sayfaları (`/projects/[slug]`)
- İngilizce versiyon
- CMS (Contentlayer, Sanity)
- Proje filtreleme (tag'e göre)
- Canlı demo / repo linkleri (projeler public olduğunda)

---

## 14. Kararlar (eski: Açık Sorular)

| # | Soru | Karar |
|---|------|-------|
| 1 | Rol/unvan | **Software & AI Automation Engineer** — full-stack + AI/otomasyon kasını tek unvanda birleştirir |
| 2 | Projeler | MODÜ-GRID, RandevuAsistanim.online, Solveny → `projects.ts` statik veri. Kaynak kod gizli olsa bile mimari açıklama + ekran görüntüsü yeterli |
| 3 | Profil fotoğrafı | Evet — temiz, sade portre; Hakkımda bölümünde |
| 4 | Accent renk | `emerald-500` (birincil). Alternatif: `sky-500` / `indigo-500` |
| 5 | Analytics | Vercel Analytics — sıfır kod, sıfır bundle yükü |

---

*Son güncelleme: Mayıs 2026*
