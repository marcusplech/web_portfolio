import Image, { type StaticImageData } from 'next/image';

import anifinder from '@/assets/imgs/anifinder.png';
import ecommerce from '@/assets/imgs/ecommerce.webp';
import ArrowRight from '@/assets/svg/arrowright.svg';

type PortfolioProject = {
  name: string;
  description: string;
  image: string | StaticImageData;
  imageAlt: string;
  demoUrl: string;
  codeUrl: string;
};

const projects: PortfolioProject[] = [
  {
    name: 'AniFinder',
    description:
      'Anime discovery platform inspired by AniList, rebuilt with Next.js and Tailwind CSS. Uses React Query for data fetching, React Hook Form for filters/search, and e2e test coverage with Playwright.',
    image: anifinder,
    imageAlt: 'Screenshot of the Anifinder anime listing app',
    demoUrl: 'https://anifinder-sepia.vercel.app/',
    codeUrl: 'https://github.com/marcusplech/anifinder',
  },
  // {
  //   name: 'Modern Ecommerce Website',
  //   description:
  //     'Study project: storefront and checkout with React, Redux, Commerce.js, and Stripe — focused on cart flow, payments UX, and global state.',
  //   image: ecommerce,
  //   imageAlt: 'Screenshot of the ecommerce storefront',
  //   demoUrl: 'https://meuecommerce.netlify.app/',
  //   codeUrl: 'https://github.com/marcusplech/Ecommerce',
  // },
];

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className="portfolio__container">
        {projects.map((project) => (
          <div key={project.name} className="portfolio__content">
            <Image
              className="portfolio__img"
              src={project.image}
              alt={project.imageAlt}
              width={960}
              height={540}
              sizes="(max-width: 1024px) 90vw, 700px"
            />
            <div className="portfolio__data">
              <h3 className="portfolio__title">{project.name}</h3>
              <p className="portfolio__description">{project.description}</p>
              <div className="buttons__portfolio">
                <a
                  title={`Open demo for ${project.name}`}
                  href={project.demoUrl}
                  className="portfolio__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                  <ArrowRight className="button__icon" />
                </a>
                <a
                  title={`Open source code for ${project.name}`}
                  href={project.codeUrl}
                  className="portfolio__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                  <ArrowRight className="button__icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
