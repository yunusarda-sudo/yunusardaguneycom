import { portfolioDesign, siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="folio-wrap hero-stage" aria-label={siteConfig.name}>
      <p className="eyebrow">{portfolioDesign.hero.overline}</p>
      <h1 className="hero-name"><span>Yunus Arda</span><span>Güney.</span></h1>
      <p className="hero-copy">{portfolioDesign.hero.intro}</p>
      <a href="#projects" className="text-link hero-link">{portfolioDesign.hero.cta} ↓</a>
    </section>
  );
}
