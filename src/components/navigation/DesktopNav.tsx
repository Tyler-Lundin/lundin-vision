"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks } from './links';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function DesktopNav() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <div className="hidden sm:flex sm:items-center sm:space-x-1 lg:space-x-2">
      {navigationLinks.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="relative rounded-md px-3 py-2 text-sm font-light text-gray-700 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
            onMouseEnter={() => setHoveredPath(item.href)}
            onMouseLeave={() => setHoveredPath(pathname)}
          >
            <span>{item.name}</span>
            {item.href === hoveredPath && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"
                layoutId="desktop-nav-underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
} 