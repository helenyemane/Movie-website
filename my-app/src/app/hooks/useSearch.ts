import { useState } from "react";
import { searchTmdb } from "../utils/fetchTmdb";

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}

export function useSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    const data = await searchTmdb(query);
    setResults(data);
  }

  return { query, setQuery, results, handleSearch };
}
