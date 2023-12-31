interface Game {
  id: number;
  slug: string;
  name: string;
  description?: string;
  website?: string;
  released: string;
  background_image: string;
  metacritic: number;
  parent_platforms: {
    platform: {
      id: number;
      slug: string;
      name: string;
    };
  }[];
  genres: {
    id: number;
    slug: string;
    name: string;
  }[];
  short_screenshots: {
    id: number;
    image: string;
  }[];
}

export type { Game };
