export const CONTENT = {
  // Homepage Hero
  hero: {
    tagline: "Lundin Vision",
    subTagline: "Dr. Bruce Lundin, OD",
    cta: {
      primary: {
        text: "Book an Appointment",
        href: "/contact"
      },
      secondary: {
        text: "My Services",
        href: "/services"
      }
    }
  },

  // Service Offerings
  services: {
    headline: "Comprehensive Eye Care Services",
    intro: "We provide a full range of optometry services using state-of-the-art technology",
    list: [
      {
        id: "comprehensive-exams",
        name: "Comprehensive Eye Exams",
        description: "Thorough vision and eye health evaluations using advanced diagnostic equipment.",
        details: ["Visual acuity testing", "Eye pressure check", "Retinal examination", "Vision correction assessment"]
      },
      {
        id: "contact-lens",
        name: "Contact Lens Services",
        description: "Expert fitting and prescription of contact lenses for all types of vision correction needs.",
        details: ["Specialty lens fitting", "Contact lens training", "Follow-up care", "Wide range of lens options"]
      },
      {
        id: "eye-disease",
        name: "Eye Disease Management",
        description: "Diagnosis and treatment of various eye conditions and diseases.",
        details: ["Glaucoma screening", "Diabetic eye exams", "Macular degeneration", "Dry eye treatment"]
      },
      {
        id: "pediatric",
        name: "Pediatric Eye Care",
        description: "Specialized eye care services for children of all ages.",
        details: ["Child-friendly eye exams", "Early vision problem detection", "Vision therapy", "Eye coordination testing"]
      }
    ]
  },

  // Bio/About Content
  about: {
    headline: "Your Vision Is Our Mission",
    intro: "With over three decades of experience, Lundin Vision provides exceptional eye care services to our community.",
    story: `Founded by Dr. Bruce Lundin, our practice combines traditional patient care values with modern optometry techniques. 
    We believe in building lasting relationships with our patients while providing the highest quality eye care services.`,
    values: [
      {
        title: "Patient-First Approach",
        description: "We prioritize your comfort and understanding throughout every visit."
      },
      {
        title: "Advanced Technology",
        description: "Our office is equipped with the latest diagnostic and treatment technology."
      },
      {
        title: "Continuous Care",
        description: "We provide ongoing support and follow-up care for all our patients."
      }
    ]
  },

  // Contact Information
  contact: {
    headline: "Get in Touch",
    intro: "Schedule an appointment or reach out with any questions.",
    info: {
      address: "1221 S Hayford Rd, Spokane, WA 99224",
      phone: "(509) 459-0619",
      email: "doctor@lundinvision.com",
      hours: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: Closed",
        "Sunday: Closed"
      ]
    },
    form: {
      title: "Schedule an Appointment",
      description: "Fill out the form below and we'll get back to you within 24 hours."
    }
  },
}; 