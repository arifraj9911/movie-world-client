"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import MovieDetails from "@/components/movie-details/movie-details";
import { getSingleMovie } from "@/utils/get-movies";

import { useParams } from "next/navigation";

import { useEffect, useState } from "react";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getSingleMovie(String(id)).then((result) => setMovie(result));
    }
  }, [id]);

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
