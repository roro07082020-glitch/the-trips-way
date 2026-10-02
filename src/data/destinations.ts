export type Destination = {
  slug: string;
  name: string;
  country: string;
  region: string;
  image: string;
  description: string;
};

export const destinations: Destination[] = [
  {
    slug: 'algarve',
    name: 'Algarve',
    country: 'Portugal',
    region: 'Southern Portugal',
    image:
      'https://images.unsplash.com/photo-1699726232720-402e00259c6c?auto=format&fit=crop&w=1600&q=90',
    description:
      'Golden cliffs, hidden beaches and Atlantic landscapes across southern Portugal.',
  },
  {
    slug: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    region: 'Portugal',
    image:
      'https://images.unsplash.com/photo-1749511380076-38ff3b3a7d6e?auto=format&fit=crop&w=1600&q=90',
    description:
      'A city of historic streets, viewpoints, food, culture and Atlantic light.',
  },
  {
    slug: 'porto',
    name: 'Porto',
    country: 'Portugal',
    region: 'Northern Portugal',
    image:
      'https://images.unsplash.com/photo-1748792461789-e94a91541532?auto=format&fit=crop&w=1600&q=90',
    description:
      'Riverside views, historic architecture and the character of northern Portugal.',
  },
  {
    slug: 'madeira',
    name: 'Madeira',
    country: 'Portugal',
    region: 'Atlantic Islands',
    image:
      'https://images.unsplash.com/photo-1722608129690-57334f17f6de?auto=format&fit=crop&w=1600&q=90',
    description:
      'Dramatic mountains, ocean views, levadas and unforgettable island landscapes.',
  },
  {
    slug: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    region: 'Catalonia',
    image:
      'https://images.unsplash.com/photo-1758471206484-0eaa2568320c?auto=format&fit=crop&w=1600&q=90',
    description:
      'Mediterranean beaches, architecture, food and vibrant city life.',
  },
  {
    slug: 'madrid',
    name: 'Madrid',
    country: 'Spain',
    region: 'Community of Madrid',
    image:
      'https://images.unsplash.com/photo-1543785734-4b6e564642f8?auto=format&fit=crop&w=1600&q=90',
    description:
      'Art, gastronomy, elegant boulevards and the energy of Spain’s capital.',
  },
  {
    slug: 'mallorca',
    name: 'Mallorca',
    country: 'Spain',
    region: 'Balearic Islands',
    image:
      'https://images.unsplash.com/photo-1661717285026-5a0ef5198b08?auto=format&fit=crop&w=1600&q=90',
    description:
      'Turquoise coves, Mediterranean villages and spectacular island landscapes.',
  },
  {
    slug: 'malaga',
    name: 'Málaga',
    country: 'Spain',
    region: 'Andalusia',
    image:
      'https://images.unsplash.com/photo-1612972806701-9cffb7470ed2?auto=format&fit=crop&w=1600&q=90',
    description:
      'Sun, beaches, culture and the relaxed Mediterranean atmosphere of Andalusia.',
  },
];

export function getDestinationBySlug(
  slug: string
): Destination | undefined {
  return destinations.find(
    (destination) => destination.slug === slug
  );
}
