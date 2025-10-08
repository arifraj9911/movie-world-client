"use client";

import { Check, Play, Plus, SquarePen, Star, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DeleteConfirmModal } from "../shared/delete-modal/delete-modal";
import { Movie } from "@/data/movies";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import UpdateModal from "../shared/update-modal/update-modal";
import { useState } from "react";
import { toast } from "sonner";

export default function AllMovies({ movies }: { movies: Movie[] }) {
  const router = useRouter();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleEditClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/movies/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error("Delete failed");
      await res.json();
      toast.success("Delete movie from the database");
      router.refresh();
    } catch (error) {
      console.log("Failed to delete movie!", error);
    }
  };

  const handleWatchStatusUpdate = async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/movies/watch-status/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (!res.ok) throw Error("Failed to updated!");

      await res.json();
      // console.log("watch status updated", data);
      toast.success("Added movie to watch list");
      router.refresh();
    } catch (error) {
      console.log("Failed to fetch status", error);
    }
  };

  return (
    <div className="max-w-[1280px] mx-auto py-10">
      {/* title */}
      <div className="text-start mb-16">
        <h2 className="text-4xl text-[#1e8ae3] uppercase font-semibold mb-2">
          <span className="text-yellow-500">All</span> Movies
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {movies?.map((movie) => (
          <div key={movie?._id}>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <Image
                width={200}
                height={200}
                src={movie?.poster}
                alt={movie?.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-3 text-white">
                <h3 className="font-semibold text-[20px]">
                  {movie?.title.slice(0, 15)}..
                </h3>
                <div className="flex items-center text-sm mt-3">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>{movie?.rating}</span>
                  <span className="ml-1 text-gray-400">
                    ({movie?.ratingCount})
                  </span>
                </div>

                <div className="mt-3 flex flex-col gap-2">
                  <button
                    onClick={() => handleWatchStatusUpdate(movie?._id)}
                    className="flex items-center justify-center font-semibold gap-2 btn-gradient text-white text-sm py-2 rounded-[50px] hover:opacity-90 cursor-pointer"
                  >
                    {movie?.isWatched === true ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}{" "}
                    WATCH LIST
                  </button>
                  <div className="flex items-center justify-between gap-6">
                    <Link
                      href={`/${movie?._id}`}
                      className="flex items-center justify-start gap-2 text-gray-300 text-base py-2 rounded-md cursor-pointer hover:bg-white/10 px-2 flex-1"
                    >
                      <Play className="w-5 h-5 border rounded-full p-1" />
                      TRAILER
                    </Link>
                    <div className="flex items-center gap-2">
                      <Dialog
                        open={dialogOpen && selectedMovie?._id === movie._id}
                        onOpenChange={setDialogOpen}
                      >
                        <DialogTrigger asChild>
                          <SquarePen
                            onClick={() => handleEditClick(movie)}
                            size={20}
                            className="text-blue-500 hover:text-blue-700 cursor-pointer"
                          />
                        </DialogTrigger>
                        <DialogContent className="p-0 border-0 bg-transparent !max-w-2xl">
                          <DialogTitle className="sr-only">
                            Update Movie Details
                          </DialogTitle>
                          {selectedMovie && (
                            <UpdateModal
                              id={movie?._id}
                              movie={selectedMovie}
                              onClose={() => setDialogOpen(false)}
                            />
                          )}
                        </DialogContent>
                      </Dialog>

                      <DeleteConfirmModal
                        onDelete={() => handleDelete(movie?._id)}
                      >
                        <Trash2
                          size={20}
                          className="text-red-500 hover:text-red-700 cursor-pointer"
                        />
                      </DeleteConfirmModal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
