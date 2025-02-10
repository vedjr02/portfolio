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
        <div className="relative min-h-screen">
          <ParticleBackground />
          <div className="relative z-10">
            <main className="relative">
              {children}
              <Analytics />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
