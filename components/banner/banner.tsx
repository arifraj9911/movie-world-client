// import Image from "next/image";
import jawanImg from "@/assets/images/jawan.jpg";
import pathanImg from "@/assets/images/pathan2.jpg";
import { BannerSlider } from "./banner-slider/banner-slider";
import { movies } from "@/data/movies";

export default function Banner() {
  // const featuredMovies = [
  //   {
  //     id: "1",
  //     title: "ACTION HERO",
  //     posterUrl: jawanImg.src,
  //   },
  //   {
  //     id: "2",
  //     title: "DARK THRILLER",
  //     posterUrl: pathanImg.src,
  //   },
  // ];
  return (
    <div className="max-w-[1280px] mx-auto py-20  flex flex-col md:flex-row items-center justify-between gap-10">
      {/* banner text */}
      <div className="flex-1 max-w-lg ">
        <h1 className="uppercase text-7xl leading-[80px] font-bold text-blue-500">
          Best way of <br /> entertainment
        </h1>

        <h3 className="text-3xl uppercase font-semibold mt-8 flex flex-col gap-2">
          <span className="text-white">movies as you demand usd</span>
          <span className="text-yellow-500">10/month</span>
        </h3>
      </div>

      {/* banner image */}
      <div className=" w-1/2">
        {/* <Image
          width={400}
          height={400}
          src={bannerImg}
          alt="banner_jawan"
          className="rounded-lg"
        /> */}

        <BannerSlider movies={movies} />
      </div>
    </div>
  );
}
