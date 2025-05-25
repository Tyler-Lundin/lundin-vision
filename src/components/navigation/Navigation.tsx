"use client";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import Logo from "../ui/Logo";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 7);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-40 w-screen">
    <nav className={`max-w-7xl  backdrop-blur-lg grid items-center mx-3 mt-3 px-4 sm:px-6 lg:px-8 rounded-lg z-50 transition-all duration-300 ${isScrolled ? 'h-10 bg-gradient-to-b from-white/50 to-white/25 dark:from-black/50 dark:to-black/25 shadow-sm' : 'h-16 bg-white dark:bg-black'}`}>
      <div className="relative">
        <div className="flex justify-between h-full items-center">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="hidden sm:flex sm:items-center">
            <DesktopNav />
          </div>

            <MobileNav isScrolled={isScrolled}/>
        </div>
      </div>

    </nav>
    </header>
  )
}

const ServiceAddress = ({address}: {address: string}) => {
  return (
    <div className=" text-center whitespace-nowrap text-sm text-black dark:text-white font-light">
      {address}
    </div>
  )
}