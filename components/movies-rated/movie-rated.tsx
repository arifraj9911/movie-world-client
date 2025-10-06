import MovieSlider from "../shared/movie-slider/movie-slider";
import { Movie } from "@/data/movies";

export default function MovieRated({ movies }: { movies: Movie[] }) {
  return (
    <div id="movie_rated" className="py-20 max-w-[1280px] mx-auto px-6">
      {/* title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl text-[#1e8ae3] uppercase font-semibold mb-2">
          <span className="text-yellow-500">movies you</span> rated
        </h2>
      </div>

      {/* slider */}
      <MovieSlider movies={movies} movieRated={true} />
    </div>
  );
}
