import { getMovies } from "@/utils/get-movies";
import { Play, Plus, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function AllMovies() {
  const movies = await getMovies();
  return (
    <div className=" max-w-[1280px] mx-auto py-10">
      {/* title */}
      <div className="text-start mb-16">
        <h2 className="text-4xl text-[#1e8ae3] uppercase font-semibold mb-2">
          <span className="text-yellow-500">All</span> Movies
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {movies.map((movie) => (
          <div key={movie?.id}>
            <div
              className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition              `}
            >
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
                  <button className="flex items-center justify-center font-semibold gap-2 btn-gradient text-white text-sm py-2 rounded-[50px] hover:opacity-90">
                    <Plus className="w-5 h-5" /> WATCH LIST
                  </button>
                  <Link
                    //   onClick={() => router.push(`/${movie?.id}`)}
                    href={`/${movie?._id}`}
                    className="flex items-center justify-start gap-2 text-gray-300 text-base py-2 rounded-md cursor-pointer hover:bg-white/10 px-2"
                  >
                    <Play className="w-5 h-5 border rounded-full p-1" /> TRAILER
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
