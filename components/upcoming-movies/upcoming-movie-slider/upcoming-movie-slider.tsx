// components/UpcomingMovieSlider.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type SwiperClass from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Movie } from "@/data/movies";
import { useRouter } from "next/navigation";

// interface Movie {
//   id: string;
//   title: string;
//   posterUrl: string;
// }

interface UpcomingMovieSliderProps {
  movies: Movie[];
}

export default function UpcomingMovieSlider({
  movies,
}: UpcomingMovieSliderProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const router = useRouter();

  const middleIndex = Math.max(0, Math.floor(movies.length / 2));

  useEffect(() => {
    if (!swiperRef.current || movies.length === 0) return;

    const rafId = requestAnimationFrame(() => {
      swiperRef.current?.slideToLoop(middleIndex, 0, false);
      setActiveIndex(middleIndex);
    });

    return () => cancelAnimationFrame(rafId);
  }, [movies.length, middleIndex]);

  return (
    <div className="relative w-full py-6">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        centeredSlides={true}
        autoplay={true}
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        speed={600}
        navigation={false}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full h-[450px]"
      >
        {movies.map((movie, index) => (
          <SwiperSlide
            onClick={() => router.push(`/${movie?.id}`)}
            key={movie.id}
            className="flex justify-center mt-10 cursor-pointer"
          >
            <div
              className={`relative transition-transform duration-300 ease-in-out
                ${activeIndex === index ? "scale-110 z-30" : "scale-90 z-10"}
              `}
              style={{ willChange: "transform" }}
            >
              <div
                className={`overflow-hidden ${
                  activeIndex === index
                    ? "border-4 border-blue-500 rounded-2xl shadow-2xl"
                    : "rounded-xl"
                }`}
              >
                <Image
                  src={movie?.poster}
                  alt={movie?.title}
                  width={250}
                  height={350}
                  className={`w-[200px] md:w-full h-[200px] md:h-[350px] object-cover`}
                  priority={activeIndex === index}
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-[#0000007d] bg-gradient-to-t from-black/80 to-transparent text-center py-3 rounded-b-2xl">
                <h3 className="text-white text-sm md:text-lg font-semibold">
                  {movie?.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
