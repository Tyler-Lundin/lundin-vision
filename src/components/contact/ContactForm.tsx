'use client';
import { useState, FormEvent } from 'react';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface ContactFormProps {
  title: string;
  description: string;
}

export function ContactForm({ title, description }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // TODO: Implement actual form submission
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitSuccess) {
    return (
      <div className="mx-auto max-w-2xl rounded-sm bg-green-50/80 dark:bg-green-900/20 p-8 shadow-lg ring-1 ring-green-600/20 dark:ring-green-400/20">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-8 w-8 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-green-800 dark:text-green-300 uppercase tracking-wide">Success!</h3>
            <div className="mt-2 text-base text-green-700 dark:text-green-400">
              <p>Thank you for your message. We'll get back to you soon.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl bg-white/50 dark:bg-black/50">
      <div className="rounded-sm bg-[#fdfcf8] dark:bg-[#242424] p-8 shadow-lg ring-1 ring-gray-700/10 dark:ring-gray-500/10">
        <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-500 mb-3 text-center uppercase tracking-wide">{title}</h2>
        
        {/* Decorative divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-0.5 w-16 bg-amber-900/30 dark:bg-amber-500/30"></div>
        </div>
        
        <p className="text-[#3a3a3a] dark:text-[#d4d4d4] mb-8 text-center">{description}</p>

        <form onSubmit={handleSubmit}>
          {submitError && (
            <div className="rounded-sm bg-red-50/80 dark:bg-red-900/20 p-4 mb-6 ring-1 ring-red-600/20 dark:ring-red-400/20">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-600 dark:text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-bold text-red-800 dark:text-red-300 uppercase">Error</h3>
                  <div className="mt-1 text-sm text-red-700 dark:text-red-400">
                    <p>{submitError}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-bold leading-6 text-[#1f1f1f] dark:text-[#f5f5f5] uppercase tracking-wide"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-sm border-0 bg-white dark:bg-gray-900 px-3.5 py-2.5 text-[#2c2c2c] dark:text-[#e5e5e5] shadow-sm ring-1 ring-gray-700/20 dark:ring-gray-500/20 placeholder:text-[#464646] dark:placeholder:text-[#a3a3a3] focus:ring-2 focus:ring-amber-900 dark:focus:ring-amber-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-bold leading-6 text-[#1f1f1f] dark:text-[#f5f5f5] uppercase tracking-wide"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-sm border-0 bg-white dark:bg-gray-900 px-3.5 py-2.5 text-[#2c2c2c] dark:text-[#e5e5e5] shadow-sm ring-1 ring-gray-700/20 dark:ring-gray-500/20 placeholder:text-[#464646] dark:placeholder:text-[#a3a3a3] focus:ring-2 focus:ring-amber-900 dark:focus:ring-amber-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-bold leading-6 text-[#1f1f1f] dark:text-[#f5f5f5] uppercase tracking-wide"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-sm border-0 bg-white dark:bg-gray-900 px-3.5 py-2.5 text-[#2c2c2c] dark:text-[#e5e5e5] shadow-sm ring-1 ring-gray-700/20 dark:ring-gray-500/20 placeholder:text-[#464646] dark:placeholder:text-[#a3a3a3] focus:ring-2 focus:ring-amber-900 dark:focus:ring-amber-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm font-bold leading-6 text-[#1f1f1f] dark:text-[#f5f5f5] uppercase tracking-wide"
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full rounded-sm border-0 bg-white dark:bg-gray-900 px-3.5 py-2.5 text-[#2c2c2c] dark:text-[#e5e5e5] shadow-sm ring-1 ring-gray-700/20 dark:ring-gray-500/20 placeholder:text-[#464646] dark:placeholder:text-[#a3a3a3] focus:ring-2 focus:ring-amber-900 dark:focus:ring-amber-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-bold leading-6 text-[#1f1f1f] dark:text-[#f5f5f5] uppercase tracking-wide"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  required
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-sm border-0 bg-white dark:bg-gray-900 px-3.5 py-2.5 text-[#2c2c2c] dark:text-[#e5e5e5] shadow-sm ring-1 ring-gray-700/20 dark:ring-gray-500/20 placeholder:text-[#464646] dark:placeholder:text-[#a3a3a3] focus:ring-2 focus:ring-amber-900 dark:focus:ring-amber-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center rounded-none border-2 border-[#2c2c2c] dark:border-[#e5e5e5] bg-transparent px-6 py-3 text-center text-base font-semibold text-[#2c2c2c] dark:text-[#e5e5e5] hover:bg-[#2c2c2c] dark:hover:bg-[#e5e5e5] hover:text-[#faf9f5] dark:hover:text-[#1a1a1a] transition-all duration-200 shadow-none uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <LoadingSpinner />
                  <span className="ml-2">Sending...</span>
                </>
              ) : (
                'Send message'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 