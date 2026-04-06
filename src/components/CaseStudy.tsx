export default function CaseStudy() {
  return (
    <section className="section case-study" id="case-study" aria-labelledby="case-study-title">
      <h2 id="case-study-title" className="section__title">
        Case Study — SEO Optimization for Large-scale E-commerce
      </h2>

      <div className="case-study__content">
        <article className="case-study__block">
          <h3 className="case-study__heading">Problem</h3>
          <p className="case-study__text">
            Category pages were not properly indexed due to heavy client side rendering, impacting
            organic traffic and search visibility.
          </p>
        </article>

        <article className="case-study__block">
          <h3 className="case-study__heading">Solution</h3>
          <p className="case-study__text">
            Implemented a hybrid rendering strategy using SSR and pre-rendering to ensure critical
            content was available in the initial HTML response.
          </p>
        </article>

        <article className="case-study__block">
          <h3 className="case-study__heading">Approach</h3>
          <p className="case-study__text">
            Analyzed rendering bottlenecks and SEO requirements, prioritizing content delivery for
            search engine crawlers while maintaining performance and user experience.
          </p>
        </article>

        <article className="case-study__block">
          <h3 className="case-study__heading">Result</h3>
          <p className="case-study__text">
            Increased organic traffic and significantly reduced time to index for thousands of
            pages, improving overall search visibility.
          </p>
        </article>
      </div>
    </section>
  );
}
