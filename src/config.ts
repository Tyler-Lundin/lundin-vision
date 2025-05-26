import type { Service, TeamMember } from "./types";

export const CONFIG = {
  siteName: "LundinVision.com",
  services: [
    {
      id: "web-dev",
      name: "Web Development",
      description: "Building modern, responsive websites and web applications.",
    },
    {
      id: "ui-ux",
      name: "UI/UX Design",
      description: "Crafting intuitive and engaging user experiences.",
    },
  ] as Service[],
  team: [
    {
      id: "tyler-lundin",
      name: "Tyler Lundin",
      role: "Lead Developer & Designer",
      photo: "/images/tyler.png",
      bio: "Passionate about creating beautiful and functional digital experiences.",
    },
    {
        id: "bruce-lundin",
        name: "Dr. Bruce Lundin",
        role: "Lead Optometrist",
        experience: 27,
        bio: "With more than 27 years serving the community, Dr. Lundin provides friendly, comprehensive vision care—from routine eye exams to personalized contact-lens fittings—using the latest diagnostic technology.",
        photo: "/images/bruce-lundin.jpg",
        satisfaction: "99%",
        expertise: [
          "Comprehensive Vision Examinations",
          "Contact Lens Fittings & Training",
          "Pediatric Eye Care",
          "Dry Eye & Allergy Relief",
          "Eyeglass Prescription Updates",
        ],
    },
    {
      id: "hillary-lundin",
      name: "Hillary Lundin",
      role: "Optometrist (Pending Final Certification)",
      bio: "Hillary recently graduated and has been an optician for over 20 years. She is currently preparing for her final certification exam and is dedicated to providing the best possible care for her patients.",
      photo: "/images/hillary-bruce.jpg",
      satisfaction: "99%",
      expertise: []
    },
  ] as TeamMember[],
  // Add other static configuration data here
}; 