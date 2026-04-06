import type { HTMLAttributes } from 'react';

import Github from '@/assets/svg/github.svg';
import Linkedln from '@/assets/svg/linkedln.svg';
import Resume from '@/assets/svg/resume.svg';
import { contactLinks } from '@/content/site';

type SocialIconProps = {
  name: 'linkedin' | 'github' | 'resume';
} & HTMLAttributes<HTMLLIElement>;

export default function SocialIcon({ name, className }: SocialIconProps) {
  const url = {
    linkedin: contactLinks.linkedin,
    github: contactLinks.github,
    resume: contactLinks.resume,
  } as const;

  const ariaLabel = {
    linkedin: 'LinkedIn profile',
    github: 'GitHub profile',
    resume: 'Resume (PDF)',
  } as const;

  return (
    <li className={className}>
      <a href={url[name]} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel[name]}>
        {name === 'linkedin' && <Linkedln className="icons" />}
        {name === 'resume' && <Resume className="icons" />}
        {name === 'github' && <Github className="icons" />}
      </a>
    </li>
  );
}
