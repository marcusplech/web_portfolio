'use client';

import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

export default function SmoothScrollPolyfill() {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);
  return null;
}
