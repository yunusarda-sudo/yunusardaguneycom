import { portfolioDesign, siteConfig, socialLinks } from "@/config/site";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  const copy = portfolioDesign.contact;
  return (
    <section id="contact" className="folio-wrap portfolio-section">
      <p className="eyebrow">04 / Contact</p>
      <h2 className="section-title">{copy.title}</h2>
      <div className="contact-links">
        <a href={socialLinks.email} className="text-link">{siteConfig.email} ↗</a>
        <a href={socialLinks.linkedin} className="text-link" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a href={socialLinks.github} className="text-link" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>
      <details className="contact-details">
        <summary>{copy.form} +</summary>
        <div className="mt-6"><ContactForm /></div>
      </details>
    </section>
  );
}
