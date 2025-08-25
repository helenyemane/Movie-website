"use client";

import React from "react";
import { useFavourites } from "@/app/hooks/usefavourites";
import { MovieCard } from "../components/MovieCard";

export default function FavouritesPage() {
  const { favourites } = useFavourites();

  return (
    <section style={{ padding: 20 }}>
      <h1>Your Favourites</h1>
      {favourites.length === 0 && <p>No favourites added yet.</p>}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {favourites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
