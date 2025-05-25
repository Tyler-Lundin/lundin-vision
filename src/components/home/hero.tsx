import { CONTENT } from '@/content';
import Link from 'next/link';
import { BackgroundTexture } from '@/components/ui/BackgroundTexture';
import Image from 'next/image';

export function Hero() {
  const { hero } = CONTENT;

  return (
    <div className="relative isolate flex min-h-screen items-center justify-center bg-[#f5f2e9] dark:bg-[#1b1b1b] text-[#292524] dark:text-gray-100 font-serif overflow-hidden">
      {/* Subtle textures */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/paper-texture.webp')] bg-repeat opacity-20 blur-[1px]" />

      {/* Smiling patient image with soft overlay */}
      <Image
        src="/images/happy-patient.webp"
        alt="Happy patient"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 opacity-75 bg-gradient-to-b from-[#f5f2e9]/80 to-[#f5f2e9]/95 dark:from-[#1b1b1b]/70 dark:to-[#1b1b1b]/90" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center sm:py-32 lg:px-8">
        {/* Decorative flourish */}
        <svg
          aria-hidden="true"
          className="mx-auto mb-8 h-10 w-10 text-amber-900 dark:text-amber-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3C8 8 4 10 4 10s4 2 8 7c4-5 8-7 8-7s-4-2-8-7Z" />
        </svg>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight">
          Clear Vision. Genuine Care.
        </h1>

        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 tracking-normal">
          Modern eye care backed by old-school service — from your trusted neighborhood optometrist.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-y-6 sm:flex-row sm:gap-x-8 sm:gap-y-0">
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
      </div>
    </div>
  );
}
