import { CONTENT } from '@/content';

export const metadata = {
  title: 'Our Services',
  description:
    'Comprehensive eye care services including exams, contact lens fitting, and eye disease management.',
};

export default function ServicesPage() {
  const { services } = CONTENT;

  return (
    /* -------------- VINTAGE PAPER SECTION -------------- */
    <section className="relative isolate py-24 sm:py-32 bg-[#faf9f5] dark:bg-[#1a1a1a] text-[#2c2c2c] dark:text-[#e5e5e5] font-serif">
      {/* Paper texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/paper-texture.webp')] bg-repeat opacity-25 dark:invert dark:blur-[2px]" />
      
      {/* Vintage watermark */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/eye-chart.svg')] bg-center bg-no-repeat bg-[length:40%] opacity-[0.03] dark:opacity-[0.02]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* -------------- HERO HEADER -------------- */}
        <header className="mx-auto max-w-2xl text-center">
          {/* Decorative flourish */}
          <svg aria-hidden="true" className="mx-auto mb-6 h-8 w-8 text-amber-900 dark:text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3C8 8 4 10 4 10s4 2 8 7c4-5 8-7 8-7s-4-2-8-7Z" />
          </svg>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            <span className="text-amber-900 dark:text-amber-500">{services.headline}</span>
          </h1>
          
          {/* Vintage horizontal rule */}
          <div className="relative w-full gap-6 max-w-xs mx-auto mb-8 flex items-center justify-center">
            <hr className="border-t-2 border-gray-700/20 dark:border-gray-500/20 w-1/3" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
              <svg className="h-4 w-4 text-amber-900 dark:text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </span>
            <hr className="border-t-2 border-gray-700/20 dark:border-gray-500/20 w-1/3" />
          </div>

          <p className="text-lg sm:text-xl leading-relaxed text-[#3a3a3a] dark:text-[#d4d4d4] first-letter:text-5xl first-letter:font-extrabold first-letter:float-left first-letter:mr-3 first-letter:text-amber-900 dark:first-letter:text-amber-500">
            {services.intro}
          </p>
        </header>

        {/* -------------- SERVICE CARDS -------------- */}
        <ul className="mt-16 sm:mt-20 lg:mt-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.list.map((service, index) => (
            <li
              key={service.id}
              className="group relative flex flex-col rounded-sm bg-[#fdfcf8] dark:bg-[#242424] p-8 shadow-lg ring-1 ring-gray-700/10 dark:ring-gray-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-amber-900/20 dark:hover:ring-amber-500/20"
            >
              {/* Card number decoration */}
              <span className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-900 dark:bg-amber-600 text-[#fdfcf9] shadow-md text-xs font-bold">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* ICON */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full ring-2 ring-amber-900/20 dark:ring-amber-500/20 bg-[#faf9f5] dark:bg-[#1a1a1a] text-amber-900 dark:text-amber-500 shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-[#1f1f1f] dark:text-[#f5f5f5] mb-3 tracking-wide uppercase">
                {service.name}
              </h3>

              {/* Decorative divider */}
              <div className="w-16 h-0.5 bg-amber-900/30 dark:bg-amber-500/30 mb-4"></div>

              <p className="text-base leading-7 text-[#3a3a3a] dark:text-[#d4d4d4] flex-auto">
                {service.description}
              </p>

              {/* DETAILS LIST */}
              <ul className="mt-6 space-y-3 border-t border-gray-700/10 dark:border-gray-500/10 pt-6">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-[#464646] dark:text-[#a3a3a3]">
                    <svg className="h-5 w-5 flex-none text-amber-900 dark:text-amber-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 5.29a.75.75 0 01.012 1.059l-7.5 7.75a.75.75 0 01-1.082.012L3.28 8.967a.75.75 0 111.06-1.06l4.02 4.02 6.97-7.19a.75.75 0 011.059-.012z" clipRule="evenodd" />
                    </svg>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* -------------- CALL TO ACTION -------------- */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-lg text-[#3a3a3a] dark:text-[#d4d4d4] italic mb-6">
              Ready to experience comprehensive eye care?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-none border-2 border-[#2c2c2c] dark:border-[#e5e5e5] bg-transparent px-8 py-4 text-base font-semibold text-[#2c2c2c] dark:text-[#e5e5e5] hover:bg-[#2c2c2c] dark:hover:bg-[#e5e5e5] hover:text-[#faf9f5] dark:hover:text-[#1a1a1a] transition-all duration-200 shadow-none uppercase tracking-wide"
            >
              Schedule Your Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 