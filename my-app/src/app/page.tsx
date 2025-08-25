import { fetchTmdb } from "./utils/fetchTmdb";
import { MovieCard } from "@/components/MovieCard";
import { Movie } from "./utils/type";
import MovieHero from "@/components/MovieHero";
import Footer from "./footer/footer";

export const revalidate = 3600;

async function fetchMovies() {
  const latestMovies = await fetchTmdb("/movie/now_playing");
  const popularMovies = await fetchTmdb("/movie/popular");
  const actionMovies = await fetchTmdb("/discover/movie", {
    with_genres: "28",
    sort_by: "popularity.desc",
  });
  const arabicMovies = await fetchTmdb("/discover/movie", {
    language: "ar",
    region: "SA",
  });
  return { latestMovies, popularMovies, actionMovies, arabicMovies };
}

export default async function HomePage() {
  const { latestMovies, popularMovies, actionMovies, arabicMovies } =
    await fetchMovies();

  return (
    <main style={{ padding: 20 }}>
      <MovieHero />
      <h1>Latest Movies</h1>
      <div style={{ display: "flex", overflowX: "auto" }}>
        {latestMovies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <h1>Most Viewed</h1>
      <div style={{ display: "flex", overflowX: "auto" }}>
        {popularMovies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <h1>Action Movies</h1>
      <div style={{ display: "flex", overflowX: "auto" }}>
        {actionMovies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <h1>Arabic Movies</h1>
      <div style={{ display: "flex", overflowX: "auto" }}>
        {arabicMovies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Footer />
    </main>
  );
}