import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="folio-wrap site-footer">
      <span>© {new Date().getFullYear()} {siteConfig.name} · Istanbul</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
