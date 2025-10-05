import Banner from "@/components/banner/banner";
import Navbar from "@/components/shared/navbar/navbar";

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
      </div>
    </div>
  );
}
