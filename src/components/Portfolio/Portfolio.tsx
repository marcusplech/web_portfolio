import styles from './Portfolio.module.css';

import { ArrowRight, ecommerce, anifinder } from 'assets';

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className={styles.portfolio__container}>
        <div className={styles.portfolio__content}>
          <img
            width={50}
            height={50}
            className={styles.portfolio__img}
            src={anifinder}
            alt="anifinder website"
          />
          <div className={styles.portfolio__data}>
            <h3 className={styles.portfolio__title}>Anime Website</h3>
            <p className={styles.portfolio__description}>
              This is a personal side project of mine (made with React and Redux), which is based on
              a anime community app (namely, AniList) I&apos;m very fond of. It is designed to
              showcase the most recent and core React skills (as of 2020).
            </p>
            <div className={styles.buttons__portfolio}>
              <a
                title="link anifinder website"
                href="https://anifinder.netlify.app/"
                className={styles.portfolio__button}
                target="_blank"
                rel="noreferrer"
              >
                Demo
                <ArrowRight className={styles.button__icon} />
              </a>
              <a
                title="link github anifinder"
                href="https://github.com/marcusplech/anifinder"
                className={styles.portfolio__button}
                target="_blank"
                rel="noreferrer"
              >
                Code
                <ArrowRight className={styles.button__icon} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.portfolio__content}>
          <img
            width={50}
            height={50}
            className={styles.portfolio__img}
            src={ecommerce}
            alt="ecommerce website"
          />
          <div className={styles.portfolio__data}>
            <h3 className={styles.portfolio__title}>Modern Ecommerce Website</h3>
            <p className={styles.portfolio__description}>
              This is a personal ecommerce project with a modern design made with React, Redux,
              Ecommercejs API and Stripe.
            </p>
            <div className={styles.buttons__portfolio}>
              <a
                title="link ecommerce website"
                href="https://meuecommerce.netlify.app/"
                className={styles.portfolio__button}
                target="_blank"
                rel="noreferrer"
              >
                Demo
                <ArrowRight className={styles.button__icon} />
              </a>
              <a
                title="link github ecommerce"
                href="https://github.com/marcusplech/Ecommerce"
                className={styles.portfolio__button}
                target="_blank"
                rel="noreferrer"
              >
                Code
                <ArrowRight className={styles.button__icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
