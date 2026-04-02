import type { HTMLAttributes } from 'react';

import { Github, Linkedln, Resume } from '@/assets';

type IconProps = {
  name: 'linkedin' | 'github' | 'resume';
} & HTMLAttributes<HTMLLIElement>;

export default function Icon({ name, className }: IconProps) {
  const url = {
    linkedin: 'https://www.linkedin.com/in/devmarcusplech/',
    github: 'https://github.com/marcusplech',
    resume: 'https://drive.google.com/file/d/1zuJF0LUqhrtLc8yC-6hof_gws34w15nh/view?usp=sharing',
  } as const;

  const ariaLabel = {
    linkedin: 'LinkedIn profile',
    github: 'GitHub profile',
    resume: 'Resume (PDF)',
  } as const;

  return (
    <li className={className}>
      <a
        href={url[name]}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel[name]}
      >
        {name === 'linkedin' && <Linkedln className="icons" />}
        {name === 'resume' && <Resume className="icons" />}
        {name === 'github' && <Github className="icons" />}
      </a>
    </li>
  );
}
