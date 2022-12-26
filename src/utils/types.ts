interface SearchResult {
  currentPage: number;
  hasNextPage: boolean;
  results: MovieInfoMinimal[];
}

interface MovieInfoMinimal {
  id: string;
  url: string;
  title: string;
  image: string;
  releaseDate: string;
  type: string;
}

interface MovieInfo extends MovieInfoMinimal {
  description: string;
  genres: string[];
  casts: string[];
  tags: string[];
  production: string[];
  episodes: EpisodeInfo[];
}

interface EpisodeInfo {
  id: string;
  url: string;
  title: string;
  number: number;
  season: number;
}

interface EpisodeStreamingLinks {
  sources: EpisodeSource[];
  subtitles: Subtitle[];
}

interface EpisodeSource {
  url: string;
  quality: string;
  isM3U8: boolean;
}

interface Subtitle {
  url: string;
  lang: string;
}

export type {
  MovieInfoMinimal,
  SearchResult,
  MovieInfo,
  EpisodeStreamingLinks,
  EpisodeSource,
  Subtitle,
}
