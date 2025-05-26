import FormsList from '@/components/forms/FormsList';

export default function FormsPage() {
  return (
    <main className="min-h-screen bg-[#faf9f5] dark:bg-[#1a1a1a]">
      <div className="relative isolate">
        {/* Paper texture overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[url('/images/paper-texture.webp')] bg-repeat opacity-20 dark:invert dark:blur-[2px]" />
        
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-amber-900 dark:text-amber-500 sm:text-6xl">
              Forms & Documents
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Download our forms and documents for your convenience.
            </p>
          </div>
          
          <div className="mt-16">
            <FormsList />
          </div>
        </div>
      </div>
    </main>
  );
} 