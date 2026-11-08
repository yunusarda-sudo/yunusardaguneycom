import { navLinks, siteConfig, socialLinks } from "@/config/site";

export function Nav() {
  return (
    <header className="folio-wrap site-header">
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#top" className="site-brand">{siteConfig.name}</a>
        <div className="site-nav-links">
          {navLinks.filter(link => link.href !== "#experience").map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
      </nav>
    </header>
  );
}
