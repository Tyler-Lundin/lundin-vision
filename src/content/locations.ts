export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: {
    monday?: string[];
    tuesday?: string[];
    wednesday?: string[];
    thursday?: string[];
    friday?: string[];
    saturday?: string[];
    sunday?: string[];
  };
  isMainOffice: boolean;
  description?: string;
}

export const LOCATIONS: Location[] = [
    {
      id: "airway-heights",
      name: "Walmart Vision Center Airway Heights",
      address: "1221 S Hayford Rd, Spokane, WA 99224",
      phone: "(509) 459-0619",
      email: "airwayheights@lundinvision.com", // Placeholder, update if actual email is known
      coordinates: {
        lat: 47.64531886188035, 
        lng: -117.558822078323,
      },
      hours: {
        monday: ["9:00 AM - 5:00 PM"],
        tuesday: ["9:00 AM - 5:00 PM"],
        wednesday: ["9:00 AM - 5:00 PM"],
        thursday: ["9:00 AM - 5:00 PM"],
        friday: ["9:00 AM - 5:00 PM"],
        saturday: [],
        sunday: []
      },
      isMainOffice: true,
      description: "Located inside Walmart Supercenter in Airway Heights, WA"
    },
    {
      id: "spokane-valley",
      name: "Walmart Vision Center Spokane Valley",
      address: "15727 E Broadway Ave, Spokane Valley, WA 99037",
      phone: "(509) 922-9655",
      email: "spokanevalley@lundinvision.com", // Placeholder, update if actual email is known
      coordinates: {
        lat: 47.6595,
        lng: -117.1947
      },
      hours: {
        monday: ["9:00 AM - 7:00 PM"],
        tuesday: ["9:00 AM - 7:00 PM"],
        wednesday: ["9:00 AM - 7:00 PM"],
        thursday: ["9:00 AM - 7:00 PM"],
        friday: ["9:00 AM - 7:00 PM"],
        saturday: ["9:00 AM - 6:00 PM"],
        sunday: ["12:00 PM - 5:00 PM"]
      },
      isMainOffice: false,
      description: "Located inside Walmart Supercenter in Spokane Valley, WA"
    },
  ];
  