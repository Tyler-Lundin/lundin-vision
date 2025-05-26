# Locations System

## Overview
The practice operates across three locations, each with its own schedule and contact information. We need a system to:
1. Display all locations
2. Allow users to switch between locations
3. Show location-specific schedules
4. Maintain consistent branding and design

## Location Data Structure
```typescript
interface Location {
  id: string;          // Unique identifier (e.g., "main-office", "satellite-1")
  name: string;        // Display name
  address: string;     // Full address
  phone: string;       // Location-specific phone
  email: string;       // Location-specific email
  coordinates: {       // For Google Maps
    lat: number;
    lng: number;
  };
  hours: {            // Weekly schedule
    monday?: string[];
    tuesday?: string[];
    wednesday?: string[];
    thursday?: string[];
    friday?: string[];
    saturday?: string[];
    sunday?: string[];
  };
  isMainOffice: boolean;  // Flag for primary location
  description?: string;   // Optional location description
}
```

## Components Needed

### 1. LocationSelector
- Dropdown or tab-based interface
- Shows current location
- Allows switching between locations
- Persists selection in localStorage
- Updates all location-dependent components

### 2. LocationHours (Updated)
- Shows hours for selected location
- Displays Google Map for selected location
- Shows location-specific contact info
- Maintains current design with paper texture

### 3. LocationMap
- Reusable map component
- Takes location coordinates as props
- Maintains current styling
- Shows location marker
- Includes directions button

## Implementation Plan

1. **Data Layer**
   - Create locations data file
   - Add location switching logic
   - Implement localStorage persistence

2. **UI Components**
   - Build LocationSelector
   - Update LocationHours
   - Refactor GoogleMap component

3. **Integration**
   - Add location context/provider
   - Update existing components
   - Add location switching animations

4. **Testing**
   - Test location switching
   - Verify map updates
   - Check responsive design
   - Test localStorage persistence

## Example Location Data
```typescript
const locations = [
  {
    id: "main-office",
    name: "Main Office",
    address: "123 Main St, City, State 12345",
    phone: "(555) 123-4567",
    email: "main@example.com",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    },
    hours: {
      monday: ["9:00 AM - 5:00 PM"],
      tuesday: ["9:00 AM - 5:00 PM"],
      wednesday: ["9:00 AM - 5:00 PM"],
      thursday: ["9:00 AM - 5:00 PM"],
      friday: ["9:00 AM - 5:00 PM"]
    },
    isMainOffice: true,
    description: "Our main office location"
  },
  // Additional locations...
];
```

## Design Considerations
- Maintain consistent branding
- Clear visual hierarchy
- Smooth transitions between locations
- Mobile-friendly interface
- Accessible location switching
- Clear indication of current location

## Future Enhancements
- Location-specific forms
- Location-specific services
- Location-specific staff
- Location-specific insurance information
- Location-specific testimonials 