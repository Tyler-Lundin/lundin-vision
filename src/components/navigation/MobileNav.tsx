"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks } from './links';

export function MobileNav() {
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
    <div className="sm:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        aria-label="Open menu"
        className="inline-flex items-center justify-center rounded-lg p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        onClick={() => setIsOpen(true)}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Overlay & Sliding Panel */}
      <div
        className={`fixed inset-0 z-50 transition ${isOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 h-screen bg-[#f5f2e9]/90 dark:bg-black/90 z-[199] transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sliding nav panel */}
        <nav
          aria-label="Mobile Navigation"
          className={`absolute inset-y-0 right-0 w-80 h-screen max-w-full transform bg-[#f5f2e9] z-[200] dark:bg-gray-900 shadow-xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-gray-700">
            <span className="text-lg font-semibold text-amber-900 dark:text-white">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              className="rounded-md p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
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
    </div>
  );
} 