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
} from '@/assets';

export default function TechStack() {
  return (
    <section className="tech section" id="tech-stack">
      <h2 className="skills__title">Main Skills</h2>
      <div className="separator" />
      <ul className="tech_skills">
        <li>
          <Reactjs
            aria-label="react icon"
            style={{ color: '#61DAFB' }}
            className="stack__svg"
          />
          <p className="skills__name">React</p>
        </li>
        <li>
          <Typescript
            aria-label="typescript icon"
            style={{ color: '#3178C6' }}
            className="stack__svg"
          />
          <p className="skills__name">Typescript</p>
        </li>
        <li>
          <Javascript
            aria-label="javascript icon"
            style={{ color: '#F7DF1E' }}
            className="stack__svg"
          />
          <p className="skills__name">Javascript</p>
        </li>
        <li>
          <Html aria-label="html icon" style={{ color: '#E34F26' }} className="stack__svg" />
          <p className="skills__name">HTML</p>
        </li>
        <li>
          <Css aria-label="css icon" style={{ color: '#1572B6' }} className="stack__svg" />
          <p className="skills__name">CSS</p>
        </li>
        <li>
          <Nextjs aria-label="nextjs icon" style={{ color: '#000000' }} className="stack__svg" />
          <p className="skills__name">Nextjs</p>
        </li>
        <li>
          <Tailwind aria-label="tailwind icon" style={{ color: '#06B6D4' }} className="stack__svg" />
          <p className="skills__name">Tailwind</p>
        </li>
        <li>
          <Redux aria-label="redux icon" style={{ color: '#764ABC' }} className="stack__svg" />
          <p className="skills__name">Redux</p>
        </li>
        <li>
          <TestingLibrary
            aria-label="testing library icon"
            style={{ color: '#E33332' }}
            className="stack__svg"
          />
          <p className="skills__name">Testing Library</p>
        </li>
        <li>
          <Jest aria-label="jest icon" style={{ color: '#C21325' }} className="stack__svg" />
          <p className="skills__name">Jest</p>
        </li>
      </ul>
    </section>
  );
}
