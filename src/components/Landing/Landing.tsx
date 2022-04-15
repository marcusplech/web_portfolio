import styles from '../Home/Home.module.css';
import { ReactComponent as Blob1 } from 'assets/svg/blob1.svg';

const Landing = () => (
  <section className={`${styles.home} ${styles.section}`} id="home">
    <div className={`${styles.home__container} ${styles.container} ${styles.grid}`}>
      <div className="home__content grid">
        <div className="home__social">
          <a
            title="link linkedin"
            href="https://www.linkedin.com/in/devmarcusplech/"
            target="_blank"
            rel="noreferrer"
            className="home__social-icon"
          >
            <i className="uil uil-linkedin-alt" />
          </a>
          <a
            title="link CV"
            href="https://drive.google.com/file/d/1iC-yY3WnlbHNXpIdZMYbIl9qHnUQXEb2/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="home__social-icon"
          >
            <i className="uil uil-file-info-alt" />
          </a>
          <a
            title="link github"
            href="https://github.com/marcusplech"
            target="_blank"
            rel="noreferrer"
            className="home__social-icon"
          >
            <i className="uil uil-github-alt" />
          </a>
        </div>
        <div className="home__img">
          <Blob1 />
        </div>
        <div className="home__data">
          <h1 className="home__title">Hi, I&apos;m Marcus</h1>
          <h2 className="home__subtitle">Frontend developer</h2>
          <p className="home__description">
            Frontend developer with over three years of experience developing and implementing web
            applications. Always looking forward to work with scalable projects and explore new
            cultures and technologies.
          </p>
          <a href="#portfolio" className="button button--flex">
            Portfolio
            <i className="uil uil-message button__icon" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Landing;
