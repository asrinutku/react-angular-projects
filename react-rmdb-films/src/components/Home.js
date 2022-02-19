import React from "react";

import { useHomeFetch } from "../hooks/useHomeFetch";

import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  console.log(state);

  if (error) return <div>Yanlıs Giden Birseyler Var...</div>;

  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[3].poster_path}`}
          title={state.results[3].original_title}
          text={state.results[3].overview}
        />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={searchTerm ? "Arama Sonuçları" : "Popüler Filmler"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button
          text="Daha Fazla Yukle"
          callback={() => setIsLoadingMore(true)}
        />
      )}
    </>
  );
};

export default Home;
