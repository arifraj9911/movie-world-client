"use client";

import MovieDetails from "@/components/movie-details/movie-details";
import { movies } from "@/data/movies";
import { useParams } from "next/navigation";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);
  console.log("movies details", movie);

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-400 text-xl">
        Movie not found!
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#0B0C10] text-white">
      <MovieDetails movie={movie} />
    </div>
  );
}
