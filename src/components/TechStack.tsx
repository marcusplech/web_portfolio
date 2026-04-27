import type { ComponentType, SVGProps } from 'react';
import Css from '@/assets/stack/css.svg';
import Html from '@/assets/stack/html.svg';
import Javascript from '@/assets/stack/javascript.svg';
import Jest from '@/assets/stack/jest.svg';
import Nextjs from '@/assets/stack/nextjs.svg';
import Reactjs from '@/assets/stack/react.svg';
import Redux from '@/assets/stack/redux.svg';
import Svelte from '@/assets/stack/svelte.svg';
import Tailwind from '@/assets/stack/tailwind.svg';
import TestingLibrary from '@/assets/stack/testing.svg';
import Typescript from '@/assets/stack/typescript.svg';

type StackIcon = ComponentType<SVGProps<SVGSVGElement>>;

type StackItem = {
  Icon: StackIcon;
  ariaLabel: string;
  color: string;
  name: string;
};

const STACK_ITEMS: StackItem[] = [
  { Icon: Nextjs, ariaLabel: 'nextjs icon', color: '#000000', name: 'Next.js' },
  { Icon: Reactjs, ariaLabel: 'react icon', color: '#61DAFB', name: 'React' },
  { Icon: Svelte, ariaLabel: 'svelte icon', color: '#FF3E00', name: 'Svelte' },
  { Icon: Typescript, ariaLabel: 'typescript icon', color: '#3178C6', name: 'TypeScript' },
  { Icon: Javascript, ariaLabel: 'javascript icon', color: '#F7DF1E', name: 'JavaScript' },
  { Icon: Html, ariaLabel: 'html icon', color: '#E34F26', name: 'HTML' },
  { Icon: Css, ariaLabel: 'css icon', color: '#1572B6', name: 'CSS' },
  { Icon: Tailwind, ariaLabel: 'tailwind icon', color: '#06B6D4', name: 'Tailwind' },
  { Icon: Redux, ariaLabel: 'redux icon', color: '#764ABC', name: 'Redux' },
  {
    Icon: TestingLibrary,
    ariaLabel: 'testing library icon',
    color: '#E33332',
    name: 'Testing Library',
  },
  { Icon: Jest, ariaLabel: 'jest icon', color: '#C21325', name: 'Jest' },
];

export default function TechStack() {
  return (
    <section className="tech section" id="tech-stack">
      <h2 className="skills__title">Main Skills</h2>
      <div className="separator" />
      <ul className="tech_skills">
        {STACK_ITEMS.map(({ Icon, ariaLabel, color, name }) => (
          <li key={name} className="tech-skill-item">
            <Icon aria-label={ariaLabel} style={{ color }} className="stack__svg" />
            <p className="skills__name">{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
