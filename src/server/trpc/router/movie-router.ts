import { getMovieInfo, getMovieSearch, getStreamingLinks } from "@/utils/movie-api-wrapper";
import { z } from "zod";
import { router, procedure } from "../trpc";

export const movieRouter = router({
  getMovieSearch: procedure
    .input(
      z.object({
        movieTitle: z.string(),
        page: z.number(),
      }),
    )
    .query(async ({ input }) => {
      const res = await getMovieSearch(input.movieTitle, input.page);
      return res;
    }),
  getMovieInfo: procedure
    .input(
      z.object({
        movieId: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const res = await getMovieInfo(input.movieId);
      return res;
    }),
  getStreamingLinks: procedure
    .input(
      z.object({
        episodeId: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const res = await getStreamingLinks(input.episodeId);
      return res;
    }),
});
