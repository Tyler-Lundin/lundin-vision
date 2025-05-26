"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import { Location, LOCATIONS } from '@/content/locations';

interface LocationContextType {
  selectedLocation: Location;
  setSelectedLocation: (location: Location) => void;
  locations: Location[];
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [selectedLocation, setSelectedLocation] = useState<Location>(LOCATIONS[0]);

  useEffect(() => {
    // Try to get the saved location from localStorage
    const savedLocationId = localStorage.getItem('selectedLocationId');
    if (savedLocationId) {
      const savedLocation = LOCATIONS.find(loc => loc.id === savedLocationId);
      if (savedLocation) {
        setSelectedLocation(savedLocation);
      }
    }
  }, []);

  const handleSetLocation = (location: Location) => {
    setSelectedLocation(location);
    localStorage.setItem('selectedLocationId', location.id);
  };

  return (
    <LocationContext.Provider
      value={{
        selectedLocation,
        setSelectedLocation: handleSetLocation,
        locations: LOCATIONS,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
} 