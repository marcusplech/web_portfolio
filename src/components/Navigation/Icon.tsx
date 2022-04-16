import { Github, Linkedln } from 'assets';
import { HTMLAttributes } from 'react';

type IconProps = {
  name: 'linkedin' | 'github' | 'resume';
} & HTMLAttributes<'li'>;

export default function Icon({ name, className }: IconProps) {
  const url = {
    linkedin: 'https://www.linkedin.com/in/devmarcusplech/',
    github: 'https://github.com/marcusplech',
    resume: 'https://drive.google.com/file/d/1iC-yY3WnlbHNXpIdZMYbIl9qHnUQXEb2/view?usp=sharing',
  };

  const iconClass = 'h-7 w-7 transition-colors duration-200 hover:cursor-pointer hover:text-purple';
  return (
    <li className={className}>
      <a {...{ href: url[name], target: '_blank', rel: 'noreferrer', 'aria-label': name }}>
        {name === 'linkedin' && <Linkedln className={iconClass} />}
        {name === 'resume' && <Github className={iconClass} />}
        {name === 'github' && <Github className={iconClass} />}
      </a>
    </li>
  );
}
