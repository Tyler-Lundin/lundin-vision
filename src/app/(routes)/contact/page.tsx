import { CONTENT } from '@/content';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us for appointments or any questions about our eye care services.',
};

export default function ContactPage() {
  const { contact } = CONTENT;

  return (
    /* ------------ VINTAGE PAPER SECTION ------------ */
    <section className="relative isolate py-24 sm:py-32 bg-[#faf9f5] dark:bg-[#1a1a1a] text-[#2c2c2c] dark:text-[#e5e5e5] font-serif">
      {/* Paper texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/paper-texture.webp')] bg-repeat opacity-25 dark:invert dark:blur-[2px]" />
      
      {/* Vintage watermark */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/contact-watermark.svg')] bg-center bg-no-repeat bg-[length:30%] opacity-[0.02] dark:opacity-[0.01]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* flourish */}
          <svg aria-hidden="true" className="mx-auto mb-6 h-8 w-8 text-amber-900 dark:text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3C8 8 4 10 4 10s4 2 8 7c4-5 8-7 8-7s-4-2-8-7Z" />
          </svg>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            <span className="text-amber-900 dark:text-amber-500">{contact.headline}</span>
          </h1>
          
          {/* Vintage horizontal rule */}
          <div className="relative w-full max-w-xs mx-auto mb-8">
            <hr className="border-t-2 border-gray-700/20 dark:border-gray-500/20" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#faf9f5] dark:bg-[#1a1a1a] px-4">
              <svg className="h-4 w-4 text-amber-900 dark:text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </span>
          </div>

          <p className="text-lg sm:text-xl leading-relaxed text-[#3a3a3a] dark:text-[#d4d4d4] first-letter:text-5xl first-letter:font-extrabold first-letter:text-amber-900 dark:first-letter:text-amber-500">
            {contact.intro}
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="mx-auto max-w-4xl mt-16 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Address Card */}
            <div className="relative rounded-sm bg-[#fdfcf8] dark:bg-[#242424] p-6 shadow-lg ring-1 ring-gray-700/10 dark:ring-gray-500/10">
              <span className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-900 dark:bg-amber-600 text-[#fdfcf9] shadow-md">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-[#1f1f1f] dark:text-[#f5f5f5] uppercase tracking-wide mb-3">Address</h3>
              <p className="text-[#3a3a3a] dark:text-[#d4d4d4]">{contact.info.address}</p>
            </div>

            {/* Phone Card */}
            <div className="relative rounded-sm bg-[#fdfcf8] dark:bg-[#242424] p-6 shadow-lg ring-1 ring-gray-700/10 dark:ring-gray-500/10">
              <span className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-900 dark:bg-amber-600 text-[#fdfcf9] shadow-md">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-[#1f1f1f] dark:text-[#f5f5f5] uppercase tracking-wide mb-3">Phone</h3>
              <p className="text-[#3a3a3a] dark:text-[#d4d4d4]">{contact.info.phone}</p>
            </div>

            {/* Email Card */}
            <div className="relative rounded-sm bg-[#fdfcf8] dark:bg-[#242424] p-6 shadow-lg ring-1 ring-gray-700/10 dark:ring-gray-500/10">
              <span className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-900 dark:bg-amber-600 text-[#fdfcf9] shadow-md">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-[#1f1f1f] dark:text-[#f5f5f5] uppercase tracking-wide mb-3">Email</h3>
              <p className="text-[#3a3a3a] dark:text-[#d4d4d4]">{contact.info.email}</p>
            </div>

            {/* Hours Card */}
            <div className="relative rounded-sm bg-[#fdfcf8] dark:bg-[#242424] p-6 shadow-lg ring-1 ring-gray-700/10 dark:ring-gray-500/10">
              <span className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-900 dark:bg-amber-600 text-[#fdfcf9] shadow-md">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-[#1f1f1f] dark:text-[#f5f5f5] uppercase tracking-wide mb-3">Hours</h3>
              <ul className="space-y-1">
                {contact.info.hours.map((hours, index) => (
                  <li key={index} className="text-sm text-[#3a3a3a] dark:text-[#d4d4d4]">{hours}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Decorative divider before form */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-0.5 w-20 bg-amber-900/30 dark:bg-amber-500/30"></div>
          <svg className="mx-3 h-5 w-5 text-amber-900 dark:text-amber-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          <div className="h-0.5 w-20 bg-amber-900/30 dark:bg-amber-500/30"></div>
        </div>

        <ContactForm
          title={contact.form.title}
          description={contact.form.description}
        />
      </div>
    </section>
  );
}

/* ---------- REUSABLE INFO BLOCK ---------- */
function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h2 className="font-semibold text-amber-900 dark:text-amber-400">{label}</h2>
      <p className="mt-1">{value}</p>
    </div>
  );
} 