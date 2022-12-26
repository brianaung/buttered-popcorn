import { router } from "../trpc";
import { movieRouter } from "./movie-router";

export const appRouter = router({
  movieRouter: movieRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
