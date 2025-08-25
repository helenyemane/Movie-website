"use client";

import React from "react";
import Image from "next/image";
import { Movie, useFavourites } from "@/app/hooks/usefavourites";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const { favourites, addFavourite, removeFavourite } = useFavourites();

  const isFav = favourites.some((m) => m.id === movie.id);

  const toggleFav = () => {
    if (isFav) removeFavourite(movie.id);
    else addFavourite(movie);
  };

  return (
    <div className="flex flex-col items-center w-[300px] min-w-[400px] mx-3 my-2">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title || movie.name || ""}
        width={300}
        height={450}
        className="rounded-lg shadow-md mb-2"
        draggable={false}
      />
      <h3 className="text-center text-base font-semibold leading-tight line-clamp-2 mb-1">
        {movie.title || movie.name}
      </h3>
      <button
        onClick={toggleFav}
        className={`w-full py-1 px-2 mt-auto rounded-full text-xs font-semibold transition-colors
          ${
            isFav
              ? "bg-yellow-400 text-black hover:bg-yellow-500"
              : "bg-[#23222b] text-white hover:bg-yellow-400 hover:text-black border border-[#333]"
          }
        `}
      >
        {isFav ? "Remove from Favourites" : "Add to Favourites"}
      </button>
    </div>
  );
}
