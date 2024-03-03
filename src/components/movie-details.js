import Link from "next/link";
import Image from "next/image";

const MovieDetails = ({ movie }) => {
  return (
    <div className="p-20">
      <img
        src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        alt="Picture of the Movie"
      />
      <h2 className="text-3xl font-bold">{movie.title}</h2>
      Released on: {movie.release_date}
      <div>Overview: {movie.overview}</div>
      <div>Rating: {movie.vote_average}</div>
      <div>Popularity: {movie.popularity}</div>
      <div>Run Time: {movie.runtime} Mins</div>
    </div>
  );
};

export default MovieDetails;
