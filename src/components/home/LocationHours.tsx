"use client"
import { useLocation } from '@/context/LocationContext';
import GoogleMapComponent from '../map/GoogleMap';
import LocationSelector from '../location/LocationSelector';

export default function LocationHours() {
  const { selectedLocation } = useLocation();

  return (
    <section className="relative isolate py-16 sm:py-24 bg-[#faf9f5] dark:bg-[#1a1a1a] text-[#2c2c2c] dark:text-[#e5e5e5] font-serif">
      {/* Paper texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/paper-texture.webp')] bg-repeat opacity-20 dark:invert dark:blur-[2px]" />
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <LocationSelector />
        </div>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-amber-900 dark:text-amber-500 mb-3 uppercase tracking-wide">Our Location</h3>
            <ul className="space-y-3 text-base text-[#3a3a3a] dark:text-[#d4d4d4]">
              <li><span className="font-semibold">Address:</span> {selectedLocation.address}</li>
              <li><span className="font-semibold">Phone:</span> <a href={`tel:${selectedLocation.phone}`} className="underline hover:text-amber-900 dark:hover:text-amber-500">{selectedLocation.phone}</a></li>
              <li><span className="font-semibold">Email:</span> <a href={`mailto:${selectedLocation.email}`} className="underline hover:text-amber-900 dark:hover:text-amber-500">{selectedLocation.email}</a></li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-amber-900 dark:text-amber-500 mb-2">Office Hours</h4>
              <ul className="space-y-1 text-base text-[#3a3a3a] dark:text-[#d4d4d4]">
                {Object.entries(selectedLocation.hours).map(([day, hours]) => {
                  if (!hours || hours.length === 0) return null;
                  return (
                    <li key={day} className="flex justify-between">
                      <span className="font-medium capitalize">{day}:</span>
                      <span>{hours.join(', ')}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* Map */}
          <div className="rounded-md overflow-hidden shadow-lg ring-1 ring-gray-700/10 dark:ring-gray-500/10 bg-[#fdfcf8] dark:bg-[#242424]">
            <GoogleMapComponent
              address={selectedLocation.address}
              coordinates={selectedLocation.coordinates}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 