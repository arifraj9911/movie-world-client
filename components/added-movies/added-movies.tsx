"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import jawanImg from "@/assets/images/jawan.jpg";
import pathanImg from "@/assets/images/pathan2.jpg";

interface Movie {
  id: string;
  title: string;
  posterUrl: string;
}

export function AddedMovies() {
  const movies: Movie[] = [
    {
      id: "1",
      title: "The Vampire Diaries",
      posterUrl: jawanImg.src,
    },
    {
      id: "2",
      title: "Gen V",
      posterUrl: pathanImg.src,
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto py-20">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-16">
        <span className="text-[#3B82F6]">MY ADDED </span>
        <span className="text-[#FBBF24]">MOVIES</span>
      </h1>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Existing Movies */}
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative group h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src={movie.posterUrl || "/placeholder.svg"}
              alt={movie.title}
              fill
              className="object-cover"
            />
            {/* Edit Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-start justify-end pt-6 ">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 rounded-[50px] mr-4">
                EDIT MOVIES
              </Button>
            </div>
          </div>
        ))}

        {/* Add Movie Card */}
        <div className=" flex items-center justify-center">
          <div className="!h-[400px] w-full max-w-sm rounded-lg border-2 border-dashed border-gray-500 flex items-center justify-center bg-[#1A1A1A]">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 flex items-center rounded-[50px] p-4">
              <Plus className="w-5 h-5 mr-2" />
              ADD MOVIE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
