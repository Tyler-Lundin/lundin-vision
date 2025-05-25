"use client";
import { ReactNode } from 'react';
import { CONFIG } from '@/config';
import Navigation from '@/components/navigation/Navigation';
import Footer from '../footer/Footer';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export function MainLayout({ children, title, description }: MainLayoutProps) {
  const pageTitle = title ? `${title} - ${CONFIG.siteName}` : CONFIG.siteName;

  return (
    <div className="min-h-screen w-screen overflow-x-hidden flex flex-col bg-white dark:bg-black">
        <Navigation />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
} 