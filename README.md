# yunusardaguney.com

Kişisel portföy sitesi — proje odaklı, production-grade.

## AI / Vibe coding workflow

Bu repo [humanstack/vibe-coding-template](https://github.com/humanstack/vibe-coding-template) AI katmanından uyarlanmıştır (tam full-stack şablon değil — v1 frontend-only):

| Dosya | Amaç |
|-------|------|
| `AGENTS.md` | Cursor / Claude agent talimatları |
| `CONTEXT.md` | Kısa mimari özet (agent bağlamı) |
| `product.md` | Ürün spec (tek doğruluk kaynağı) |
| `.cursor/rules/` | Otomatik Cursor kuralları ve `@react-component-template` |

Yeni özellik veya büyük değişiklikte agent’a `product.md` + `CONTEXT.md` ekleyin.

## Geliştirme

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)

## İçerik

- `product.md` — ürün spec
- `src/config/site.ts` — site meta, sosyal linkler, hakkımda metni
- `src/data/projects.ts` — proje listesi

## Görseller

| Dosya | Açıklama |
|-------|----------|
| `public/me.jpg` | Profil fotoğrafı |
| `public/projects/*.png` | Proje ekran görüntüleri |

Görseller eklenene kadar skeleton yer tutucular aktif.

## Deploy

Vercel → `yunusardaguney.com`
