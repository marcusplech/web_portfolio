import './TechStack.module.css';
import {
    Css,
    // Git,
    // Html,
    // Javascript,
    // Jest,
    // Nextjs,
    // Nodejs,
    Reactjs,
    // Redux,
    // Tailwind,
    // TestingLibrary,
    // Typescript,
  } from 'assets';

const TechStack = () => (
  <section className="tech section" id="tech-stack">
    <h2 className="skills__title">Main Skills</h2>
    <div className="separator" />
    <div className="tech-skills">
      <div>
        <Reactjs arial-label="react icon" className="stack__svg" />
        <p className="skills__name">React</p>
      </div>
      {/* <div>
        <Home className="stack__svg" />
      </div> */}
      {/* <div>
                    <img
                        src={JAVASCRIPT}
                        alt="Javascript"
                        loading="lazy"
                        className="stack__svg"
                    />
                    <p className="skills__name">Javascript</p>
                </div>
                <div>
                    <img
                        src={HTML}
                        alt="HTML"
                        loading="lazy"
                        className="stack__svg"
                    />
                    <p className="skills__name">HTML</p>
                </div>
                <div>
                    <img
                        src={CSS}
                        alt="CSS"
                        loading="lazy"
                        className="stack__svg"
                    />
                    <p className="skills__name">CSS</p>
                </div>
                <div>
                    <img
                        src={REDUX}
                        alt="REDUX"
                        loading="lazy"
                        className="stack__svg"
                    />
                    <p className="skills__name">Redux</p>
                </div>
                <div>
                    <img
                        src={TYPESCRIPT}
                        alt="Typescript"
                        loading="lazy"
                        className="stack__svg"
                    />
                    <p className="skills__name">Typescript</p>
                </div>
                <div>
                    <img
                        src={NEXT}
                        alt="NextJS"
                        loading="lazy"
                        className="stack__svg"
                    />
                    <p className="skills__name">NextJs</p>
                </div>
                <div>
                    <img
                        src={RTL}
                        alt="React Testing Library"
                        loading="lazy"
                        className="stack__svg"
                    />
                    <p className="skills__name">Testing</p>
                </div> */}
    </div>
  </section>
);

export default TechStack;
