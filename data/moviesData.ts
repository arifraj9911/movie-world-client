import jawanImg from "@/assets/images/jawan.jpg";
import pathanImg from "@/assets/images/pathan2.jpg";

export interface Movie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  reviews: number;
}

export const moviesData: Movie[] = [
  {
    id: 1,
    title: "Joker",
    poster: jawanImg.src,
    rating: 8,
    reviews: 407,
  },
  {
    id: 2,
    title: "Jimmy",
    poster: pathanImg.src,
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 3,
    title: "No Hard Feelings",
    poster: jawanImg.src,
    rating: 8,
    reviews: 320,
  },
  {
    id: 4,
    title: "Shelter",
    poster: pathanImg.src,
    rating: 8,
    reviews: 407,
  },
  {
    id: 5,
    title: "Mission Impossible",
    poster: jawanImg.src,
    rating: 8,
    reviews: 407,
  },
  {
    id: 6,
    title: "Shelter",
    poster: pathanImg.src,
    rating: 8,
    reviews: 407,
  },
  {
    id: 7,
    title: "Mission Impossible",
    poster: jawanImg.src,
    rating: 8,
    reviews: 407,
  },
  {
    id: 8,
    title: "Shelter",
    poster: pathanImg.src,
    rating: 8,
    reviews: 407,
  },
  {
    id: 9,
    title: "Mission Impossible",
    poster: jawanImg.src,
    rating: 8,
    reviews: 407,
  },
];
