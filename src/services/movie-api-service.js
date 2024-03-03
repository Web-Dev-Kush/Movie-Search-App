import axios from "axios";

const searchMovies = (searchValue) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_MOVIE_API_URL}/search/movie?query=${searchValue}`,
    {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_MOVIE_API_TOKEN,
      },
    }
  );
};

const getMovieDetails = (movieId) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_MOVIE_API_URL}//movie/${movieId}`,
    {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_MOVIE_API_TOKEN,
      },
    }
  );
};

export default {
  searchMovies,
  getMovieDetails,
};
