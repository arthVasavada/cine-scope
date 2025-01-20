const MovieCard = ({ movie }: { movie: any }) => (
    <div className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform font-light">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-extralight truncate">{movie.title}</h3>
        <p className="text-sm text-gray-400">{movie.release_date}</p>
        <a
          href={`/movie/${movie.id}`}
          className="block mt-4 text-center text-blue-500 hover:text-blue-400"
        >
          View Details
        </a>
      </div>
    </div>
  );
  
  export default MovieCard;
  