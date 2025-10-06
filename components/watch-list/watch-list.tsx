import { Movie } from "@/data/movies";
import MovieSlider from "../shared/movie-slider/movie-slider";

export default function WatchList({ movies }: { movies: Movie[] }) {
  return (
    <div id="watch-list" className="py-20 max-w-[1280px] mx-auto px-6">
      {/* title */}
      <div className="text-left mb-16">
        <h2 className="text-4xl text-white uppercase font-semibold mb-2">
          your <span className="text-yellow-500">watch-list</span>
        </h2>
      </div>

      {/* slider */}
      <MovieSlider movies={movies} movieRated={false} />
    </div>
  );
}
