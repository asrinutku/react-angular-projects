import React from "react";
import { useParams } from "react-router";

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

import MovieInfo from "./MovieInfo";
import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";
import Spinner from "./Spinner";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

import { useMovieFetch } from "../hooks/useMovieFetch";

import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Yanlıs Giden Birseyler Var..</div>;

  return (
    <>
      <BreadCrumb MovieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />

     
    </>
  );
};

export default Movie;
