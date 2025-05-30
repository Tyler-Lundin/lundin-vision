import BackgroundTexture from "../ui/BackgroundTexture";

export default function PatientResources() {
  const resources = [
    { name: 'New Patient Forms', href: '/forms', description: 'Download and complete forms before your visit.' },
    { name: 'Frequently Asked Questions', href: '/faq', description: 'Answers to common questions about eye care and appointments.' },
    { name: 'Eye Care Tips', href: '/blog', description: 'Read our latest tips for maintaining healthy vision.' },
  ];
  return (
    <section className="relative isolate py-16 sm:py-24 bg-[#faf9f5] dark:bg-[#1a1a1a] text-[#2c2c2c] dark:text-[#e5e5e5] font-serif">
      {/* Paper texture overlay */}
      <BackgroundTexture bottom={false}/>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-900 dark:text-amber-500 mb-4">
            Patient Resources
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-[#3a3a3a] dark:text-[#d4d4d4]">
            Helpful information and forms to make your visit smooth and stress-free.
          </p>
        </div>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((res) => (
            <li key={res.name} className="flex flex-col rounded-sm bg-[#fdfcf8] dark:bg-[#242424] p-6 shadow-lg ring-1 ring-gray-700/10 dark:ring-gray-500/10">
              <a href={res.href} className="text-lg font-bold text-amber-900 dark:text-amber-500 mb-2 uppercase tracking-wide hover:underline">
                {res.name}
              </a>
              <p className="text-base text-[#3a3a3a] dark:text-[#d4d4d4]">{res.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
} 