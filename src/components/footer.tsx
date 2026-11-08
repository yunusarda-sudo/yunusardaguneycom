import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="folio-wrap site-footer">
      <span>© 2026 {siteConfig.name} · İzmir, Türkiye</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
