import { useEffect, useState } from 'react';
import { ArrowUp } from 'assets';
import smoothscroll from 'smoothscroll-polyfill';
import styles from './Top.module.css';

export default function Top() {
  smoothscroll.polyfill();

  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState({}, '', '/');
  };

  return (
    <aside>
      <button
        type="button"
        aria-label="scroll to top"
        className={`${styles.scrollTop} ${visible && styles.visible}`}
        onClick={scrollToTop}
      >
        <ArrowUp className={styles.scrollTop__icon} />
      </button>
    </aside>
  );
}
