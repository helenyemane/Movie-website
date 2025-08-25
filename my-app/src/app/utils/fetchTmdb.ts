import axios from "axios";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export async function fetchTmdb(endpoint: string, params = {}) {
  try {
    const { data } = await axios.get(`${TMDB_BASE_URL}${endpoint}`, {
      params: {
        ...params,
        api_key: process.env.TMDB_API_KEY, 
      },
    });
    if (data && Array.isArray(data.results)) {
      return data.results;
    } else {
      console.warn("TMDb API did not return expected results array", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching data from TMDb:", error);
    return [];
  }
}

export async function searchTmdb(query: string) {
  try {
    const { data } = await axios.get(`${TMDB_BASE_URL}/search/multi`, {
      params: {
        query,
        api_key: process.env.TMDB_API_KEY,
      },
    });

    if (data && Array.isArray(data.results)) {
      return data.results;
    } else {
      console.warn("TMDb search API did not return expected results array", data);
      return [];
    }
  } catch (error) {
    console.error("Error searching TMDb:", error);
    return [];
  }
}
