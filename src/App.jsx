import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from './Search.svg';
import './App.css';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function App() {
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState([]);

  // Fetch movies
  const fetchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  };

  // Trigger search when the user clicks the button
  const handleSearch = () => {
    if (searchMovie.trim()) {
      fetchMovies(searchMovie);
    }
  };

  useEffect(() => {
    fetchMovies( searchMovie)
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          placeholder="Search for a movie..."
        />
        <img src={SearchIcon} alt="search" onClick={handleSearch} />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie1={movie} />
          ))}
        </div>
      ) : (
        <h1>No movie Found</h1>
      )}
    </div>
  );
}

export default App;
