import { useState } from "react";
import { trpc } from "@/utils/trpc";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import Link from "next/link";

const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const searchRes = trpc.movieRouter.getMovieSearch.useQuery({ movieTitle: query, page: 1 }, { enabled: Boolean(query) // refetch on query change
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
  }

  return (
    <>
      <button className="rounded-lg border border-gray-300 text-gray-400 w-1/2 max-w-md h-12 px-4 flex items-center justify-start gap-4 min-w-max" onClick={() => setIsOpen(true)}>
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        Search Movie
        <div className="ml-auto">Keybind</div>
      </button>

      <Dialog className="relative z-10" open={isOpen} onClose={handleClose}>
        {/* backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* centering the modal */}
        <div className="fixed inset-0 flex items-center justify-center text-center shadow-xl shadow-red">
          <Dialog.Panel className="rounded-lg bg-white w-1/2 h-1/2 max-w-lg p-4 overflow-hidden flex flex-col gap-4 min-w-min">
              {/* search input box */}
              <div className="relative">
                <input className="w-full rounded-lg border border-gray-300 text-gray-400 h-12 px-4 pl-11" placeholder="Search Movie" onChange={handleInput} />
                <MagnifyingGlassIcon className="absolute inset-3 h-6 w-6 text-gray-500" />
              </div>
              {/* search results query */}
              <div className="overflow-y-scroll w-full h-full max-w-full px-4">
                {searchRes.data?.results.map(movie => (
                  <Link key={movie.id} href={`/movie-info/${movie.id}`} onClick={handleClose} className="text-left block">{movie.title} </Link>
                ))}
              </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Searchbar;
