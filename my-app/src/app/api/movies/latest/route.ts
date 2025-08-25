import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`TMDb API returned status ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data.results)) {
      throw new Error("TMDb API response missing results array");
    }

    return NextResponse.json(data.results, { status: 200 });
  } catch (error) {
    console.error("API error in /api/movies/latest:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Unknown error" },
      { status: 500 }
    );
  }
}
