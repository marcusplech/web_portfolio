import styles from '../Home/Home.module.css';
import Icon from 'components/Navigation/Icon';
import { ArrowMessage } from 'assets';
import Blob from 'assets/logo/Blob';

const Landing = () => (
  <section className={`${styles.section} home section`}>
    <div className={`${styles.home__container} ${styles.container} ${styles.grid}`}>
      <div className={`${styles.home__content} ${styles.grid}`}>
        <ul aria-label="secondary navigation" className={styles.home__social}>
          <Icon name="linkedin" />
          <Icon name="github" />
          <Icon name="resume" />
        </ul>
        <div className={styles.home__img}>{Blob}</div>
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
            <ArrowMessage className={styles.button__icon} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Landing;
