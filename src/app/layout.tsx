import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Preloader from '@/components/Preloader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vedant Ambre | Software Engineer',
  description: 'Software engineer specializing in building exceptional digital experiences.',
  metadataBase: new URL('https://vedantambre.com'),
  openGraph: {
    title: 'Vedant Ambre | Software Engineer',
    description: 'Software engineer specializing in building exceptional digital experiences.',
    url: 'https://vedantambre.com',
    siteName: 'Vedant Ambre',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a192f] text-gray-300 antialiased min-h-screen`}>
        <Preloader />
        <main className="relative">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
