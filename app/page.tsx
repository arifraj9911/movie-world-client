import { AddedMovies } from "@/components/added-movies/added-movies";
import Banner from "@/components/banner/banner";
import MovieRated from "@/components/movies-rated/movie-rated";
import Trailer from "@/components/trailer/trailer";
import UpcomingMovies from "@/components/upcoming-movies/upcoming-movies";
import WatchList from "@/components/watch-list/watch-list";
import { getMovies } from "@/utils/get-movies";

export default async function Home() {
  const movies = await getMovies();

  return (
    <div>
      {/* banner */}
      <Banner movies={movies} />

      {/* upcoming movies */}
      <UpcomingMovies movies={movies} />

      {/* Trailer */}
      <Trailer />

      {/* Movie Rated */}
      <MovieRated movies={movies}/>

      {/* Watch List */}
      <WatchList movies={movies}/>

      {/* added movies */}
      <AddedMovies />
    </div>
  );
}
