"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Movie } from "@/data/movies";
import { IoIosStarOutline } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";

export default function MovieDetails({ movie }: { movie: Movie }) {
  return (
    <div className="max-w-[1280px] mx-auto py-16 px-4 lg:px-0">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div>
          {/* Poster */}
          <div className="relative w-full lg:w-[400px] h-[350px] md:h-[450px] rounded-lg overflow-hidden">
            <Image
              src={movie?.poster}
              alt={movie?.title}
              fill
              className="object-cover"
            />
          </div>
          {/* episode, videos, photos */}
          <div className="flex flex-col  gap-2 text-gray-300 text-xl uppercase mt-4 ">
            <p>
              Episodes{" "}
              <span className="font-normal text-yellow-500">
                {movie?.episodes}{" "}
              </span>
            </p>
            <p>
              Videos{" "}
              <span className="font-normal text-yellow-500">
                {" "}
                {movie?.videos}
              </span>
            </p>
            <p>
              Photos{" "}
              <span className="font-normal text-yellow-500">
                {movie?.photos}{" "}
              </span>
            </p>
          </div>
        </div>

        {/* Trailer + Info */}
        <div className="flex-1 space-y-5">
          <div className="relative w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full rounded-lg"
              src={movie?.youtubeUrl}
              title={movie?.title}
              allowFullScreen
            ></iframe>
            <div className="absolute top-3 left-3 bg-black/60 text-white px-4 py-1 text-sm rounded-full font-semibold tracking-wide">
              TRAILER
            </div>
          </div>

          <div className="space-y-5 border-l-2 pl-12 -ml-12 border-[#bed5f9d3]">
            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-lg">
              {movie?.description}
            </p>

            <div className=" space-y-2 text-sm">
              <p>
                <span className="font-semibold text-[#3B82F6] ">Creators:</span>{" "}
                {movie?.creators}
              </p>
              <p>
                <span className="font-semibold text-[#3B82F6]">Stars:</span>{" "}
                {movie?.stars.join(", ")}
              </p>
            </div>

            <div className="flex  items-center gap-2 ">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-base font-extralight">
                {movie?.rating}({movie?.ratingCount})
              </span>
              <button className="flex gap-2 items-center hover:bg-[#282828] cursor-pointer">
                <IoIosStarOutline className="w-5 h-5 text-blue-500" /> Rate Now
              </button>
              {/* <Star className="w-5 h-5 fill-blue-200 text-blue-300" />  */}
            </div>
          </div>
        </div>
      </div>

      {/* Top Cast Section */}
      <div className="mt-16">
        <div className="flex justify-start items-center mb-12 gap-2">
          <h2 className="text-3xl font-bold">
            <span className="text-white">TOP</span>{" "}
            <span className="text-[#1e8ae3]">CAST</span>
          </h2>
          <button className="!h-8 !w-8 z-10 flex items-center justify-center rounded-md bg-white/90 shadow-md transition-all hover:bg-white hover:scale-110 p-2">
            <SlArrowRight size={14} className="text-blue-500 font-semibold" />
          </button>
        </div>

        {/* Cast Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movie?.topCast?.map((actor, idx) => (
            <div
              key={idx}
              className="bg-[#121317] rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 text-left shadow-md hover:shadow-lg hover:bg-[#1a1c22] transition"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={actor?.image || "/placeholder.png"} // fallback placeholder
                  alt={actor?.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold text-white">{actor?.name}</h3>
                <p className="text-gray-400 text-sm">{actor?.role}</p>
                <p className="text-gray-500 text-xs mt-1">
                  {actor?.episode} episodes • {actor?.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
