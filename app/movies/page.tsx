import AllMovies from "@/components/all-movies/all-movies";
import { getMovies } from "@/utils/get-movies";

export default async function MoviesPage() {
  const movies = await getMovies();
  return <AllMovies movies={movies} />;
}
