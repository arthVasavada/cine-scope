
# CineScope - Movie Recommendation App

**CineScope** is a modern movie recommendation app that demonstrates API consumption, routing, and state management. Built with **Vite**, **React**, **TypeScript**, **TailwindCSS**, and **Framer Motion**, the app allows users to explore trending movies, view detailed pages with trailers and reviews, and save favorites for future reference.

## Features

### Completed
1. **Fetch and display movie data**:
   - Data is fetched from the TMDb API.
   - Carousels for trending, featured, and recommended movies.
2. **Movie detail pages with trailers and reviews**:
   - Each movie has a dedicated page showing details, trailers, and reviews.
3. **Save favorite movies to a user profile**:
   - Favorites functionality allows users to save movies locally.
4. **Create a carousel of trending movies**:
   - Animated carousels for trending, featured, and recommended movies.

### To Be Implemented
1. **Search and filter functionality**:
   - Add a search bar to find movies by title.
   - Enable filtering by genre or rating.

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS, Framer Motion
- **Build Tool**: Vite
- **API**: TMDb (The Movie Database)

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd cine-scope
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory and add your TMDb API key:

```
VITE_TMDB_API_KEY=your_tmdb_api_key
```

### Running the Application

Start the development server:
```bash
npm run dev
```

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Deployment

Deploy the production build by uploading the `dist` folder to your hosting platform or using Firebase Hosting.

## Project Structure

```
src/
├── api/                # API utility functions
├── assets/             # Static assets (e.g., videos, images)
├── components/         # Reusable components (e.g., carousels, modals)
├── pages/              # Application pages (Home, MovieDetails, Favorites)
├── store/              # Redux slices for state management
├── App.tsx             # Main application entry point
└── main.tsx            # Vite entry point
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Happy exploring! 🚀
