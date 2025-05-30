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
      bio: "Hillary recently graduated Pacific University College of Optometry. She is always looking for new ways to improve her skills and provide the best possible care for her patients.",
      photo: "/images/hillary.jpeg",
      satisfaction: "99%",
      expertise: [],
      experience: 1,
    },


    {
      id: "tyler-lundin",
      name: "Tyler Lundin",
      role: "Web Developer",
      photo: "/images/tyler.webp",
      bio: "Passionate about creating beautiful and functional digital experiences.",
      href: "https://www.tylerweb.dev",
      experience: 4,
      expertise: [
        "Web Development",
        "UI/UX Design",
        "Frontend Development",
        "Backend Development",
      ],
    },
  ] satisfies TeamMember[],
  // Add other static configuration data here
}; 