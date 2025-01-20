import axios from 'axios';

const API_KEY = 'eba14987c564990d33cfa07f1832b079'; // Replace with your TMDb API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovieDetails = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      append_to_response: "videos,credits", // Includes videos (e.g., trailers) and credits (e.g., cast)
    },
  });
  return response.data;
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};

export const getFeaturedMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};

export const getRecommendedMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};

export const getGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.genres; // Return the list of genres
  } catch (error) {
    console.error("Failed to fetch genres:", error);
    throw error;
  }
};