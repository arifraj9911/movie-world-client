"use client";

import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Star, Play, Plus } from "lucide-react";
import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Movie } from "@/data/movies";
import { useRouter } from "next/navigation";

interface MovieSliderProps {
  movies: Movie[];
  movieRated: boolean;
}

const MovieSlider: FC<MovieSliderProps> = ({ movies, movieRated }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter()

  return (
    <div className="relative w-full">
      {/* Custom Navigation buttons */}
      <button
        className="swiper-button-prev !h-10 !w-10 absolute !-left-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-md bg-white/90 shadow-md transition-all hover:bg-white hover:scale-110 p-3"
        aria-label="Previous slide"
      >
        <SlArrowLeft size={10} className="text-blue-500" />
      </button>

      <button
        className="swiper-button-next !h-10 !w-10 absolute !-right-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-md bg-white/90 shadow-md transition-all hover:bg-white hover:scale-110 p-3"
        aria-label="Next slide"
      >
        <SlArrowRight size={10} className="text-blue-500" />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{
          delay: movieRated ? 3000 : 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        loop={true}
        initialSlide={Math.floor(movies.length / 2)}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={movie?._id}>
            <div
              className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition
                ${
                  movieRated && activeIndex === index
                    ? "border-2 border-blue-500"
                    : "bg-[#111]"
                }
              `}
            >
              <Image
                width={200}
                height={200}
                src={movie?.poster}
                alt={movie?.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-3 text-white">
                <h3 className="font-semibold text-[20px]">{movie?.title.slice(0,15)}..</h3>
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
                  <button onClick={()=>router.push(`/${movie?._id}`)} className="flex items-center justify-start gap-2 text-gray-300 text-base py-2 rounded-md cursor-pointer hover:bg-white/10 px-2">
                    <Play className="w-5 h-5 border rounded-full p-1" /> TRAILER
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
