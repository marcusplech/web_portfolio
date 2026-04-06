import { contactLinks, experienceHighlights } from '@/content/site';

export default function ExperienceContact() {
  return (
    <section className="section" id="experience-contact" aria-labelledby="experience-contact-title">
      <h2 id="experience-contact-title" className="section__title">
        Experience & Contact
      </h2>
      <span className="section__subtitle">What I bring and how to reach me</span>

      <div className="experience-contact">
        <div className="experience-card">
          <h3>Highlights</h3>
          <ul>
            {experienceHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="experience-card">
          <h3>Contact</h3>
          <p>Open to remote opportunities and product-focused teams.</p>
          <div className="contact-actions">
            <a href={contactLinks.email} className="button button__flex">
              Email me
            </a>
            <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" className="button button__flex">
              LinkedIn
            </a>
            <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" className="button button__flex">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
