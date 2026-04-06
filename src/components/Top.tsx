'use client';

import { useEffect, useState } from 'react';

import ArrowUp from '@/assets/svg/arrowtop.svg';

export default function Top() {
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
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState({}, '', '/');
  };

  return (
    <aside>
      <button
        type="button"
        aria-label="scroll to top"
        className={`scrollTop ${visible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <ArrowUp className="scrollTop__icon" />
      </button>
    </aside>
  );
}
