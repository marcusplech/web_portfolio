import { HTMLAttributes } from 'react';
import { Github, Linkedln, Resume } from 'assets';
import styles from './Icon.module.css';

type IconProps = {
  name: 'linkedin' | 'github' | 'resume';
} & HTMLAttributes<'li'>;

export default function Icon({ name, className }: IconProps) {
  const url = {
    linkedin: 'https://www.linkedin.com/in/devmarcusplech/',
    github: 'https://github.com/marcusplech',
    resume: 'https://drive.google.com/file/d/1iC-yY3WnlbHNXpIdZMYbIl9qHnUQXEb2/view?usp=sharing',
  };

  return (
    <li className={className}>
      <a {...{ href: url[name], target: '_blank', rel: 'noreferrer', 'aria-label': name }}>
        {name === 'linkedin' && <Linkedln className={styles.icons} />}
        {name === 'resume' && <Resume className={styles.icons} />}
        {name === 'github' && <Github className={styles.icons} />}
      </a>
    </li>
  );
}
