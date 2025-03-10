// VFX Project Data
export const projects = [
  {
    id: "stellar-odyssey",
    title: "Stellar Odyssey",
    client: "Universal Pictures",
    date: "2024",
    category: "Feature Film",
    thumbnail: "/images/projects/stellar-odyssey-thumb.jpg",
    heroImage: "/images/projects/stellar-odyssey-hero.jpg",
    description: "A space exploration epic requiring extensive environment creation, character augmentation, and complex space sequences.",
    services: ["CGI Environments", "Character Effects", "Compositing"],
    challenge: "Creating scientifically accurate yet visually stunning space environments and integrating live-action footage with CGI elements seamlessly.",
    solution: "Our team developed custom procedural tools for realistic space phenomena and implemented advanced compositing techniques to blend practical and digital elements.",
    images: [
      "/images/projects/stellar-odyssey-1.jpg",
      "/images/projects/stellar-odyssey-2.jpg",
      "/images/projects/stellar-odyssey-3.jpg"
    ],
    videoUrl: "https://vimeo.com/example"
  },
  {
    id: "urban-legends",
    title: "Urban Legends",
    client: "Netflix",
    date: "2023",
    category: "TV Series",
    thumbnail: "/images/projects/urban-legends-thumb.jpg",
    heroImage: "/images/projects/urban-legends-hero.jpg",
    description: "A supernatural thriller series requiring subtle and realistic visual effects to enhance storytelling without breaking immersion.",
    services: ["Digital Set Extensions", "Creature Effects", "Atmospheric FX"],
    challenge: "Creating believable supernatural elements that maintain the show's grounded aesthetic.",
    solution: "Developed a hybrid approach combining practical effects with digital enhancements, focusing on lighting integration and realistic physics.",
    images: [
      "/images/projects/urban-legends-1.jpg",
      "/images/projects/urban-legends-2.jpg",
      "/images/projects/urban-legends-3.jpg"
    ],
    videoUrl: "https://vimeo.com/example2"
  },
  {
    id: "quantum-realm",
    title: "Quantum Realm",
    client: "Marvel Studios",
    date: "2023",
    category: "Feature Film",
    thumbnail: "/images/projects/quantum-realm-thumb.jpg",
    heroImage: "/images/projects/quantum-realm-hero.jpg",
    description: "Creating a visually distinct subatomic universe with unique physics, creatures, and environments.",
    services: ["Concept Development", "3D Modeling", "Particle FX", "Compositing"],
    challenge: "Designing a physically plausible microscopic world that feels alien yet scientifically inspired.",
    solution: "Combined fluid simulations, fractal-based procedural generation, and custom rendering techniques to create a cohesive quantum environment.",
    images: [
      "/images/projects/quantum-realm-1.jpg",
      "/images/projects/quantum-realm-2.jpg",
      "/images/projects/quantum-realm-3.jpg"
    ],
    videoUrl: "https://vimeo.com/example3"
  },
  {
    id: "digital-frontier",
    title: "Digital Frontier",
    client: "Microsoft",
    date: "2024",
    category: "Commercial",
    thumbnail: "/images/projects/digital-frontier-thumb.jpg",
    heroImage: "/images/projects/digital-frontier-hero.jpg",
    description: "A high-concept technology commercial visualizing digital transformation through metaphorical environments.",
    services: ["Motion Design", "3D Animation", "Compositing"],
    challenge: "Translating abstract technological concepts into visually compelling and understandable imagery.",
    solution: "Created a visual language that bridges technology and nature, using organic forms and flowing transitions to represent digital processes.",
    images: [
      "/images/projects/digital-frontier-1.jpg",
      "/images/projects/digital-frontier-2.jpg"
    ],
    videoUrl: "https://vimeo.com/example4"
  }
];

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === id) || null;
};

// Get projects by category
export const getProjectsByCategory = (category) => {
  return category 
    ? projects.filter(project => project.category === category)
    : projects;
};
