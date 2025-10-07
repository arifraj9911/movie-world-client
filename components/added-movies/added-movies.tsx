/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import jawanImg from "@/assets/images/jawan.jpg";
import vampireDiariesImg from "@/assets/images/vampire_diaries.jpg";
import { AddMovieModal } from "../shared/add-movie-modal/add-movie-modal";
import { useRouter } from "next/navigation";

interface Movie {
  id: string;
  title: string;
  posterUrl: string;
}

export function AddedMovies() {
  const router = useRouter();

  const handleAddMovie = async (movieData: {
    formData: any;
    posterFile: File | null;
    topCastFiles: File[];
  }) => {
    // Create FormData and handle API call here
    const formDataToSend = new FormData();

    // Add form data as JSON strings
    Object.keys(movieData.formData).forEach((key) => {
      if (Array.isArray(movieData.formData[key])) {
        formDataToSend.append(key, JSON.stringify(movieData.formData[key]));
      } else {
        formDataToSend.append(key, movieData.formData[key]);
      }
    });

    // Add files
    if (movieData.posterFile) {
      formDataToSend.append("poster", movieData.posterFile);
    }

    movieData.topCastFiles.forEach((file) => {
      formDataToSend.append("topCastImages", file);
    });

    // Proper way to log FormData contents
    console.log("FormData contents:");
    for (const [key, value] of formDataToSend.entries()) {
      if (value instanceof File) {
        console.log(key, value.name, value.size, value.type);
      } else {
        console.log(key, value);
      }
    }

    // Alternative way to see all data
    // console.log("Complete movieData:", movieData);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/movies/create`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!res.ok) throw new Error("Movie created failed");
      await res.json();
      // console.log("Response from server:", data);
      router.refresh();
    } catch (error) {
      console.log("failed to create movie", error);
    }
  };

  const addedMovies: Movie[] = [
    {
      id: "1",
      title: "The Vampire Diaries",
      posterUrl: vampireDiariesImg.src,
    },
    {
      id: "2",
      title: "Jawan",
      posterUrl: jawanImg.src,
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto py-20">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-16">
        <span className="text-[#1e8ae3]">MY ADDED </span>
        <span className="text-[#FBBF24]">MOVIES</span>
      </h1>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Existing Movies */}
        {addedMovies.map((movie) => (
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
              <Button className="btn-gradient text-white font-semibold px-6 rounded-[50px] mr-4">
                EDIT MOVIES
              </Button>
            </div>
          </div>
        ))}

        {/* Add Movie Card */}
        <div className=" flex items-center justify-center">
          <div className="!h-[400px] w-full max-w-sm rounded-lg border-2 border-dashed border-gray-500 flex items-center justify-center bg-[#1A1A1A]">
            <AddMovieModal onMovieAdd={handleAddMovie}>
              <Button className="btn-gradient text-white font-semibold px-6 flex items-center rounded-[50px] p-4">
                <Plus className="w-5 h-5 mr-2" />
                ADD MOVIE
              </Button>
            </AddMovieModal>
          </div>
        </div>
      </div>
    </div>
  );
}
