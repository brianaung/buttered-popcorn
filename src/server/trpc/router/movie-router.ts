import { getMovieSearch } from "@/utils/movie-api-wrapper";
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
});
