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
            setIsScrolled(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <nav className={`max-w-7xl  backdrop-blur-lg grid items-center mx-auto px-4 sm:px-6 lg:px-8 fixed top-3 rounded-lg left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'h-10 bg-white/75 dark:bg-black/75' : 'h-16 bg-white dark:bg-black'}`}>
          <div className="relative">
          <div className="flex justify-between h-full items-center">
            <div className="flex-shrink-0">
                <Logo />
            </div>
            
            <div className="hidden sm:flex sm:items-center">
              <DesktopNav />
            </div>

            <div className="sm:hidden">
              <MobileNav />
            </div>
          </div>
          </div>
        </nav>
    )
}