const achievements = [
  'Improved SEO indexation for large scale e-commerce pages',
  'Increased organic traffic and reduced time-to-index',
  'Optimized Core Web Vitals (LCP, CLS)',
  'Built scalable architectures (SSR / micro-frontends)',
  'Delivered apps used by 50k+ users',
] as const;

export default function KeyAchievements() {
  return (
    <section
      className="section key-achievements"
      id="key-achievements"
      aria-labelledby="key-achievements-title"
    >
      <h2 id="key-achievements-title" className="section__title">
        Key Achievements
      </h2>
      <div className="key-achievements__content">
        <ul className="key-achievements__list">
          {achievements.map((item) => (
            <li key={item}>✔ {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
