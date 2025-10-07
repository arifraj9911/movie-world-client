export interface CastMember {
  image: File | string;
  name: string;
  role: string;
  episode: number;
  year: number;
}

export interface TMovie {
  id: string;
  title: string;
  poster: File | string;
  description: string;
  creators: string[];
  stars: string[];
  genre: string[];
  releaseYear: number;
  episodes: number;
  videos: number;
  photos: number;
  rating: number;
  ratingCount: number;
  language: string;
  country: string;
  duration: string;
  youtubeUrl: string;
  topCast: CastMember[];
  tags: string[];
}

export interface MovieFormData extends Omit<TMovie, 'id' | 'poster' | 'topCast'> {
  poster: File | null;
  topCast: Omit<CastMember, 'image'>[];
}