"use client";
import Image from "next/image";
import { useState } from "react";
import MovieList from "../../components/movie-list";
import movieApiService from "../../services/movie-api-service";

export default function MovieSearchPage() {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = (searchValue) => {
    console.log("searchValue", searchValue);
    console.log("searchValue.length", searchValue?.length);
    setSearchText(searchValue);
    if (searchValue?.length > 2) {
      setLoading(true);
      movieApiService
        .searchMovies(searchValue)
        .then((res) => {
          console.log(res);
          setLoading(false);
          if (res.data) {
            setMovies(res.data.results);
          }
        })
        .catch((err) => {
          console.log("err", err);
          setLoading(false);
          setMovies([]);
          setError(
            err.message || "Error occured while seraching movie, pls try again!"
          );
        });
    } else {
      setMovies([]);
    }
  };
  return (
    <main>
      <div className="flex  flex-col  items-center p-24">
        <input
          className="w-80 h-10 rounded-md p-2 text-lg"
          type="text"
          placeholder="Enter Movie Name here"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      {error || isLoading ? (
        <h2 className="text-3xl font-bold justify-self-center p-10">
          {" "}
          {error || "Searching, please wait..."}
        </h2>
      ) : (
        <MovieList movies={movies} />
      )}
    </main>
  );
}
