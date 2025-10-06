import UpcomingMovieSlider from "./upcoming-movie-slider/upcoming-movie-slider";
import jawanImg from "@/assets/images/jawan.jpg";
import pathanImg from "@/assets/images/pathan2.jpg";
import { movies } from "@/data/movies";

export default function UpcomingMovies() {
  // const movies = [
  //   { id: "1", title: "Fortnite", posterUrl: jawanImg.src },
  //   { id: "2", title: "Gulidwars 2", posterUrl: pathanImg.src },
  //   { id: "3", title: "Rocket League", posterUrl: jawanImg.src },
  //   { id: "4", title: "The Vampire Diaries", posterUrl: pathanImg.src },
  //   { id: "5", title: "Gen V", posterUrl: jawanImg.src },
  //   { id: "6", title: "The Vampire Diaries", posterUrl: pathanImg.src },
  //   { id: "7", title: "Fortnite", posterUrl: jawanImg.src },
  //   { id: "8", title: "Gulidwars 2", posterUrl: pathanImg.src },
  //   { id: "9", title: "Rocket League", posterUrl: jawanImg.src },
  //   { id: "10", title: "The Vampire Diaries", posterUrl: pathanImg.src },
  //   { id: "11", title: "Gen V", posterUrl: jawanImg.src },
  //   { id: "12", title: "The Vampire Diaries", posterUrl: pathanImg.src },
  // ];
  return (
    <div className="py-20">
      {/* title */}
      <div className="text-center mb-6">
        <h2 className="text-4xl text-blue-500 uppercase font-semibold mb-2">
          Upcoming <span className="text-yellow-500">movies</span>
        </h2>
        <p className="text-white">We constantly offers new movies</p>
      </div>

      {/* upcoming movie slider */}
      <UpcomingMovieSlider movies={movies} />
    </div>
  );
}
