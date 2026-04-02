import type { HTMLAttributes } from 'react';

import { Github, Linkedln, Resume } from '@/assets';

type IconProps = {
  name: 'linkedin' | 'github' | 'resume';
} & HTMLAttributes<HTMLLIElement>;

export default function Icon({ name, className }: IconProps) {
  const url = {
    linkedin: 'https://www.linkedin.com/in/devmarcusplech/',
    github: 'https://github.com/marcusplech',
    resume: 'https://drive.google.com/file/d/1iC-yY3WnlbHNXpIdZMYbIl9qHnUQXEb2/view?usp=sharing',
  };

  return (
    <li className={className}>
      <a {...{ href: url[name], target: '_blank', rel: 'noreferrer', 'aria-label': name }}>
        {name === 'linkedin' && <Linkedln className="icons" />}
        {name === 'resume' && <Resume className="icons" />}
        {name === 'github' && <Github className="icons" />}
      </a>
    </li>
  );
}
