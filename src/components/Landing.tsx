import Blob from '@/assets/logo/Blob';
import ArrowMessage from '@/assets/svg/arrowRightMessage.svg';
import SocialIcon from '@/components/SocialIcon';
import { siteDescription, siteTagline } from '@/content/site';

export default function Landing() {
  return (
    <section className="section home" id="about" aria-labelledby="hero-title">
      <div className="home__container home__max home__grid">
        <div className="home__content home__grid">
          <ul aria-label="Social and resume links" className="home__social">
            <SocialIcon name="linkedin" />
            <SocialIcon name="github" />
            <SocialIcon name="resume" />
          </ul>
          <div className="home__img">{Blob}</div>
          <div className="home__data">
            <h1 id="hero-title" className="home__title">
              Hi, I&apos;m <span className="home__title-accent">Marcus</span>
            </h1>
            <h2 className="home__subtitle">{siteTagline}</h2>
            <p className="home__description">{siteDescription}</p>
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
