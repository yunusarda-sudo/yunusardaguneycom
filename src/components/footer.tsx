import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="folio-wrap site-footer">
      <span>© {new Date().getFullYear()} {siteConfig.name} · İstanbul</span>
      <a href="#top">Başa dön ↑</a>
    </footer>
  );
}
