"use client"
import { useState, useEffect } from 'react';

interface Form {
  name: string;
  path: string;
  lastModified: string;
}

export default function FormsList() {
  const [forms, setForms] = useState<Form[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await fetch('/api/forms');
        if (!response.ok) {
          throw new Error('Failed to fetch forms');
        }
        const data = await response.json();
        setForms(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load forms');
      } finally {
        setIsLoading(false);
      }
    };

    fetchForms();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-900 dark:border-amber-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        {error}
      </div>
    );
  }

  if (forms.length === 0) {
    return (
      <div className="text-center p-4 text-gray-600 dark:text-gray-400">
        No forms available at this time.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-500 mb-6">Available Forms</h2>
      <div className="grid gap-4">
        {forms.map((form) => (
          <a
            key={form.path}
            href={form.path}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {form.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Last updated: {new Date(form.lastModified).toLocaleDateString()}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-amber-900 dark:text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 