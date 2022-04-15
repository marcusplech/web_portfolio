import styles from '../Home/Home.module.css';
import { Blob1 } from 'assets';
import { Linkedln, Github, ArrowRight } from 'assets';

const Landing = () => (
  <section className={`${styles.section} home section`}>
    <div className={`${styles.home__container} ${styles.container} ${styles.grid}`}>
      <div className={`${styles.home__content} ${styles.grid}`}>
        <ul className={styles.home__social}>
          <li>
            <a
              title="link linkedin"
              href="https://www.linkedin.com/in/devmarcusplech/"
              target="_blank"
              rel="noreferrer"
              className={styles.home__social_icon}
            >
              <Linkedln />
            </a>
          </li>
          <li>
            <a
              title="link CV"
              href="https://drive.google.com/file/d/1iC-yY3WnlbHNXpIdZMYbIl9qHnUQXEb2/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className={styles.home__social_icon}
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              title="link github"
              href="https://github.com/marcusplech"
              target="_blank"
              rel="noreferrer"
              className={styles.home__social_icon}
            >
              <Github />
            </a>
          </li>
        </ul>
        <div className={styles.home__img}>
          <Blob1 />
        </div>
        <div className={styles.home__data}>
          <h1 className={styles.home__title}>Hi, I&apos;m Marcus</h1>
          <h2 className={styles.home__subtitle}>Frontend developer</h2>
          <p className={styles.home__description}>
            Frontend developer with over three years of experience developing and implementing web
            applications. Always looking forward to work with scalable projects and explore new
            cultures and technologies.
          </p>
          <a href="#portfolio" className={`${styles.button} ${styles.button__flex}`}>
            Portfolio
            <ArrowRight className={styles.button__icon} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Landing;
