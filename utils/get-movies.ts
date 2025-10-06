import { Movie } from "@/data/movies";

export async function getMovies(): Promise<Movie[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/movies/get`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await res.json();
    return data.data as Movie[];
  } catch (err) {
    console.error("Error fetching movies:", err);
    return [];
  }
}

export async function getSingleMovie(id: string): Promise<Movie[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/movies/get/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch single movie");
    }

    const data = await res.json();
    return data.data as Movie[];
  } catch (err) {
    console.error("Error fetching movie:", err);
    return [];
  }
}
