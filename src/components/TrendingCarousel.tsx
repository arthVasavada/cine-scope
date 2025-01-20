import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const TrendingCarousel = ({ movies = [] }: { movies?: any[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"left" | "right" | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollInterval: number | null = null;

    if (isScrolling && scrollDirection && carouselRef.current) {
      scrollInterval = setInterval(() => {
        const scrollAmount = scrollDirection === "left" ? -10 : 10;
        carouselRef.current?.scrollBy({ left: scrollAmount });
      }, 16);
    }

    return () => {
      if (scrollInterval !== null) {
  clearInterval(scrollInterval);
  scrollInterval = null;
}
    };
  }, [isScrolling, scrollDirection]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, view } = event;
    const width = view?.innerWidth || 0;
    const proximity = 100;

    if (clientX < proximity) {
      setScrollDirection("left");
      setIsScrolling(true);
    } else if (clientX > width - proximity) {
      setScrollDirection("right");
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
      setScrollDirection(null);
    }
  };

  return (
    <div
      className="relative bg-gray-700"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsScrolling(false)}
    >
      <h2 className="text-xl font-light text-white mb-4 px-6">Trending Now</h2>
      <div
        ref={carouselRef}
        className="flex space-x-4 px-6 overflow-x-auto scrollbar-none pt-2 pb-10"
      >
        {movies.map((movie) => (
          <motion.div
            key={movie.id}
            className="w-48 flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 30 }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <h3 className="text-white text-sm p-4 truncate">{movie.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default TrendingCarousel;