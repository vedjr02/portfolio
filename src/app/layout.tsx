import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import GlobalWrapper from '@/components/GlobalWrapper';

const inter = Inter({ subsets: ['latin'] });
const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: 'Vedant Ambre | Software Engineer',
  description: "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.",
  metadataBase: new URL('https://vedantambre.com'),
  openGraph: {
    title: 'Vedant Ambre | Software Engineer',
    description: "I am a software engineer specializing in building (and occasionally designing) exceptional digital experiences.",
    url: 'https://vedantambre.com',
    siteName: 'Vedant Ambre',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://vedantambre.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vedant Ambre | Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vedant Ambre | Software Engineer',
    description: "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.",
    creator: '@vedantambre',
    images: ['https://vedantambre.com/og-image.png'],
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
    <html lang="en" className={`${firaCode.variable} scroll-smooth`}>
      <body className={`${inter.className} bg-[#0a192f] text-gray-300 antialiased relative min-h-screen`}>
        <GlobalWrapper>{children}</GlobalWrapper>
      </body>
    </html>
  );
}
