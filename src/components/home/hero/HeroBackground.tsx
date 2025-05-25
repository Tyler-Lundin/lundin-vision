import Image from 'next/image';

export function HeroBackground() {
  return (
    <span className="absolute w-screen h-screen">
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
    </span>
  );
} 