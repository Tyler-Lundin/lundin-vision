// Define loose types here initially. These will be finalized in Phase 5.

export interface Service {
  id: string;
  name: string;
  description: string;
  // Add other service properties as needed
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: number;
  href?: string;
  /**  Relative path to photo image asset */
  photo?: string;

  /**  Highlighted areas of expertise/services offered  */
  expertise?: string[];

  /**  Patient satisfaction metric to display (e.g. "99%") */
  satisfaction?: string;
} 