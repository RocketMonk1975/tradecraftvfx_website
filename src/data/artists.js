const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '');

export const artists = [
  {
    id: 'epoch-monk',
    name: 'EPOCH MONK',
    genre: 'DJ / Curator',
    subgenre: 'All Genres',
    image: `${BASE_PATH}/images/artists/epoch-monk.jpg`,
    status: 'In Production',
    tagline: 'Every era has a sound. He finds it first.',
    bio: `Epoch Monk is a DJ and curator operating at the intersection of genre, culture, and technology. Where most DJs chase trends, Epoch Monk maps them — pulling from hip-hop, house, afrobeats, drill, and everything in between to construct sets that feel like a journey through music's entire timeline compressed into a single night.

His curation philosophy is simple: the right record in the right moment changes how people understand music. That instinct — honed across underground club nights, private events, and years of obsessive digging — is what drives everything he does.

Now in production with Tradecraft, Epoch Monk is building the first Tradecraft Radio sessions: a series of mixed recordings that document the sonic landscape of the AI music era. Original compositions, curated selections, and live edits — all under one roof.`,
    releases: [],
    socials: {
      instagram: '#',
      tiktok: '#',
      soundcloud: '#'
    }
  },
  {
    id: 'enigma',
    name: 'ENIGMA',
    genre: 'West Coast Hip-Hop',
    subgenre: '',
    image: `${BASE_PATH}/images/artists/enigma.jpg`,
    status: 'In Production',
    tagline: 'G-funk didn\'t die. It evolved.',
    bio: `ENIGMA carries the West Coast in his bones. Raised on the low-riders and long summers of Southern California, his music picks up where the G-funk era left off and takes it somewhere new — synthesizers rebuilt with Ableton, verses written with the precision of someone who has been studying the craft since before he could drive.

There is a cinematic quality to everything ENIGMA makes. The beats breathe. The hooks linger. And underneath the cool, there is something urgent — a voice that has things to say and knows exactly how to say them.

In production with Tradecraft, ENIGMA is developing his debut release: a collection of tracks that feel like a film you haven't seen yet but somehow already know. West Coast DNA. AI-enhanced production. A sound that belongs to right now.`,
    releases: [],
    socials: {
      instagram: '#',
      tiktok: '#',
      soundcloud: '#'
    }
  },
  {
    id: 'diamonds',
    name: 'DIAMONDS',
    genre: 'Amapiano',
    subgenre: '',
    image: `${BASE_PATH}/images/artists/diamonds.jpg`,
    status: 'In Production',
    tagline: 'South Africa to the world — one log drum at a time.',
    bio: `Diamonds brings amapiano to a global audience without diluting what makes it extraordinary. The log drum patterns are authentic, the piano runs are immaculate, and the grooves are built for both the township and the festival main stage.

What sets Diamonds apart is the production sophistication behind the sound. Every track is engineered for multiple listening environments — a sound system in Johannesburg, headphones on a subway in Tokyo, a club in Amsterdam. The music travels because it was built to.

In production with Tradecraft, Diamonds is developing a body of work that positions amapiano not as a trend but as a permanent pillar of global dance music. The world is catching up. The music is already ahead.`,
    releases: [],
    socials: {
      instagram: '#',
      tiktok: '#',
      soundcloud: '#'
    }
  },
  {
    id: 'gen',
    name: 'GEN',
    genre: 'Vietnamese-American Pop',
    subgenre: '',
    image: `${BASE_PATH}/images/artists/gen.jpg`,
    status: 'In Production',
    tagline: 'Two worlds. One voice.',
    bio: `Gen grew up between two cultures and learned to make music in the space between them. Her sound draws from the melodic tradition of Vietnamese music and the production language of contemporary American pop — not a fusion for its own sake, but a natural expression of what it feels like to hold two identities simultaneously.

Her voice is the anchor. Clear, emotive, and completely her own — it carries both the lightness of pure pop and the weight of something that has actually been lived. The songs are about belonging, distance, love, and the particular kind of strength that comes from building your own definition of home.

In production with Tradecraft, Gen is developing her debut release with a visual world to match — Kling AI visuals, Unreal Engine 5 environments, and a content strategy built around the cultural conversation her music is already starting.`,
    releases: [],
    socials: {
      instagram: '#',
      tiktok: '#',
      soundcloud: '#'
    }
  }
];

export function getArtistById(id) {
  return artists.find(a => a.id === id) || null;
}
