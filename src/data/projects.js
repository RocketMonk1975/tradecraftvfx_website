// VFX Project Data
// Base path for assets
const BASE_PATH = '/tradecraftvfx_website';

export const projects = [
  {
    id: "creed-3",
    title: "Creed 3",
    client: "Universal Pictures",
    date: "2024",
    category: "Feature Film",
    thumbnail: `${BASE_PATH}/images/projects/creed3/Creed3_poster.jpg`,
    heroImage: `${BASE_PATH}/images/projects/temp-heroes/creed3-hero.jpg`,
    description: "A sports drama requiring extensive digital environment enhancements, crowd multiplication, and punch impact visual effects.",
    services: ["Digital Environment Enhancements", "Crowd Multiplication", "Impact VFX", "Compositing"],
    challenge: "Creating realistic boxing sequences with convincing impact effects while maintaining the gritty, authentic feel of the franchise.",
    solution: "Our team developed custom procedural tools for impact effects and implemented advanced compositing techniques to blend practical and digital elements seamlessly.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/creed3-gallery1.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/creed3-gallery2.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/creed3-gallery3.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/our_work/Creed3/Creed3_FULL.mov`,
    featured: true
  },
  {
    id: "the-continental",
    title: "The Continental",
    client: "John Wick / Peacock",
    date: "2023",
    category: "TV Series",
    thumbnail: `${BASE_PATH}/images/projects/the-continental/the-continental-thumb.jpg`,
    heroImage: `${BASE_PATH}/images/projects/temp-heroes/continental-hero.jpg`,
    description: "A spin-off series from the John Wick universe requiring period-accurate VFX and stylized action sequences set in 1970s New York.",
    services: ["Period VFX", "Action Sequence Enhancement", "Blood & Gore FX", "Set Extensions"],
    challenge: "Creating visually stunning action sequences while maintaining the iconic John Wick aesthetic and authentically recreating 1970s New York.",
    solution: "Developed specialized workflow for highly choreographed action scenes with seamless visual effects integration and extensive digital set extensions to transform modern locations into period-accurate settings.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/continental-gallery1.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/continental-gallery2.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/continental-gallery3.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/reels/the-continental-reel.mp4`
  },
  {
    id: "the-residence",
    title: "The Residence",
    client: "Netflix",
    date: "2024",
    category: "TV Series",
    thumbnail: `${BASE_PATH}/images/projects/the-residence/the-residence-thumb.jpg`,
    heroImage: `${BASE_PATH}/images/projects/temp-heroes/residence-hero.jpg`,
    description: "A murder mystery series set in the White House requiring meticulous period detail and visual enhancements to recreate the historical setting with modern suspense elements.",
    services: ["Set Extensions", "Period Detail Enhancement", "VFX Integration", "Digital Production Design"],
    challenge: "Creating historically accurate White House environments with perfect architectural details while supporting the suspenseful tone of a modern mystery series.",
    solution: "Detailed historical research and architectural accuracy combined with subtle atmospheric enhancements to maintain period authenticity while enhancing suspense and drama.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/residence-gallery1.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/residence-gallery2.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/residence-gallery3.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/reels/the-residence-reel.mp4`
  },
  {
    id: "elevation",
    title: "Elevation",
    client: "Marvel Studios",
    date: "2023",
    category: "Feature Film",
    thumbnail: `${BASE_PATH}/images/projects/elevation/Elevation_poster.jpg`,
    heroImage: `${BASE_PATH}/images/projects/temp-heroes/elevation-hero.jpg`,
    description: "A superhero film with extensive aerial sequences, urban environments, and high-altitude action requiring seamless digital integration.",
    services: ["Digital Environment Creation", "CG Buildings", "Aerial Physics", "Atmospheric Effects"],
    challenge: "Creating dynamic aerial sequences through dense urban environments with realistic physics and lighting at various altitudes and weather conditions.",
    solution: "Developed detailed digital city extensions with procedural building generation and custom aerial physics simulation for realistic flight mechanics.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/elevation-gallery1.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/elevation-gallery2.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/elevation-gallery3.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/our_work/Elevation/Elevation_FULL.mov`,
    featured: true
  },
  {
    id: "digital-frontier",
    title: "Digital Frontier",
    client: "Microsoft",
    date: "2024",
    category: "Commercial",
    thumbnail: `${BASE_PATH}/images/projects/digital-frontier-thumb.jpg`,
    heroImage: `${BASE_PATH}/images/projects/temp-heroes/digital-frontier-hero.jpg`,
    description: "A high-concept technology commercial visualizing digital transformation through metaphorical environments that blend natural elements with advanced technology concepts.",
    services: ["Motion Design", "3D Animation", "Compositing", "Concept Development"],
    challenge: "Translating abstract technological concepts like cloud computing, AI, and digital transformation into visually compelling and understandable imagery for a mainstream audience.",
    solution: "Created a visual language that bridges technology and nature, using organic flowing transitions to represent digital processes, with subtle particle effects to visualize data flow and cloud connectivity.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/digital-frontier-gallery1.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/digital-frontier-gallery2.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/digital-frontier-gallery3.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/reels/digital-frontier-reel.mp4`
  },
  {
    id: "wings-and-a-prayer",
    title: "Wings and a Prayer",
    client: "Universal Studios",
    date: "2023",
    category: "Feature Film",
    thumbnail: `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer.jpg`,
    heroImage: `${BASE_PATH}/images/projects/temp-heroes/wings-hero.jpg`,
    description: "A WWII aviation drama requiring extensive aerial dogfight sequences, period-accurate aircraft recreations, and environmental effects for battle scenes.",
    services: ["Historical Aircraft Recreation", "Aerial Combat VFX", "Explosion & Fire FX", "Environmental Integration"],
    challenge: "Creating historically accurate aerial combat sequences with realistic physics and authentic period aircraft while maintaining the emotional intensity of the story.",
    solution: "Developed detailed digital aircraft models with historically accurate markings and damage systems combined with custom aerial physics simulation for realistic flight and combat mechanics.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/wings-gallery1.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/wings-gallery2.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/wings-gallery3.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/our_work/WingsAndaPrayer/WingsAndaPrayer_FULL.mov`,
    featured: true
  },
  {
    id: "the-originals",
    title: "The Originals",
    client: "Warner Bros",
    date: "2022",
    category: "TV Series",
    thumbnail: `${BASE_PATH}/images/projects/the-originals/the-originals-thumb.jpg`,
    heroImage: `${BASE_PATH}/images/projects/temp-heroes/originals-hero.jpg`,
    description: "Supernatural fantasy series requiring creature transformations, magical effects, atmospheric enhancements, and digital environments for the New Orleans setting.",
    services: ["Creature FX", "Magic VFX", "Environment Enhancements", "Digital Set Extensions"],
    challenge: "Creating convincing supernatural transformations, werewolf morphs, and magical effects that feel grounded within the show's universe while maintaining the dark, atmospheric aesthetic.",
    solution: "Developed custom transformation rigs for werewolf sequences and magical effect systems with consistent visual language throughout the series, plus detailed digital extensions of New Orleans environments.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/originals-gallery1.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/originals-gallery2.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/originals-gallery3.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/reels/the-originals-reel.mp4`
  },
  {
    id: "picard",
    title: "Picard",
    client: "CBS",
    date: "2023",
    category: "TV Series",
    thumbnail: `${BASE_PATH}/images/projects/picard/picard-thumb.jpg`,
    heroImage: `${BASE_PATH}/images/projects/temp-heroes/picard-hero.jpg`,
    description: "Science fiction series requiring extensive starship design, alien worlds, planetary environments, and futuristic technology visualization for the Star Trek universe.",
    services: ["Space Environment Design", "Ship Visualization", "UI/Technology Design", "Digital Set Extensions"],
    challenge: "Creating visually stunning space sequences and futuristic environments that honor the Star Trek legacy while pushing visual boundaries for modern audiences.",
    solution: "Blended classic Star Trek design language with modern VFX techniques and photorealistic rendering, developing enhanced starship models and next-generation UI systems consistent with established canon.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/picard-gallery1.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/picard-gallery2.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/picard-gallery3.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/reels/picard-reel.mp4`
  },
  {
    id: "pandora",
    title: "Pandora",
    client: "Warner Bros",
    date: "2022",
    category: "TV Series",
    thumbnail: `${BASE_PATH}/images/projects/pandora/pandora-thumb.jpg`,
    heroImage: `${BASE_PATH}/images/projects/temp-heroes/pandora-hero.jpg`,
    description: "Science fiction series requiring extensive alien world creation, futuristic city environments, spacecraft visualization, and advanced technology interfaces.",
    services: ["Alien World Design", "Creature Effects", "Sci-Fi Tech Visualization", "Space Environment Creation"],
    challenge: "Creating unique and diverse alien worlds, creatures, and futuristic technology across multiple fictional planets on a television production schedule and budget.",
    solution: "Utilized efficient asset management and procedural environment generation techniques to create variety across episodes, with modular spaceship designs and reusable alien morphology systems.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/pandora-gallery1.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/pandora-gallery2.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/pandora-gallery3.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/reels/pandora-reel.mp4`
  },
  {
    id: "iss",
    title: "I.S.S.",
    client: "Bleecker Street",
    date: "2023",
    category: "Feature Film",
    thumbnail: `${BASE_PATH}/images/projects/ISS/ISS_poster.jpg`,
    heroImage: `${BASE_PATH}/images/projects/temp-heroes/iss-hero.jpg`,
    description: "Science fiction thriller set aboard the International Space Station during a global conflict on Earth, requiring authentic zero-gravity visual effects and photorealistic space exteriors.",
    services: ["Zero-G VFX", "Space Environment Creation", "Destruction Sequences", "Photorealistic Digital Doubles"],
    challenge: "Creating realistic zero-gravity environments, authentic ISS interiors and exteriors, and tense space disaster sequences with scientifically plausible destruction physics.",
    solution: "Developed custom physics simulations for weightlessness and innovative compositing techniques for space exteriors, using reference imagery from NASA to ensure maximum authenticity in the space station environments.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/iss-gallery1.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/iss-gallery2.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/iss-gallery3.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/our_work/ISS/ISS_FULL.mov`,
    featured: true
  },
  {
    id: "unfrosted",
    title: "Unfrosted",
    client: "Netflix",
    date: "2023",
    category: "Feature Film",
    thumbnail: `${BASE_PATH}/images/projects/unfrosted/unfrosted-poster.jpg`,
    heroImage: `${BASE_PATH}/images/projects/temp-heroes/unfrosted-hero.jpg`,
    description: "Period comedy film set in the 1960s requiring extensive visual effects, digital set extensions, and vintage product recreations for the breakfast cereal industry.",
    services: ["Period Set Extensions", "Digital Compositing", "Product Recreation", "CG Food Animation"],
    challenge: "Creating period-accurate 1960s environments and convincing cereal special effects while maintaining the comedic tone without distracting from the humor.",
    solution: "Developed subtle period-accurate VFX enhancements and digital set extensions that support the 1960s storytelling, with specialized techniques for appetizing cereal visualization and factory environments.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/unfrosted-gallery1.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/unfrosted-gallery2.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/unfrosted-gallery3.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/our_work/unfrosted/unfrosted-trailer.mp4`,
    featured: true
  },
  {
    id: "hidden-figures",
    title: "Hidden Figures",
    client: "20th Century Fox",
    date: "2022",
    category: "Feature Film",
    thumbnail: `${BASE_PATH}/images/projects/hidden-figures/hidden-figures-poster.jpg`,
    heroImage: `${BASE_PATH}/images/projects/temp-heroes/hidden-figures-hero.jpg`,
    description: "Historical drama set in the 1960s NASA space program requiring period-accurate effects, vintage computing technology recreation, and early space program visual enhancements.",
    services: ["Period Effects", "Digital Set Extensions", "Historical Equipment Recreation", "Space Launch Sequences"],
    challenge: "Recreating period-accurate 1960s NASA environments, vintage computing equipment, and early space technology with perfect historical accuracy while supporting the emotional story.",
    solution: "Extensive historical research and NASA archive reference gathering to ensure complete authenticity in all visual elements, with attention to period-specific details from computer interfaces to control room environments.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/hidden-figures-gallery1.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/hidden-figures-gallery2.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/hidden-figures-gallery3.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/our_work/hidden-figures/hidden-figures-trailer.mp4`,
    featured: true
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
