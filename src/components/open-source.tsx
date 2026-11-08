import { portfolioDesign, socialLinks } from "@/config/site";

export function OpenSource() {
  const copy = portfolioDesign.openSource;
  return (
    <section id="open-source" className="folio-wrap portfolio-section">
      <p className="eyebrow">04 / Open Source</p>
      <h2 className="section-title">{copy.title}</h2>
      <div className="reading-copy">
        <p>{copy.intro}</p>
        <p>{copy.description}</p>
        <p>{copy.projects}</p>
      </div>
      <a href={socialLinks.github} className="text-link mt-4" target="_blank" rel="noopener noreferrer">
        {copy.cta} ↗
      </a>
    </section>
  );
}
