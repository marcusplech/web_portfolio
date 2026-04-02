import type { StaticImageData } from 'next/image';

import { ArrowRight, anifinder, ecommerce } from '@/assets';

function imgSrc(imp: string | StaticImageData) {
  return typeof imp === 'string' ? imp : imp.src;
}

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className="portfolio__container">
        <div className="portfolio__content">
          <img
            width={50}
            height={50}
            className="portfolio__img"
            src={imgSrc(anifinder)}
            alt="anifinder website"
          />
          <div className="portfolio__data">
            <h3 className="portfolio__title">Anime Website</h3>
            <p className="portfolio__description">
              This is a personal side project of mine (made with React and Redux), which is based on
              a anime community app (namely, AniList) I&apos;m very fond of. It is designed to
              showcase the most recent and core React skills (as of 2020).
            </p>
            <div className="buttons__portfolio">
              <a
                title="link anifinder website"
                href="https://anifinder.netlify.app/"
                className="portfolio__button"
                target="_blank"
                rel="noreferrer"
              >
                Demo
                <ArrowRight className="button__icon" />
              </a>
              <a
                title="link github anifinder"
                href="https://github.com/marcusplech/anifinder"
                className="portfolio__button"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <ArrowRight className="button__icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio__content">
          <img
            width={50}
            height={50}
            className="portfolio__img"
            src={imgSrc(ecommerce)}
            alt="ecommerce website"
          />
          <div className="portfolio__data">
            <h3 className="portfolio__title">Modern Ecommerce Website</h3>
            <p className="portfolio__description">
              This is a personal ecommerce project with a modern design made with React, Redux,
              Ecommercejs API and Stripe.
            </p>
            <div className="buttons__portfolio">
              <a
                title="link ecommerce website"
                href="https://meuecommerce.netlify.app/"
                className="portfolio__button"
                target="_blank"
                rel="noreferrer"
              >
                Demo
                <ArrowRight className="button__icon" />
              </a>
              <a
                title="link github ecommerce"
                href="https://github.com/marcusplech/Ecommerce"
                className="portfolio__button"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <ArrowRight className="button__icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
