import './Portfolio.module.css';
// import SwiperCore from 'swiper/core';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper from 'react-id-swiper';
// import 'swiper/swiper-bundle.min.css';
import ecommerceHome from 'assets/imgs/ecommerce.webp';
import anifinder from 'assets/imgs/anifinder.webp';

// import * as S from './styled';

const Portfolio = () => {
  // SwiperCore.use([Pagination, Navigation]);

  // const swiper =
  //   // eslint-disable-next-line
  //       (".swiper-container",
  //   {
  //     cssMode: true,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //   });

  return (
    // <S.CarouselWrapper>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>
        <div className="portfolio__container container swiper-container">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Swiper 
             modules={[Navigation, Pagination]}
             spaceBetween={50}
             slidesPerView={3}
             navigation
             pagination={{ clickable: true }}
             scrollbar={{ draggable: true }}
             onSwiper={(swiper) => console.log(swiper)}
             onSlideChange={() => console.log('slide change')}
           >
             <SwiperSlide>
            <div className="portfolio__content grid">
              <img
                width={50}
                height={50}
                className="portfolio__img"
                src={anifinder}
                alt="anifinder website"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Anime Website</h3>
                <p className="portfolio__description">
                  This is a personal side project of mine (made with React and Redux), which is
                  based on a anime community app (namely, AniList) I&apos;m very fond of. It is
                  designed to showcase the most recent and core React skills (as of 2020).
                </p>
                <div className="buttons__portfolio">
                  <a
                    title="link anifinder website"
                    href="https://anifinder.netlify.app/"
                    className="button button--flex button--small portfolio__button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                  <a
                    title="link github anifinder"
                    href="https://github.com/marcusplech/anifinder"
                    className="button button--flex button--small portfolio__button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>
            </div>
             </SwiperSlide>
             <SwiperSlide>
            <div className="portfolio__content grid">
              <img
                width={50}
                height={50}
                className="portfolio__img"
                src={ecommerceHome}
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
                    className="button button--flex button--small portfolio__button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                  <a
                    title="link github ecommerce"
                    href="https://github.com/marcusplech/Ecommerce"
                    className="button button--flex button--small portfolio__button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>
            </div>
             </SwiperSlide>
          </Swiper>
        </div>
      </section>
    // </S.CarouselWrapper>
  );
};

export default Portfolio;
