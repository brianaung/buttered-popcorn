import { SearchResult } from "./types";

const getMovieSearch = async (movieTitle: string, page: number) => {
  const res = await fetch(`https://api.consumet.org/movies/flixhq/${movieTitle}?page=${page}`);
  const movieData: SearchResult = await res.json();

  return movieData;
};

export {
  getMovieSearch,
};
