"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  releaseDate?: string;
}

interface BannerSliderProps {
  movies: Movie[];
}

export function BannerSlider({ movies }: BannerSliderProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <div className="relative w-full">
      {/* Slider */}
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ align: "start", loop: true }}
        plugins={[plugin.current]}
      >
        <CarouselContent>
          {movies.map((movie) => (
            <CarouselItem key={movie.id}>
              <div className="relative w-3/5 mx-auto h-[400px] md:h-[600px] overflow-hidden rounded-lg bg-black">
                {/* Poster */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${movie.posterUrl})` }}
                >
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-28 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 shadow-lg transition-all hover:bg-white hover:scale-110 md:h-14 md:w-14"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800 md:h-7 md:w-7" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-28 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 shadow-lg transition-all hover:bg-white hover:scale-110 md:h-14 md:w-14"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-800 md:h-7 md:w-7" />
        </button>

        {/* WATCH NOW button (fixed at bottom center) */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
          <Button
            size="lg"
            className="bg-blue-600 px-12 py-6 text-base font-semibold uppercase tracking-wide hover:bg-blue-700  rounded-[50px]"
          >
            Watch Now
          </Button>
        </div>
      </Carousel>
    </div>
  );
}
