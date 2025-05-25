"use client"
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

interface GoogleMapProps {
  address: string;
}

const libraries: ("places")[] = ["places"];

export default function GoogleMapComponent({ address }: GoogleMapProps) {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [isGeocoding, setIsGeocoding] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  
  if (!apiKey) {
    return (
      <div className="w-full aspect-square flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <span className="text-red-500">Google Maps API key is missing</span>
      </div>
    );
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  useEffect(() => {
    if (!isLoaded || !address) return;

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results?.[0]) {
        const location = results[0].geometry.location;
        setCenter({
          lat: location.lat(),
          lng: location.lng(),
        });
      } else {
        setError(`Geocoding failed: ${status}`);
      }
      setIsGeocoding(false);
    });
  }, [isLoaded, address]);

  const handleNavigate = () => {
    // Create URLs for different map applications
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
    const appleMapsUrl = `https://maps.apple.com/?daddr=${center.lat},${center.lng}`;
    
    // Detect if the user is on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    // Open the appropriate maps application
    window.open(isIOS ? appleMapsUrl : googleMapsUrl, '_blank');
  };

  if (loadError) {
    return (
      <div className="w-full aspect-square flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <span className="text-red-500">Error loading Google Maps: {loadError.message}</span>
      </div>
    );
  }

  if (!isLoaded || isGeocoding) {
    return (
      <div className="w-full aspect-square flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <span className="text-gray-400 dark:text-gray-600">Loading map...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full aspect-square flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <span className="text-red-500">{error}</span>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-square">
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName="w-full h-full"
        options={{
          disableDefaultUI: true,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          styles: [
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [{ color: "#2c2c2c" }],
            },
            {
              featureType: "all",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#ffffff" }],
            },
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "transit",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
      >
        <Marker position={center} />
      </GoogleMap>
      <button
        onClick={handleNavigate}
        className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        Directions
      </button>
    </div>
  );
} 