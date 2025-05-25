import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { HeroCTA } from './HeroCTA';
import { DecorativeFlourish } from './DecorativeFlourish';

export function Hero() {
  return (
    <div className="relative isolate flex min-h-screen items-center justify-center bg-[#f5f2e9] dark:bg-[#1b1b1b] text-[#292524] dark:text-gray-100 font-serif overflow-hidden">
      <HeroBackground />
      
      <div className="relative z-10 mx-auto h-fit grid gap-4 max-w-3xl px-6 text-center lg:px-8">
      <DecorativeFlourish />
      <HeroContent />
        <HeroCTA />
      </div>
    </div>
  );
} 