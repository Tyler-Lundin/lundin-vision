import { CONTENT } from '@/content';

export default function WhyChooseUs() {
  const { about } = CONTENT;
  return (
    <section className="relative isolate py-20 sm:py-28 bg-[#faf9f5] dark:bg-[#1a1a1a] text-[#2c2c2c] dark:text-[#e5e5e5] font-serif">
      {/* Paper texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/paper-texture.webp')] bg-repeat opacity-20 dark:invert dark:blur-[2px]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-900 dark:text-amber-500 mb-4">
            Why Choose Lundin Vision?
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-[#3a3a3a] dark:text-[#d4d4d4]">
            {about.intro}
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {about.values.map((value, idx) => (
            <div key={value.title} className="relative flex flex-col gap-4 rounded-sm bg-[#fdfcf8] dark:bg-[#242424] p-6 shadow-lg ring-1 ring-gray-700/10 dark:ring-gray-500/10">
              <span className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-amber-900 dark:bg-amber-600 text-[#fdfcf9] shadow-md text-xs font-bold">
                {idx + 1}
              </span>
              <dt className="text-lg font-bold text-amber-900 dark:text-amber-500 uppercase tracking-wide">{value.title}</dt>
              <dd className="text-base leading-7 text-[#3a3a3a] dark:text-[#d4d4d4]">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
} 