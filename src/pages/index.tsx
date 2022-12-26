import Searchbar from "@/components/searchbar";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center gap-4 p-4">
      <p className="text-6xl font-bold">ButteredPopcorn</p>
      <Searchbar />
    </div>
  );
};

export default Home;
