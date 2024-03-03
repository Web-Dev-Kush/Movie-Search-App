"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import movieApiService from "../../../services/movie-api-service";
import MovieDetails from "../../../components/movie-details";

const MovileDetailsPage = () => {
  const [movieDetails, setMovieDetais] = useState(null);
  const pathname = usePathname();
  console.log("pathname", pathname);
  useEffect(() => {
    if (pathname) {
      const pathnameArr = pathname.split("/");
      console.log("pathnameArr", pathnameArr);
      movieApiService
        .getMovieDetails(pathnameArr[2])
        .then((res) => {
          console.log(res);
          if (res.data) {
            setMovieDetais(res.data);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, [pathname]);
  return (
    <div>
      {movieDetails ? <MovieDetails movie={movieDetails} /> : ""}
    </div>
  );
};

export default MovileDetailsPage;
