import Link from 'next/link';
import { CONTENT } from '@/content';

export function HeroCTA() {
  const { hero } = CONTENT;

  return (
    <div className="flex flex-col items-center justify-center gap-y-6 sm:flex-row sm:gap-x-8 sm:gap-y-0">
      <Link
        href={hero.cta.primary.href}
        className="inline-flex items-center justify-center rounded-md bg-amber-900 px-8 py-4 text-base font-semibold text-[#fdfcf9] shadow-md transition-colors hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-700 sm:text-lg"
      >
        Book Your Exam
      </Link>

      <Link
        href={hero.cta.secondary.href}
        className="relative text-base font-semibold text-amber-900 dark:text-amber-400 sm:text-lg after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amber-900 dark:after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
      >
        Meet the Doctor
      </Link>
    </div>
  );
} 