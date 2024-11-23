import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../api/tmdbApi";
import { fetchMovies } from "../../features/movieSlice";

function MovieList() {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => {
    console.log(state);
    return state.movies;
  });
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error:{error}</p>;
  return (
    <div>
      <h1>인기영화 목록</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movies.id}>
            {movie.title},{movie.overview}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
