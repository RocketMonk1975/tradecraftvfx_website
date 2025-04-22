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
    thumbnail: `${BASE_PATH}/images/projects/creed3/Creed3_poster_00.jpg`,
    heroImage: `${BASE_PATH}/images/projects/creed3/Creed3_poster_00.jpg`,
    description: "Adonis Creed faces a new challenge in the ring and his personal life as he battles a former friend turned rival, pushing his limits as a boxer and a man.",
    services: ["Digital Environment Enhancements", "Crowd Multiplication", "Impact VFX", "Compositing"],
    challenge: "We needed to provide accurate and realistic models for the Cape Town and Dodgers Stadiums. Then fill them up with CG crowds during fight scenes.",
    solution: "Highly detailed models of the stadiums were made, then using camera projection techniques to provide a quick and optimal performance solution for realistic texturing and lookdev. The crowds were later added in using high quality CG human models generated procedurally with motion captured animation. Then scatter around precisely on each of the stadium seats using dynamic simulation plugins.",
    images: [
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_01.jpg`,
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_02.jpg`,
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_03.jpg`,
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_04.jpg`,
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_05.jpg`,
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_06.jpg`,
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_07.jpg`,
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_08.jpg`,
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_09.jpg`,
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_10.jpg`,
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_11.jpg`,
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_12.jpg`,
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_13.jpg`,
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_14.jpg`,
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_15.jpg`,
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_16.jpg`,
      `${BASE_PATH}/images/projects/creed3/Creed3_poster_17.jpg`
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
    description: "This prequel miniseries explores the origins of the assassin-friendly Continental Hotel in 1970s New York, following a young Winston Scott's rise to power.",
    services: ["Period VFX", "Action Sequence Enhancement", "Building Modeling", "Set Extensions"],
    challenge: "Generating realistic CG models for the background buildings around the Iconic Continental hotel in the John Wick universe. And the helicopter used throughout all 3 episodes of the TV series.",
    solution: "3D scanned models of the practical set buildings were provided as reference for us to generate the models as accurate as possible. Thoses that were not available as scanned models were re-builted in 3D base on schematics and concept art pieces. The helicopter were made solely base on references of the real life heli we could find on the internet.",
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
    description: "A single father and his son, along with a scientist, fight to survive against monstrous creatures in a post-apocalyptic Rocky Mountains setting.",
    services: ["Set Extensions", "White House Modeling", "VFX Integration", "Digital Production Design"],
    challenge: "Rebuilding the White House individual rooms for use in Doll house effects shots. Some are being use really up close that require highly accurate and realistic CG modeling works.",
    solution: "Base on CG scans, reference photos that were taken on set, mix with sources on the internet. We were able to recreate entire rooms and their props (Bed, tables, small table wares, etc…) in highly realistic quality that end up making the Doll house shots looks identical to the real White House.",
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
    description: "A sci-fi thriller featuring an alien attack on a ski resort, requiring extensive environment creation and digital effects to capture the tense action sequences.",
    services: ["Digital Environment Creation", "CG Assets", "Ski Lift Modeling", "Atmospheric Effects"],
    challenge: "Creating the Ski Lift, Ski Lift stations and the environment around said structures to be use as background elements in the movie during the Alien Ski Lift attack scenes.",
    solution: "Rough 3D scanned model of the practical assets were provided to us, using these scanned models and adding in extra details in 3D modeling help brings the assets close to the practical set pieces.",
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
    thumbnail: `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.0.0.jpg`,
    heroImage: `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.0.0.jpg`,
    description: "On a wing and a prayer.",
    services: ["Airport Modeling", "Aircraft Recreation", "Animation", "Environmental Integration"],
    challenge: "Modeling the gigantic Fort Meyer airport to be use as background element for hero shots. And the 2 hero airplane used throughout the movie need to be model, rig and animated.",
    solution: "For the airplanes we used reference photos of the exact airplanes in the real life event that took place, our team spend the extra efforts to make sure that every smallest detail on the exact airplane were captured. These air planes are then animate and render by our dedicated animation team. For the airport we used google scanned 3D model as a reference, then model extra details, service buildings, control towers, etc.. on top. It then get populated with CG airplanes and airport props to enhance realism.",
    images: [
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.1.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.11.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.14.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.14.2.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.14.3.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.16.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.16.2.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.18.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.2.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.25.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.29.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.36.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.43.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.49.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.5.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.50.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.52.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.55.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.58.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.61.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.63.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.64.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.71.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.76.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.78.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.82.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.89.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.90.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.90.2.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.91.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.92.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.93.1.jpg`,
      `${BASE_PATH}/images/projects/wingANDprayer/wingANDprayer_2.94.1.jpg`
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
    description: "A spin-off of The Vampire Diaries, this series follows the powerful Mikaelson vampire family as they navigate power struggles and supernatural threats in New Orleans.",
    services: ["Creature FX", "Magic VFX", "Environment Enhancements", "Digital Set Extensions"],
    challenge: "Various challenging requests for modeling and dynamic effects. Including realistic flowers model, then animated and simulating wilting effects. Some shots we have to 3D matchmove a character and set him on fire using fire and smoke simulation.",
    solution: "Our dynamic simulation team worked closely with the client to provide quick and efficient solutions for the effects that were required on our shots.",
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
    description: "Jean-Luc Picard, the retired Starfleet admiral, returns to space on a new mission, confronting past decisions and new galactic challenges in this Star Trek continuation.",
    services: ["Space Environment Design", "Ship Visualization", "UI/Technology Design", "Digital Set Extensions"],
    challenge: "Re-create the iconic ships in the Star Trek franchise to be displace on a space museum in the TV series.",
    solution: "As space lovers and die hard Star Trek fans, we dedicated our effort into making the most accurate CG models for the old school Star Trek space ships. Everything were modelled from scratches and stay true to the original practical models.",
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
    description: "Set in 2199, this sci-fi series follows Jax, a young woman training at Earth's Space Training Academy, as she uncovers secrets about her identity and battles galactic threats.",
    services: ["Alien World Design", "Creature Effects", "Sci-Fi Tech Visualization", "Space Environment Creation"],
    challenge: "We were tasked with designing, modeling and animate a majority of environment, buildings, space ships assets. Animate action sequences throughout the entire series.",
    solution: "All the space ships used in the movie were designed by our team from scratch. We worked closely with our client to provide epic space ships used in the movie, from the smallest space shuttle to the gigantic battle cruisers that soars through the dark universe. We also worked on most of the CG space shots, including both large scale battle scenes where we have to use various simulation methods to provide space battles that involved hundreds of space ships of all sizes firing lasers and exploding gloriously.",
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
    description: "Tensions rise aboard the International Space Station when American and Russian astronauts receive conflicting orders from Earth during a global crisis.",
    services: ["Zero-G VFX", "Space Environment Creation", "Space Station Modeling", "Photorealistic Digital Doubles"],
    challenge: "Providing realistic and hyper detailed model for the interior and exterior of the International Space Station. Various other tasks including modeling and animate a CG mouse floating in zero gravity, animating CG astronaut and dynamic simulations were also handled by our team.",
    solution: "We used provided scanned model and actual photos of the space station to recreate it in 3D. The models are then tracked onto the green screen shots and used as CG set extensions to provided realistic looking shots in the movie. For the mouse we modeled and add fur simulation system in 3D, then animate in tracked practical shots for realistic effects. Other full CG shots were also handled by our animators.",
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
    description: "A comedic take on the 1960s race between Kellogg's and Post to invent the Pop-Tart, blending absurd humor with corporate rivalry.",
    services: ["Period Set Extensions", "Digital Compositing", "Product Recreation", "CG Food Animation"],
    challenge: "Creating the cereal dispenser room, fully equip with an operatable cereal dispensers and CG furnitures. Modeling a photo real delivery truck for the truck chasing scene.",
    solution: "We were provided with some concept and practical set photos of the room, also CG scanned object for the red delivery truck. Our modeling team, being expert at these tasks take them in at ease and provided exelent quality models for the assets.",
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
    description: "This drama celebrates the unsung African-American women mathematicians who played crucial roles at NASA during the 1960s Space Race.",
    services: ["Period Effects", "Digital Set Extensions", "Historical Equipment Recreation", "Space Launch Sequences"],
    challenge: "Creating historically accurate, photo real high quality models for the first era of space crafts. Including the Friendship 7 pod, atlas rocket, etc... In a tight deadline.",
    solution: "Provided with only some rare reference images. Our team had to do our own research and recreate the iconic space crafts in 3D in a relatively short schedule. However the excellent quality provided were fruitful and help the project get nominated for an Oscar.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/hidden-figures-gallery1.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/hidden-figures-gallery2.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/hidden-figures-gallery3.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/our_work/hidden-figures/hidden-figures-trailer.mp4`,
    featured: true
  },
  {
    id: "skyline-vista",
    title: "Skyline Vista",
    client: "ALTURA Architects",
    date: "2024",
    category: "Architectural Visualization",
    thumbnail: `${BASE_PATH}/images/projects/temp-heroes/archviz-thumb1.jpg`,
    heroImage: `${BASE_PATH}/images/projects/temp-heroes/archviz-hero1.jpg`,
    description: "High-end architectural visualization for a luxury mixed-use development, showcasing photorealistic exteriors, interiors, and surrounding environments.",
    services: ["3D Modeling", "Photorealistic Rendering", "Environmental Integration", "Lighting Design"],
    challenge: "Creating photorealistic architectural visualizations that accurately represent the design intent while conveying the emotional impact of the spaces.",
    solution: "Utilized advanced global illumination rendering techniques and physically accurate materials to achieve photorealism, with careful attention to lighting design to evoke the desired emotional response.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/archviz-gallery1.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/archviz-gallery2.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/archviz-gallery3.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/reels/archviz-skyline-vista.mp4`
  },
  {
    id: "urban-renewal",
    title: "Urban Renewal",
    client: "City of Portland",
    date: "2023",
    category: "Architectural Visualization",
    thumbnail: `${BASE_PATH}/images/projects/temp-heroes/archviz-thumb2.jpg`,
    heroImage: `${BASE_PATH}/images/projects/temp-heroes/archviz-hero2.jpg`,
    description: "Comprehensive urban planning visualization project showcasing the transformation of a downtown district through architectural renovations and public space development.",
    services: ["Urban Planning Visualization", "Before/After Comparisons", "Aerial Perspectives", "Pedestrian Simulations"],
    challenge: "Visualizing the dramatic transformation of an entire urban district and communicating the benefits to stakeholders and the public.",
    solution: "Created a comprehensive visualization package including photorealistic aerial views, street-level perspectives, and interactive before/after comparisons to effectively communicate the impact of the proposed changes.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/archviz-gallery4.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/archviz-gallery5.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/archviz-gallery6.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/reels/archviz-urban-renewal.mp4`
  },
  {
    id: "avalanche-sequence",
    title: "Avalanche Sequence",
    client: "Summit Pictures",
    date: "2024",
    category: "Previsualization",
    thumbnail: `${BASE_PATH}/images/projects/temp-heroes/previs-thumb1.jpg`,
    heroImage: `${BASE_PATH}/images/projects/temp-heroes/previs-hero1.jpg`,
    description: "Complete previsualization for a complex action sequence featuring an avalanche chase in a major feature film.",
    services: ["Shot Design", "Camera Placement", "Timing & Pacing", "Stunt Visualization"],
    challenge: "Planning a complex, multi-stage action sequence involving practical stunts, digital characters, and large-scale environmental effects.",
    solution: "Created a comprehensive previsualization package with detailed camera work, timing, and integration planning that allowed for efficient on-set production and seamless integration with post-production visual effects.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/previs-gallery1.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/previs-gallery2.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/previs-gallery3.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/reels/previs-avalanche.mp4`
  },
  {
    id: "genesis-battle",
    title: "Genesis Battle",
    client: "Legendary Entertainment",
    date: "2023",
    category: "Previsualization",
    thumbnail: `${BASE_PATH}/images/projects/temp-heroes/previs-thumb2.jpg`,
    heroImage: `${BASE_PATH}/images/projects/temp-heroes/previs-hero2.jpg`,
    description: "Comprehensive previsualization for an epic sci-fi battle sequence involving multiple spacecraft, alien creatures, and complex environmental interactions.",
    services: ["Scene Planning", "Camera Choreography", "VFX Integration", "Technical Feasibility"],
    challenge: "Designing a visually distinctive and coherent space battle that balances spectacular visual moments with clear storytelling and technical feasibility.",
    solution: "Developed a detailed previsualization workflow that incorporated director feedback in real-time, allowing for rapid iteration of camera choices, timing, and visual storytelling elements.",
    images: [
      `${BASE_PATH}/images/projects/temp-heroes/previs-gallery4.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/previs-gallery5.jpg`,
      `${BASE_PATH}/images/projects/temp-heroes/previs-gallery6.jpg`
    ],
    videoUrl: `${BASE_PATH}/videos/reels/previs-genesis-battle.mp4`
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
