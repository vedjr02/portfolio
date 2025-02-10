import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Preloader from '@/components/Preloader';
import ParticleBackground from '@/components/ParticleBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vedant Ambre | Portfolio',
  description: 'Personal portfolio website showcasing my projects and skills',
  metadataBase: new URL('https://vedantambre.com'),
  openGraph: {
    title: 'Vedant Ambre | Software Engineer',
    description: 'Software engineer specializing in building exceptional digital experiences.',
    url: 'https://vedantambre.com',
    siteName: 'Vedant Ambre',
    images: [
      {
        url: 'https://vedantambre.com/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vedant Ambre | Software Engineer',
    description: 'Software engineer specializing in building exceptional digital experiences.',
    creator: '@vedantambre',
    images: ['https://vedantambre.com/og.png'],
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
        <div className="fixed inset-0 z-0">
          <ParticleBackground />
        </div>
        <Preloader />
        <main className="relative z-10">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
