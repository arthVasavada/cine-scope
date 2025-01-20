import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails} from "../api/tmdb";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(Number(id)).then(setMovie);
  }, [id]);

  if (!movie) return <div className="text-gray-100">Loading...</div>;

  return (
    <div
      className="bg-gray-900 min-h-screen text-gray-100 p-6"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-75 p-6 rounded-lg">
        <button
          onClick={() => navigate(-1)}
          className="text-white bg-blue-600 px-4 py-2 rounded-lg mb-4 hover:bg-blue-500"
        >
          Back
        </button>
        <div className="flex flex-col lg:flex-row gap-6">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full lg:w-1/3 rounded-lg shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <p className="text-gray-400 mb-6">{movie.overview}</p>
            <p className="text-sm text-gray-500">
              Release Date: <span className="text-gray-300">{movie.release_date}</span>
            </p>
            {movie.genres && (
              <p className="text-sm text-gray-500">
                Genres:{" "}
                <span className="text-gray-300">
                  {movie.genres.map((genre: any) => genre.name).join(", ")}
                </span>
              </p>
            )}
            {movie.videos && movie.videos.results.length > 0 && (
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Trailer</h2>
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                  title="Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
