'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button type="button" className="theme-toggle" aria-label="Toggle color theme">
        <span className="theme-toggle__icon" aria-hidden>
          <svg viewBox="0 0 24 24" focusable="false">
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 1.8v2.7M12 19.5v2.7M4.4 4.4l1.9 1.9M17.7 17.7l1.9 1.9M1.8 12h2.7M19.5 12h2.7M4.4 19.6l1.9-1.9M17.7 6.3l1.9-1.9" />
          </svg>
        </span>
        <span aria-hidden>Theme</span>
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="theme-toggle__icon" aria-hidden>
        {isDark ? (
          <svg viewBox="0 0 24 24" focusable="false">
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 1.8v2.7M12 19.5v2.7M4.4 4.4l1.9 1.9M17.7 17.7l1.9 1.9M1.8 12h2.7M19.5 12h2.7M4.4 19.6l1.9-1.9M17.7 6.3l1.9-1.9" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M21 13.3A8.8 8.8 0 1 1 10.7 3 7.2 7.2 0 0 0 21 13.3Z" />
          </svg>
        )}
      </span>
      <span aria-hidden>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}
