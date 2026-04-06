'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

const STORAGE_KEY = 'theme';

function SystemThemeFallback() {
  const { setTheme } = useTheme();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) return;
    } catch {
      // ignore private mode / blocked storage
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (!prefersDark && !prefersLight) {
      setTheme('dark');
    }
  }, [setTheme]);

  return null;
}

type ThemeProviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey={STORAGE_KEY}
      disableTransitionOnChange
    >
      <SystemThemeFallback />
      {children}
    </NextThemesProvider>
  );
}
