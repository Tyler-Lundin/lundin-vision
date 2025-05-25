import { CONFIG } from '@/config';
import Image from 'next/image';

export default function BruceLundin() {
    return (
        /* ---------- OUTER SECTION : VINTAGE VIBE ---------- */
        <section className="relative isolate overflow-hidden py-28 sm:py-32 bg-[#faf9f5] text-[#2c2c2c] font-serif ring-1 ring-gray-700/10 shadow-md">
            {/* Paper texture overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[url('/images/paper-texture.webp')] bg-repeat opacity-25" />
            <div className="relative pb-14 w-fit mx-auto">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 text-center">
                Meet <span className="text-amber-900">Dr.&nbsp;Bruce&nbsp;Lundin</span>
            </h1>
            <svg aria-hidden="true" className="mx-auto absolute left-1/2 -translate-x-1/2 -top-8 -translate-y-full md:mx-0 mb-4 h-8 w-8 text-amber-900 dark:text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3C8 8 4 10 4 10s4 2 8 7c4-5 8-7 8-7s-4-2-8-7Z" /></svg>
                <hr className="w-full border-t-2 border-gray-700/10" />
            </div>
            {/* subtle watermark */}


            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="relative flex flex-wrap gap-y-14 items-center justify-center md:gap-x-16">

                    {/* ---------- IMAGE COLUMN ---------- */}
                    <div className="grid justify-center md:justify-end md:justify-self-end justify-self-center">
                        {/* Vintage framed portrait */}
                        <div className="relative aspect-square rounded-full w-64 sm:w-80 md:w-72 lg:w-80 xl:w-96 shadow-lg justify-self-center grayscale">
                            {/* photo */}
                            <Image src="/images/bruce-lundin.jpg" alt="Dr. Bruce Lundin" fill className=" object-cover shadow-lg rounded-full" priority />
                            {/* ornate border */}
                            <span className="pointer-events-none absolute inset-0 ring-4 ring-gray-700/50 rounded-full" />
                        </div>                        {/*   QUICK STATS   */}
                        <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-8 md:max-w-md">
                            <Stat value={`${CONFIG.team.find(member => member.id === 'bruce-lundin')?.experience}+`} label="Years Experience" />
                            <Stat value="99%" label="Patient Satisfaction" />
                            
                        </div>
                    </div>

                    {/* ---------- TEXT COLUMN ---------- */}
                    <div className="text-center md:text-left md:max-w-xl text-[#2c2c2c]">
                        {/* Decorative flourish */}

                        <p className="text-lg sm:text-xl leading-relaxed mb-5 text-[#3a3a3a] first-letter:text-6xl first-letter:font-extrabold first-letter:align-top first-letter:mr-2 first-letter:float-left first-letter:text-amber-900">
                            Dr.&nbsp;Lundin has spent over <span className="font-semibold text-gray-900">{CONFIG.team.find(member => member.id === 'bruce-lundin')?.experience}</span>&nbsp;years helping families see clearly. He provides thorough vision examinations, precise contact-lens fittings, and ongoing care for patients of every age—all with a warm, hometown touch and the latest diagnostic tools.
                        </p>

                        {/* ------ EXPERTISE LIST ------ */}
                        <div className="mb-6 grid justify-center md:justify-start" >
                            <h3 className="text-xl  font-semibold text-[#1f1f1f] mb-3 tracking-wide uppercase">Areas of Expertise</h3>
                            <ul className="space-y-2">
                                {[
                                    'Comprehensive Vision Examinations',
                                    'Contact Lens Fittings & Training',
                                    'Pediatric Eye Care',
                                    'Dry Eye & Allergy Relief',
                                    'Eyeglass Prescription Updates',
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        {/* check icon */}
                                        <svg className="mt-1 h-5 w-5 flex-none text-amber-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M16.704 5.29a.75.75 0 01.012 1.059l-7.5 7.75a.75.75 0 01-1.082.012L3.28 8.967a.75.75 0 111.06-1.06l4.02 4.02 6.97-7.19a.75.75 0 011.059-.012z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-left text-base sm:text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ------ CTA BUTTONS & STAT BAR ------ */}
                        <div className="flex items-center justify-center sm:flex-row sm:justify-start gap-4 mt-8">
                            <a href="#contact" className="inline-flex items-center justify-center rounded-none border border-[#2c2c2c] bg-transparent px-6 py-3 text-base font-semibold text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-[#faf9f5] transition-colors shadow-none">
                                Book an Appointment
                            </a>
                            <a href="#services" className="relative text-base font-semibold text-amber-900 underline-offset-4 hover:underline">
                                View Services
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

/* ------------------ REUSABLE STAT COMPONENT ------------------ */
function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div className="text-center md:text-left">
            <p className="text-3xl font-extrabold tracking-tight text-amber-900">{value}</p>
            <p className="mt-1 text-xs font-medium text-[#464646] uppercase tracking-wider">{label}</p>
        </div>
    );
}