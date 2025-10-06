import UpcomingMovieSlider from "./upcoming-movie-slider/upcoming-movie-slider";
import { movies } from "@/data/movies";

export default function UpcomingMovies() {

  return (
    <div className="py-20">
      {/* title */}
      <div className="text-center mb-6">
        <h2 className="text-4xl text-[#1e8ae3] uppercase font-semibold mb-2">
          Upcoming <span className="text-yellow-500">movies</span>
        </h2>
        <p className="text-white">We constantly offers new movies</p>
      </div>

      {/* upcoming movie slider */}
      <UpcomingMovieSlider movies={movies} />
    </div>
  );
}
