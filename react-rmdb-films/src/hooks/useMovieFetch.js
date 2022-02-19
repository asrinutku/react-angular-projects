import { is } from "@babel/types";
import { useState, useEffect, useCallback } from "react";
import API from "../API";

import { isPersistedState } from "../helpers";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovie = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);

      const directors = credits.crew.filter(
        (member) => member.job === "Director"
      );
      setState({
        ...movie,
        actors: credits.cast,
        directors,
      });

      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [movieId]);

  const sessionState = isPersistedState(movieId);

  if (sessionState) {
    setState(sessionState);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovie();
  }, [movieId, fetchMovie]);

  return { state, loading, error };
};
