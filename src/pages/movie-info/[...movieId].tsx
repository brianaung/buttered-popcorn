import Layout from "@/components/layout";
import { trpc } from "@/utils/trpc";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const MovieInfoPage = () => {
  const router = useRouter();
  const movieId = router.query.movieId
    ? (router.query.movieId[0] + '/' + router.query.movieId[1])
    : '';

  const movieInfo = trpc.movieRouter.getMovieInfo.useQuery({ movieId: movieId });

  return (
    <Layout>
      <p>info page.</p>
      {movieInfo.data &&
        <>
          <p>{movieInfo.data.title}</p>
          <p>{movieInfo.data.description}</p>
          <p>{movieInfo.data.releaseDate}</p>
          <div className="flex">
            <Image className="rounded-lg" src={movieInfo.data.image} alt={movieInfo.data.title} width={240} height={240} quality={100} />
              {movieInfo.data.episodes.map(ep => (
                <div className="flex flex-wrap gap-4 border border-red-200">
                  <Link href={`/watch/${movieInfo.data.title}/ep${ep.number}/${ep.id}`}>{ep.id}</Link>
                </div>
            ))}
          </div>
        </>
      }
    </Layout>
  )
}

export default MovieInfoPage;
