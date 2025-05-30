import { CONTENT } from '@/content';
import BackgroundTexture from '../ui/BackgroundTexture';

export default function InsuranceInfo() {
  const { contact } = CONTENT;
  // Example insurance and payment info (customize as needed)
  const insurances = [
    'VSP',
    'EyeMed',
    'Regence',
    'Premera',
    'Aetna',
    'Medicare',
  ];
  const payments = [
    'Cash',
    'Credit/Debit Cards',
    'HSA/FSA',
    'CareCredit',
  ];
  return (
    <section className="relative isolate py-16 sm:py-24 bg-[#faf9f5] dark:bg-[#1a1a1a] text-[#2c2c2c] dark:text-[#e5e5e5] font-serif">
      {/* Paper texture overlay */}
      <BackgroundTexture bottom={false}/>

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Insurance */}
          <div>
            <h3 className="text-xl font-bold text-amber-900 dark:text-amber-500 mb-3 uppercase tracking-wide">Accepted Insurance</h3>
            <ul className="space-y-2 text-base text-[#3a3a3a] dark:text-[#d4d4d4]">
              {insurances.map((name) => (
                <li key={name} className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-amber-900 dark:text-amber-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 5.29a.75.75 0 01.012 1.059l-7.5 7.75a.75.75 0 01-1.082.012L3.28 8.967a.75.75 0 111.06-1.06l4.02 4.02 6.97-7.19a.75.75 0 011.059-.012z" clipRule="evenodd" /></svg>
                  {name}
                </li>
              ))}
            </ul>
          </div>
          {/* Payment */}
          <div>
            <h3 className="text-xl font-bold text-amber-900 dark:text-amber-500 mb-3 uppercase tracking-wide">Payment Options</h3>
            <ul className="space-y-2 text-base text-[#3a3a3a] dark:text-[#d4d4d4]">
              {payments.map((name) => (
                <li key={name} className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-amber-900 dark:text-amber-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 5.29a.75.75 0 01.012 1.059l-7.5 7.75a.75.75 0 01-1.082.012L3.28 8.967a.75.75 0 111.06-1.06l4.02 4.02 6.97-7.19a.75.75 0 011.059-.012z" clipRule="evenodd" /></svg>
                  {name}
                </li>
              ))}
            </ul>
          </div>
          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold text-amber-900 dark:text-amber-500 mb-3 uppercase tracking-wide">Office Hours</h3>
            <ul className="space-y-2 text-base text-[#3a3a3a] dark:text-[#d4d4d4]">
              {contact.info.hours.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-amber-900 dark:text-amber-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 5.29a.75.75 0 01.012 1.059l-7.5 7.75a.75.75 0 01-1.082.012L3.28 8.967a.75.75 0 111.06-1.06l4.02 4.02 6.97-7.19a.75.75 0 011.059-.012z" clipRule="evenodd" /></svg>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 