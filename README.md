
# CineScope - Movie Streaming Platform

CineScope is a modern movie streaming platform, featuring a responsive design and multiple carousels for trending, featured, and recommended movies. Built using **Vite**, **React**, **TypeScript**, **TailwindCSS**, and **Framer Motion** for smooth animations and elegant UI.

## Features

- Fetch and display movie data using the TMDB API.
- Search and filter movies by genre or rating.
- Movie detail pages with trailers and reviews.
- Save favorite movies to a user profile.
- Multiple carousels with smooth animations:
  - **Trending Movies**
  - **Featured Movies**
  - **Recommended Movies**
- Custom scrollbars and hidden scroll functionality for a clean UI.
- Responsive design optimized for all devices.

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS, Framer Motion
- **Build Tool**: Vite
- **API**: TMDB (The Movie Database)

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
   cd cinescope
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory and add your TMDB API key:

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

Deploy the production build by uploading the `dist` folder to your hosting platform or using services like Netlify, Vercel, or AWS.

## Project Structure

```
src/
├── api/                # API utility functions
├── assets/             # Static assets (e.g., videos, images)
├── components/         # Reusable components (e.g., carousels)
├── pages/              # Application pages (Home, MovieDetails, Favorites)
├── store/              # Redux slices for state management
├── App.tsx             # Main application entry point
└── main.tsx            # Vite entry point
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Happy streaming! 🚀
