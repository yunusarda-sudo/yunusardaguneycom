import { portfolioDesign } from "@/config/site";

export function About() {
  const copy = portfolioDesign.about;
  return (
    <section id="about" className="folio-wrap portfolio-section">
      <p className="eyebrow">02 / {copy.label}</p>
      <h2 className="section-title">{copy.title}</h2>
      <div className="reading-copy">
        <p>{copy.intro}</p>
        <p>{copy.description}</p>
        <p>{copy.outside}</p>
      </div>
    </section>
  );
}
