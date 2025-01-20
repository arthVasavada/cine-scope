import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useSelector((state: any) => state.movies);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-6">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-400">No favorite movies added yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
