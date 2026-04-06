'use client';

import { useState } from 'react';

import Blob from '@/assets/logo/Blob';
import ArrowMessage from '@/assets/svg/arrowRightMessage.svg';
import Github from '@/assets/svg/github.svg';
import Linkedln from '@/assets/svg/linkedln.svg';
import Resume from '@/assets/svg/resume.svg';
import { contactLinks, siteDescription, siteTagline } from '@/content/site';

export default function Landing() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <section className="section home" id="about" aria-labelledby="hero-title">
      <div className="home__container home__max home__grid">
        <div className="home__content home__grid">
          <div className="home__img">{Blob}</div>
          <div className="home__data">
            <h1 id="hero-title" className="home__title">
              Hi, I&apos;m <span className="home__title-accent">Marcus</span>
            </h1>
            <h2 className="home__subtitle">{siteTagline}</h2>
            <p className="home__description">{siteDescription}</p>
            <div className="hero__actions">
              <a href="#portfolio" className="button button__flex">
                View my work
                <ArrowMessage className="button__icon" />
              </a>
              <button
                type="button"
                className="button button__flex"
                onClick={() => setIsContactModalOpen(true)}
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
      {isContactModalOpen && (
        <div className="contact-modal__overlay" onClick={closeContactModal}>
          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="contact-modal__close"
              aria-label="Close contact options"
              onClick={closeContactModal}
            >
              ×
            </button>
            <h3 id="contact-modal-title" className="contact-modal__title">
              Contact links
            </h3>
            <div className="contact-modal__actions">
              <a
                href={contactLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="button button__flex"
              >
                <Linkedln className="button__social-icon" />
                LinkedIn
              </a>
              <a
                href={contactLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button button__flex"
              >
                <Github className="button__social-icon" />
                GitHub
              </a>
              <a
                href={contactLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="button button__flex"
              >
                <Resume className="button__social-icon" />
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
