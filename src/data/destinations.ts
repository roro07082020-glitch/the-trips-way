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
      '/assets/destinations/algarve.jpg',
    description:
      'Golden cliffs, hidden beaches and Atlantic landscapes across southern Portugal.',
  },
  {
    slug: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    region: 'Portugal',
    image:
      '/assets/destinations/lisbon.jpg',
    description:
      'A city of historic streets, viewpoints, food, culture and Atlantic light.',
  },
  {
    slug: 'porto',
    name: 'Porto',
    country: 'Portugal',
    region: 'Northern Portugal',
    image:
      '/assets/destinations/porto.jpg',
    description:
      'Riverside views, historic architecture and the character of northern Portugal.',
  },
  {
    slug: 'madeira',
    name: 'Madeira',
    country: 'Portugal',
    region: 'Atlantic Islands',
    image:
      '/assets/destinations/madeira.jpg',
    description:
      'Dramatic mountains, ocean views, levadas and unforgettable island landscapes.',
  },
  {
    slug: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    region: 'Catalonia',
    image:
      '/assets/destinations/barcelona.jpg',
    description:
      'Mediterranean beaches, architecture, food and vibrant city life.',
  },
  {
    slug: 'madrid',
    name: 'Madrid',
    country: 'Spain',
    region: 'Community of Madrid',
    image:
      '/assets/destinations/madrid.jpg',
    description:
      'Art, gastronomy, elegant boulevards and the energy of Spain’s capital.',
  },
  {
    slug: 'mallorca',
    name: 'Mallorca',
    country: 'Spain',
    region: 'Balearic Islands',
    image:
      '/assets/destinations/mallorca.jpg',
    description:
      'Turquoise coves, Mediterranean villages and spectacular island landscapes.',
  },
  {
    slug: 'malaga',
    name: 'Málaga',
    country: 'Spain',
    region: 'Andalusia',
    image:
      '/assets/destinations/malaga.jpg',
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
