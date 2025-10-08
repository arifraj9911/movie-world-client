import { BannerSlider } from "./banner-slider/banner-slider";
import { Movie } from "@/data/movies";

export default function Banner({ movies }: { movies: Movie[] }) {
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
    <div className="max-w-[1280px] mx-auto md:py-20 py-10 px-4 md:px-0 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* banner text */}
      <div className="flex-1 max-w-lg -ml-12 md:ml-0">
        <h1 className="uppercase text-4xl md:text-7xl leading-[50px] md:leading-[80px] font-bold text-[#1e8ae3]">
          Best way of <br /> entertainment
        </h1>

        <h3 className="md:text-3xl uppercase font-semibold mt-4 md:mt-8 flex flex-col gap-2">
          <span className="text-white">movies as you demand usd</span>
          <span className="text-yellow-500">10/month</span>
        </h3>
      </div>

      {/* banner image */}
      <div className="w-full md:w-1/2">
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
