import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="folio-wrap portfolio-section">
      <p className="eyebrow">03 / Experience</p>
      <ol className="experience-list">
        {experience.map(item => (
          <li key={item.org} className="experience-item">
            <div><h2 className="experience-name">{item.org}</h2><p className="experience-role">{item.role}</p></div>
            <p className="eyebrow">{item.period}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
