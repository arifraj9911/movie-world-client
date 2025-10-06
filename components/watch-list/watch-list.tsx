import { moviesData } from "@/data/moviesData";
import MovieSlider from "../shared/movie-slider/movie-slider";

export default function WatchList() {
  return (
    <div className="py-20 max-w-[1280px] mx-auto px-6">
      {/* title */}
      <div className="text-left mb-16">
        <h2 className="text-4xl text-white uppercase font-semibold mb-2">
          your <span className="text-yellow-500">watch-list</span> 
        </h2>
      </div>

      {/* slider */}
      <MovieSlider movies={moviesData} movieRated={false} />
    </div>
  );
}
