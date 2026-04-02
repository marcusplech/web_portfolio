import Blob from '@/assets/logo/Blob';
import { ArrowMessage } from '@/assets';
import Icon from '@/components/Navigation/Icon';

export default function Landing() {
  return (
    <section className="section home">
      <div className="home__container home__max home__grid">
        <div className="home__content home__grid">
          <ul aria-label="secondary navigation" className="home__social">
            <Icon name="linkedin" />
            <Icon name="github" />
            <Icon name="resume" />
          </ul>
          <div className="home__img">{Blob}</div>
          <div className="home__data">
            <h1 className="home__title">Hi, I&apos;m Marcus</h1>
            <h2 className="home__subtitle">Frontend developer</h2>
            <p className="home__description">
              Frontend developer with over three years of experience developing and implementing web
              applications. Always looking forward to work with scalable projects and explore new
              cultures and technologies.
            </p>
            <a href="#portfolio" className="button button__flex">
              Portfolio
              <ArrowMessage className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
