import { AddedMovies } from "@/components/added-movies/added-movies";
import Banner from "@/components/banner/banner";
import MovieRated from "@/components/movies-rated/movie-rated";
import Trailer from "@/components/trailer/trailer";
import UpcomingMovies from "@/components/upcoming-movies/upcoming-movies";
import WatchList from "@/components/watch-list/watch-list";

export default function Home() {
  return (
    <div>
      {/* banner */}
      <Banner />

      {/* upcoming movies */}
      <UpcomingMovies />

      {/* Trailer */}
      <Trailer />

      {/* Movie Rated */}
      <MovieRated />

      {/* Watch List */}
      <WatchList />

      {/* added movies */}
      <AddedMovies />
    </div>
  );
}
