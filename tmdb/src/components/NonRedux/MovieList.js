import React, { useState, useEffect } from "react";
import { getMovies } from "../../api/tmdbApi";

function MovieList() {
  const [movies, setMovies] = useState([]); //영화 데이터
  const [loading, setLoading] = useState(true); //데이터 로딩중인지 아닌지
  const [error, setError] = useState(null); // API를 call할 때 문제가 생긴다면 발생하는 에러메세지

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true); // 로딩중
        const movieList = await getMovies();
        console.log(movieList);
        setMovies(movieList.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        // 무조건 실행
        setLoading(false); //로딩 끝
      }
    };

    fetchMovies();
  }, []);

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
