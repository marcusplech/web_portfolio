import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import SmoothScrollPolyfill from '@/components/SmoothScrollPolyfill';
import ThemeProvider from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';

import './globals.css';

import { siteDescription, siteTagline, siteTitle } from '@/content/site';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const ogImage = '/opengraph-image.png';

export const metadata: Metadata = {
  title: {
    default: `${siteTitle} — ${siteTagline}`,
    template: `%s — ${siteTitle}`,
  },
  description: siteDescription,
  authors: [{ name: siteTitle, url: 'https://mplechdev.com' }],
  metadataBase: new URL('https://mplechdev.com'),
  openGraph: {
    title: `${siteTitle} — ${siteTagline}`,
    description: siteDescription,
    url: 'https://mplechdev.com',
    siteName: siteTitle,
    locale: 'en_US',
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: `${siteTitle} portfolio` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteTitle} — ${siteTagline}`,
    description: siteDescription,
    images: [ogImage],
  },
  icons: {
    icon: '/coding.webp',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          <SmoothScrollPolyfill />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
