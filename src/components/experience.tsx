import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="folio-wrap portfolio-section">
      <p className="eyebrow">03 / Experience &amp; Community</p>
      <h2 className="section-title">Where I&apos;ve been involved.</h2>
      <ol className="experience-list">
        {experience.map(item => (
          <li key={item.org} className="experience-item">
            <div><h3 className="experience-name">{item.org}</h3><p className="experience-role">{item.role}</p><p className="experience-description">{item.points[0]}</p></div>
            <p className="eyebrow">{item.period}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
