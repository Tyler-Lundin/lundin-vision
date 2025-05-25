import type { Metadata } from 'next';
import { CONFIG } from '@/config';
import { MainLayout } from '@/components/layout/MainLayout';
import '@/styles/globals.css';

import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
  title: {
    default: CONFIG.siteName,
    template: `%s - ${CONFIG.siteName}`,
  },
  description: 'Expert eye care services with a personal touch. Schedule your comprehensive eye exam today.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: CONFIG.siteName,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full ${roboto.className}`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
} 