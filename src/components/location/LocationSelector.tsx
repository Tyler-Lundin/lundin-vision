"use client"
import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useLocation } from '@/context/LocationContext';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

export default function LocationSelector() {
  const { selectedLocation, setSelectedLocation, locations } = useLocation();

  return (
    <div className="w-full max-w-xs">
      <Listbox value={selectedLocation} onChange={setSelectedLocation}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left border border-gray-200 dark:border-gray-700 focus:outline-none focus-visible:border-amber-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-300 sm:text-sm">
            <span className="block truncate text-gray-900 dark:text-white">
              {selectedLocation.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
              {locations.map((location) => (
                <Listbox.Option
                  key={location.id}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active
                        ? 'bg-amber-100 dark:bg-amber-900/20 text-amber-900 dark:text-amber-500'
                        : 'text-gray-900 dark:text-white'
                    }`
                  }
                  value={location}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {location.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600 dark:text-amber-500">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
} 