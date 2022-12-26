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

export type {
  MovieInfoMinimal,
  SearchResult,
}
