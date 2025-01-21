import { useEffect, useState } from "react";
import TrendingCarousel from "../components/TrendingCarousel";
import FeaturedCarousel from "../components/FeaturedCarousel";
import RecommendedCarousel from "../components/RecommendedCarousel";
import { getTrendingMovies, getFeaturedMovies, getRecommendedMovies } from "../api/tmdb"; // Example API calls

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState<any[]>([]);
  const [featuredMovies, setFeaturedMovies] = useState<any[]>([]);
  const [recommendedMovies, setRecommendedMovies] = useState<any[]>([]);

  useEffect(() => {
    // Fetch trending movies
    getTrendingMovies().then((data) => setTrendingMovies(data.results || []));

    // Fetch featured movies
    getFeaturedMovies().then((data) => setFeaturedMovies(data.results || []));

    // Fetch recommended movies
    getRecommendedMovies().then((data) => setRecommendedMovies(data.results || []));
  }, []);

  return (
    <div className="bg-slate-950 text-gray-100">
      <section className="h-screen flex flex-col items-center justify-center text-center relative">
        <video className="absolute top-0 left-0 w-full h-full object-cover filter brightness-50" src="/assets/bg_cinescope.mp4" autoPlay loop muted playsInline></video>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">Discover Your Next Favorite Movie</h1>
        <p className="text-gray-300 mb-6 relative z-10">Stream anytime, anywhere.</p>
        <button 
          className="border-2 border-amber-500 text-amber-500 px-6 py-3 rounded-lg text-lg hover:bg-amber-500 hover:text-white transition shadow-md relative z-10"
          onClick={() => {
            document.querySelector(".carousels")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Browse Now
        </button>
      </section>

      <section className="carousels p-10 space-y-10">   
        <TrendingCarousel movies={trendingMovies} />
        <FeaturedCarousel movies={featuredMovies} />
        <RecommendedCarousel movies={recommendedMovies} />
      </section>
    </div>
  );
};

export default Home;
