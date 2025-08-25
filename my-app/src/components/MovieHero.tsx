"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}

const genres = ["All", "Action", "Adventure", "Other"];

const MovieHeroWithNav: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    async function fetchLatest() {
      try {
        const res = await fetch("/api/movies/latest");
        if (!res.ok) throw new Error(`Failed to fetch latest movie: ${res.statusText}`);
        const movies: Movie[] = await res.json();
        if (movies.length === 0) throw new Error("No latest movies found");
        setMovie(movies[0]);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchLatest();
  }, []);

  useEffect(() => {
    if (movie) {
      const favs = localStorage.getItem("favorites") || "[]";
      const favorites: Movie[] = JSON.parse(favs);
      setIsFavorite(favorites.some((fav) => fav.id === movie.id));
    }
  }, [movie]);

  function toggleFavorite() {
    if (!movie) return;
    const favs = localStorage.getItem("favorites") || "[]";
    let favorites: Movie[] = JSON.parse(favs);

    if (isFavorite) {
      favorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      favorites.push(movie);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  }

  function handleWatchNow() {
    alert(`Watch Now clicked for movie: ${movie?.title}`);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#111" }}>
      <nav style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "18px 40px",
        background: "#18181d",
        position: "relative",
        zIndex: 2
      }}>
        <div style={{ fontWeight: "bold", fontSize: 30, letterSpacing: 1, color: "#fff" }}>
          Moo<span style={{ color: "#FFA500" }}>vie</span>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              borderRadius: 18,
              padding: "7px 32px",
              border: "none",
              fontSize: 18,
              background: "#23232a",
              color: "#fff",
              width: 300,
              outline: "none",
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <span style={{ color: "#FFA500", fontWeight: 500, fontSize: 18, cursor: "pointer" }}>Home</span>
          <span style={{ color: "#fff", fontWeight: 500, fontSize: 18, cursor: "pointer" }}>My list</span>
          <Link href="/signin">
            <button style={{
              background: "#FFA500",
              color: "#fff",
              border: "none",
              fontWeight: 700,
              fontSize: 18,
              borderRadius: 20,
              padding: "7px 28px",
              cursor: "pointer",
              marginLeft: 12
            }}>Sign in</button>
          </Link>
        </div>
      </nav>
      <section
        style={{
          position: "relative",
          height: "70vh",
          color: "#fff",
          backgroundImage: movie ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            marginLeft: 60,
            marginBottom: 60,
            maxWidth: "38vw",
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "36px 32px",
            borderRadius: 14,
            zIndex: 1,
          }}
        >
          {loading ? (
            <div>Loading latest movie...</div>
          ) : error ? (
            <div style={{ color: "red" }}>Error: {error}</div>
          ) : movie ? (
            <>
              <h1 style={{ fontSize: "2.7rem", marginBottom: "1.5rem", fontWeight: 400 }}>
                {movie.title}
              </h1>
              <p style={{ fontSize: "1.15rem", marginBottom: "2.2rem", lineHeight: 1.4 }}>
                {movie.overview.length > 260
                  ? movie.overview.substring(0, 260) + "..."
                  : movie.overview}
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <button
                  onClick={handleWatchNow}
                  style={{
                    backgroundColor: "#FFA500",
                    border: "none",
                    padding: "12px 28px",
                    borderRadius: 6,
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: 18,
                  }}
                >
                  Watch Now
                </button>
                <button
                  onClick={toggleFavorite}
                  style={{
                    border: "2px solid #FFA500",
                    padding: "12px 28px",
                    borderRadius: 6,
                    backgroundColor: isFavorite ? "#FFA500" : "transparent",
                    color: isFavorite ? "#fff" : "#FFA500",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: 18,
                  }}
                >
                  {isFavorite ? "Remove From Favourites" : "Add To Favourites"}
                </button>
              </div>
            </>
          ) : (
            <div>No movie data available</div>
          )}
        </div>
      </section>
      <div style={{
        display: "flex",
        gap: 16,
        padding: "26px 60px 0 60px",
        background: "#18181d",
        position: "relative",
        zIndex: 2
      }}>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            style={{
              background: selectedGenre === genre ? "#FFA500" : "#23232a",
              color: selectedGenre === genre ? "#fff" : "#ddd",
              padding: "10px 34px",
              borderRadius: 18,
              border: "none",
              fontWeight: 600,
              fontSize: 18,
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieHeroWithNav;