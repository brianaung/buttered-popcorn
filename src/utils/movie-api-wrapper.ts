import { EpisodeStreamingLinks, MovieInfo, SearchResult } from "./types";

const getMovieSearch = async (movieTitle: string, page: number) => {
  const res = await fetch(`https://api.consumet.org/movies/flixhq/${movieTitle}?page=${page}`);
  const searchResults: SearchResult = await res.json();

  return searchResults;
};

const getMovieInfo = async (movieId: string) => {
  const res = await fetch(`https://api.consumet.org/movies/flixhq/info?id=${movieId}`);
  const movieInfo: MovieInfo = await res.json();
  
  return movieInfo;
};

const getStreamingLinks = async (episodeId: string) => {
  const res = await fetch(`https://api.consumet.org/movies/flixhq/watch?episodeId=${episodeId}&mediaId=1`);
  const episodeData: EpisodeStreamingLinks = await res.json();

  return episodeData;
};

export {
  getMovieSearch,
  getMovieInfo,
  getStreamingLinks,
};
