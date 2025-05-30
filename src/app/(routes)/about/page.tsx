import { CONTENT } from '@/content';
import { CONFIG } from '@/config';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description: 'Learn about our experienced team and commitment to exceptional eye care.',
};

export default function AboutPage() {
  const { about } = CONTENT;

  return (
    /* ------------ VINTAGE PAPER SECTION ------------ */
    <section className="relative isolate py-24 sm:py-32 bg-[#faf9f5] dark:bg-[#1a1a1a] text-[#2c2c2c] dark:text-[#e5e5e5] font-serif">
      {/* Paper texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/paper-texture.webp')] bg-repeat opacity-25 dark:invert dark:blur-[2px]" />
      
      {/* Vintage watermark */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/eye-chart.svg')] bg-center bg-no-repeat bg-[length:40%] opacity-[0.03] dark:opacity-[0.02]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ------------ HEADER ------------ */}
        <div className="mx-auto max-w-2xl text-center">
          {/* flourish */}
          <svg aria-hidden="true" className="mx-auto mb-6 h-8 w-8 text-amber-900 dark:text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3C8 8 4 10 4 10s4 2 8 7c4-5 8-7 8-7s-4-2-8-7Z" />
          </svg>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            <span className="text-amber-900 dark:text-amber-500">{about.headline}</span>
          </h1>
          
          {/* Vintage horizontal rule */}
          <div className="relative w-full gap-6 max-w-xs mx-auto mb-8 flex items-center justify-center">
            <hr className="border-t-2 border-gray-700/20 dark:border-gray-500/20 w-1/3" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
              <svg className="h-4 w-4 text-amber-900 dark:text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3.5A1.5 1.5 0 014.5 2h11A1.5 1.5 0 0117 3.5v11a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 14.5v-11zm1.5 0v11h11v-11h-11z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M10 10a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </span>
            <hr className="border-t-2 border-gray-700/20 dark:border-gray-500/20 w-1/3" />
          </div>

          <p className="text-lg sm:text-xl leading-relaxed text-[#3a3a3a] dark:text-[#d4d4d4] first-letter:text-5xl first-letter:font-extrabold first-letter:text-amber-900 dark:first-letter:text-amber-500">
            {about.intro}
          </p>
        </div>

        {/* ------------ STORY ------------ */}
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-[#3a3a3a] dark:text-[#d4d4d4] leading-relaxed">{about.story}</p>
          </div>

          {/* ------------ VALUES ------------ */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-amber-900 dark:text-amber-500 mb-2 text-center">Our Values</h2>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center mb-12">
              <div className="h-0.5 w-20 bg-amber-900/30 dark:bg-amber-500/30"></div>
              <svg className="mx-3 h-4 w-4 text-amber-900 dark:text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              <div className="h-0.5 w-20 bg-amber-900/30 dark:bg-amber-500/30"></div>
            </div>

            <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {about.values.map((value, index) => (
                <div key={value.title} className="relative flex flex-col gap-4 rounded-sm bg-[#fdfcf8] dark:bg-[#242424] p-6 shadow-lg ring-1 ring-gray-700/10 dark:ring-gray-500/10">
                  {/* Number badge */}
                  <span className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-amber-900 dark:bg-amber-600 text-[#fdfcf9] shadow-md text-xs font-bold">
                    {index + 1}
                  </span>
                  
                  <div className="flex items-center gap-4">
                    <span className="inline-flex p-1 aspect-square items-center justify-center rounded-full ring-2 ring-amber-900/20 dark:ring-amber-500/20 bg-[#faf9f5] dark:bg-[#1a1a1a] text-amber-900 dark:text-amber-500 shadow-sm">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 12.75L11.25 15 15 9.75" />
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </span>
                    <dt className="text-lg font-bold text-[#1f1f1f] dark:text-[#f5f5f5] uppercase tracking-wide">{value.title}</dt>
                  </div>
                  <dd className="text-base leading-7 text-[#3a3a3a] dark:text-[#d4d4d4]">
                    {value.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ------------ TEAM ------------ */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-amber-900 dark:text-amber-500 mb-2 text-center">Our Team</h2>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center mb-12">
              <div className="h-0.5 w-20 bg-amber-900/30 dark:bg-amber-500/30"></div>
              <svg className="mx-3 h-4 w-4 text-amber-900 dark:text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <div className="h-0.5 w-20 bg-amber-900/30 dark:bg-amber-500/30"></div>
            </div>

            <ul role="list" className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {CONFIG.team.map((member) => (
                <li key={member.id} className="group relative">
                  <div className="overflow-hidden rounded-sm bg-[#fdfcf8] dark:bg-[#242424] shadow-lg ring-1 ring-gray-700/10 dark:ring-gray-500/10 transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-amber-900/20 dark:hover:ring-amber-500/20">
                    {/* Photo placeholder with vintage frame effect */}
                    <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#e7e5d8] to-[#d4d2c5] dark:from-gray-800 dark:to-gray-700 relative">
                      <div className="absolute inset-0 ring-inset ring-1 ring-gray-700/10 dark:ring-gray-500/10"></div>
                      <div className="h-full w-full flex items-center justify-center text-[#464646] dark:text-[#a3a3a3] font-semibold">
                        {member.photo ? (
                          <img 
                            src={member.photo} 
                            alt={member.name}
                            className="h-full w-full object-cover grayscale-[0.4]"
                          />
                        ) : (
                          <span className="text-sm">Photo Coming Soon</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="font-bold text-lg leading-6 text-[#1f1f1f] dark:text-[#f5f5f5] uppercase tracking-wide">{member.name}</h3>
                      <p className="text-sm text-amber-900 dark:text-amber-500 font-semibold">{member.role}</p>
                      <div className="w-12 h-0.5 bg-amber-900/30 dark:bg-amber-500/30"></div>
                      <p className="text-sm text-[#3a3a3a] dark:text-[#d4d4d4] leading-relaxed">{member.bio}</p>
                      {member.experience && (
                        <p className="text-xs text-[#464646] dark:text-[#a3a3a3] italic mt-2">
                          {member.experience}+ years of experience
                        </p>
                      )}

                      {member.href && (
                        <a href={member.href} target="_blank" rel="noopener noreferrer" className="text-sm flex justify-between items-center gap-2 border rounded-sm p-2 border-amber-900/30 dark:border-amber-500/30 text-amber-900 dark:text-amber-500 font-semibold leading-relaxed">
                          {member.name.split(' ')[0]}'s Website
                          <Link className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 