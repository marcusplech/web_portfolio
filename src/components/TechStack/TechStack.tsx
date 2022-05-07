import styles from './TechStack.module.css';
import {
  Css,
  Html,
  Javascript,
  Jest,
  Nextjs,
  Reactjs,
  Redux,
  Tailwind,
  TestingLibrary,
  Typescript,
} from 'assets';

const TechStack = () => (
  <section className="tech section" id="tech-stack">
    <h2 className={styles.skills__title}>Main Skills</h2>
    <div className={styles.separator} />
    <ul className={styles.tech_skills}>
      <li>
        <Reactjs
          arial-label="react icon"
          style={{ color: '#61DAFB' }}
          className={styles.stack__svg}
        />
        <p className={styles.skills__name}>React</p>
      </li>
      <li>
        <Typescript
          arial-label="typescript icon"
          style={{ color: '#3178C6' }}
          className={styles.stack__svg}
        />
        <p className={styles.skills__name}>Typescript</p>
      </li>
      <li>
        <Javascript
          arial-label="javascript icon"
          style={{ color: '#F7DF1E' }}
          className={styles.stack__svg}
        />
        <p className={styles.skills__name}>Javascript</p>
      </li>
      <li>
        <Html arial-label="html icon" style={{ color: '#E34F26' }} className={styles.stack__svg} />
        <p className={styles.skills__name}>HTML</p>
      </li>
      <li>
        <Css arial-label="css icon" style={{ color: '#1572B6' }} className={styles.stack__svg} />
        <p className={styles.skills__name}>CSS</p>
      </li>
      <li>
        <Nextjs
          arial-label="nextjs icon"
          style={{ color: '#000000' }}
          className={styles.stack__svg}
        />
        <p className={styles.skills__name}>Nextjs</p>
      </li>
      <li>
        <Tailwind
          arial-label="tailwind icon"
          style={{ color: '#06B6D4' }}
          className={styles.stack__svg}
        />
        <p className={styles.skills__name}>Tailwind</p>
      </li>
      <li>
        <Redux
          arial-label="redux icon"
          style={{ color: '#764ABC' }}
          className={styles.stack__svg}
        />
        <p className={styles.skills__name}>Redux</p>
      </li>
      <li>
        <TestingLibrary
          arial-label="testing library icon"
          style={{ color: '#E33332' }}
          className={styles.stack__svg}
        />
        <p className={styles.skills__name}>Testing Library</p>
      </li>
      <li>
        <Jest arial-label="jest icon" style={{ color: '#C21325' }} className={styles.stack__svg} />
        <p className={styles.skills__name}>Jest</p>
      </li>
    </ul>
  </section>
);

export default TechStack;
