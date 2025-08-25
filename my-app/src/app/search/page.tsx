"use client";

import React from "react";
import { useSearch } from "../hooks/useSearch";
import { MovieCard } from "@/components/MovieCard";


export default function SearchPage() {
  const { query, setQuery, results, handleSearch } = useSearch();

  return (
    <section style={{ padding: 20 }}>
      <form onSubmit={handleSearch}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies or series..."
          style={{ padding: 10, width: "300px" }}
        />
        <button type="submit" style={{ marginLeft: 10, padding: 10 }}>
          Search
        </button>
      </form>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: 20 }}>
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
