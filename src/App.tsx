import { useEffect, useState } from 'react';
import './App.css';
import { getMovies } from "./services/movieService";
import { IMovie } from './models/IMovie';

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (fetched) return;

    const getData = async () => {
      const movies = await getMovies("star");
      setMovies(movies);
      setFetched(true);
    };

    getData();
  });

  return <>Movies: {movies.length}</>;
}

export default App;
