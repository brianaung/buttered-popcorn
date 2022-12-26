// import { trpc } from "@/utils/trpc";
import Searchbar from "@/components/searchbar";
import { type NextPage } from "next";

const Home: NextPage = () => {
  // const movieData = trpc.movieRouter.getMovieSearch.useQuery({ movieTitle: 'vincenzo', page: 0 });
  return (
    <div className="border w-full h-full flex flex-col justify-center items-center gap-4">
      <p className="text-6xl">Buttered Popcorn</p>
      <Searchbar />
    </div>
  );
};

export default Home;
