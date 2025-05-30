import { CONTENT } from '@/content';
import BackgroundTexture from '../ui/BackgroundTexture';

export default function ServicesOverview() {
  const { services } = CONTENT;
  return (
    <section className="relative isolate py-20 sm:py-28 bg-[#faf9f5] dark:bg-[#1a1a1a] text-[#2c2c2c] dark:text-[#e5e5e5] font-serif">
      {/* Paper texture overlay */}
      <BackgroundTexture  bottom={false}/>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-900 dark:text-amber-500 mb-4">
            {services.headline}
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-[#3a3a3a] dark:text-[#d4d4d4] mb-10">
            {services.intro}
          </p>
        </div>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.list.map((service) => (
            <li key={service.id} className="flex flex-col rounded-sm bg-[#fdfcf8] dark:bg-[#242424] p-6 shadow-lg ring-1 ring-gray-700/10 dark:ring-gray-500/10">
              <h3 className="text-lg font-bold text-amber-900 dark:text-amber-500 mb-2 uppercase tracking-wide">{service.name}</h3>
              <p className="text-base text-[#3a3a3a] dark:text-[#d4d4d4] mb-2">{service.description}</p>
              <ul className="mt-2 space-y-1 text-sm text-[#464646] dark:text-[#a3a3a3]">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-2 items-center">
                    <svg className="h-4 w-4 text-amber-900 dark:text-amber-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 5.29a.75.75 0 01.012 1.059l-7.5 7.75a.75.75 0 01-1.082.012L3.28 8.967a.75.75 0 111.06-1.06l4.02 4.02 6.97-7.19a.75.75 0 011.059-.012z" clipRule="evenodd" /></svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
} 