import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Grid from "./components/Grid";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
      .then(response => response.json())
      .catch(err => console.error(err))
      .then(movies => {
        setMovies(movies.results);
      })
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="App">
      <div className="grid">
        <Grid movies={movies} />
      </div>
    </div>
  );
}

export default App;
