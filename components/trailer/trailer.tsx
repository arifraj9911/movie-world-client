"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import jawanImg from "@/assets/images/jawan.jpg";

export default function Trailer() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1440px] px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              ENJOY IT <span className="text-yellow-500">MOVIES</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
              mollis suscipit maecenas amet eget.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-semibold rounded-full"
            >
              WATCH NOW
            </Button>
          </div>

          {/* Right Content - Laptop Mockup */}
          <div className="relative">
            {/* Laptop Frame */}
            <div className="relative">
              {/* Laptop Screen */}
              <div className="relative bg-gray-900 rounded-t-2xl border-4 border-gray-800 overflow-hidden shadow-2xl">
                {/* Screen Content */}
                <div className="relative aspect-video bg-gradient-to-br from-purple-900 via-slate-800 to-blue-900">
                  {/* Movie Poster/Scene */}
                  <Image
                    width={500}
                    height={500}
                    src={jawanImg.src}
                    alt="Movie Trailer"
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 w-full flex items-center justify-center bg-black/20">
                    <div className="flex w-full  justify-center items-center gap-3 bg-[#00000062]  px-6 py-3">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-5 h-5 text-black  fill-black ml-1" />
                      </div>
                      <span className="text-white font-normal text-2xl tracking-wider">
                        TRAILER
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Base */}
              <div className="relative h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
              </div>

              {/* Laptop Bottom */}
              <div className="relative mx-auto w-[90%] h-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-xl shadow-lg" />
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
