import Link from 'next/link'

const MovieList = ({movies}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-10">
      
      {movies.length ? movies.map((movie) => {
        return (
          <div className="bg-slate-300 rounded-lg p-5" key={movie.id}>
            <h2 className="text-3xl font-bold">{movie.title}</h2>
            <div>
              {movie.release_date}
            </div>
            <div>Overview: {movie.overview}</div>
            <Link className="underline" href={`/movie/${movie.id}`}>More Details</Link>
          </div>
        );
      }) : <h2 className="text-3xl font-bold justify-self-center">No results to show</h2>}
    </div>
  );
};

export default MovieList;
