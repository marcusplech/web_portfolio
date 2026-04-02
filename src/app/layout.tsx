import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import SmoothScrollPolyfill from '@/components/SmoothScrollPolyfill';

import './globals.css';

import { siteDescription, siteTagline, siteTitle } from '@/content/site';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const ogImage = 'https://i.ibb.co/C2xkwJv/coding.png';

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
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <SmoothScrollPolyfill />
        {children}
      </body>
    </html>
  );
}
