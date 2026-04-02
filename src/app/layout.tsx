import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import SmoothScrollPolyfill from '@/components/SmoothScrollPolyfill';

import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const description =
  'Frontend developer with over three years of experience developing and implementing web applications. Always looking forward to work with scalable projects and explore new cultures and technologies.';

export const metadata: Metadata = {
  title: 'Marcus Plech',
  description,
  authors: [{ name: 'Marcus Plech' }],
  openGraph: {
    title: 'plech',
    description,
    url: 'https://mplechdev.com',
    type: 'website',
    images: [{ url: 'https://i.ibb.co/C2xkwJv/coding.png' }],
  },
  icons: {
    icon: '/coding.webp',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SmoothScrollPolyfill />
        {children}
      </body>
    </html>
  );
}
