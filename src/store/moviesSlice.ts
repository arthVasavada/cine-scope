import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTrendingMovies, getGenres } from '../api/tmdb';

export const fetchTrendingMovies = createAsyncThunk('movies/fetchTrending', getTrendingMovies);
export const fetchGenres = createAsyncThunk('movies/fetchGenres', getGenres);

interface MoviesState {
  trending: any[];
  genres: any[];
  favorites: any[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MoviesState = {
  trending: [],
  genres: [],
  favorites: [],
  status: 'idle',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((movie) => movie.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.trending = action.payload.results;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload.genres;
      });
  },
});

export const { addFavorite, removeFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;
