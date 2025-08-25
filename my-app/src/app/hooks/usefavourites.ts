"use client";

import { useState, useEffect } from "react";

export interface Movie {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  overview?: string;
  release_date?: string;
  vote_average?: number;
}

const FAVORITES_KEY = "favourites";

export function useFavourites() {
  const [favourites, setFavourites] = useState<Movie[]>([]);

  useEffect(() => {
    const fav = localStorage.getItem(FAVORITES_KEY);
    if (fav) setFavourites(JSON.parse(fav));
  }, []);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favourites));
  }, [favourites]);

  function addFavourite(movie: Movie) {
    if (!favourites.find((m) => m.id === movie.id)) {
      setFavourites([...favourites, movie]);
    }
  }

  function removeFavourite(id: number) {
    setFavourites(favourites.filter((m) => m.id !== id));
  }

  return { favourites, addFavourite, removeFavourite };
}
