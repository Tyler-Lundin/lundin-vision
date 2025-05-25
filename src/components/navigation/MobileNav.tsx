"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks } from './links';
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';

export function MobileNav({isScrolled}: {isScrolled: boolean}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        aria-label="Open menu"
        className="inline-flex sm:hidden absolute top-1/2 -translate-y-1/2 right-0 z-[300] items-center justify-center rounded-lg p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        onClick={() => setIsOpen(prev=>!prev)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Overlay & Sliding Panel */}
      <div
        className={`absolute ${isScrolled ? '-top-1' : '-top-4'} -left-4 -right-4 rounded-lg overflow-hidden  transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >

        {/* Sliding nav panel */}
        <nav
          aria-label="Mobile Navigation"
          className={`relative w-full bg-white dark:bg-black z-[200] shadow-xl transition-all duration-300 ease-in-out ${
            isOpen ? 'h-[calc(100vh-5rem)]' : 'h-0'
          } overflow-hidden`}
        >
          {/* Header */}
          <div className={`flex items-center justify-between px-6 ${isScrolled ? 'h-10' : 'h-16'} border-b border-gray-200 dark:border-gray-900`}>
            <span className="text-2xl font-light text-amber-900 dark:text-white">menu</span>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-2 px-6 py-8">
            {navigationLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    tabIndex={isOpen ? 0 : -1}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-amber-900 text-[#fdfcf9] shadow'
                        : 'text-[#292524] dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-gray-800 hover:text-amber-900 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
} 