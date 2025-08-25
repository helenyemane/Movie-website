import { useEffect, useState } from "react";
import { fetchTmdb } from "../utils/fetchTmdb";

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}

export function useLatestMovies() {
  const [latestMovies, setLatestMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatest = async () => {
      const movies = await fetchTmdb("/movie/now_playing");
      setLatestMovies(movies);
      setLoading(false);
    };

    fetchLatest();
  }, []);

  return { latestMovies, loading };
}