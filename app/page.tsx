import Banner from "@/components/banner/banner";
import Navbar from "@/components/shared/navbar/navbar";
import Trailer from "@/components/trailer/trailer";
import UpcomingMovies from "@/components/upcoming-movies/upcoming-movies";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* navbar start */}
      <div>
        <Navbar />
      </div>

      {/* Main Body */}
      <div>
        {/* banner */}
        <Banner />

        {/* upcoming movies */}
        <UpcomingMovies />

        {/* Trailer */}
        <Trailer />
      </div>
    </div>
  );
}
