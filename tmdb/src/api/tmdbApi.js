// api request를 하는 소스코드

import axios from "axios";

// /movie/popular?language=ko-KR&page=1&region=KR
const BASE_URL = "https://api.themoviedb.org/3";

const AUTH_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjNlMGVjNjVmZGU1NTMzNDVkNWI4Y2IzMzg1ZGZhNCIsIm5iZiI6MTczMTcxOTMzMC4yMTYxMzg2LCJzdWIiOiI2NzJmNzFjMmFjOTcwYWFkMmE4ZDcyMmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NGqLyCrHt8a-bQt3bpx0GVBzEVC19A4T5mtCpi9t_Is";
const tmdbApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json", // response데이터를 json객체로 달라고 서버에게 요청
    Authorization: `Bearer ${AUTH_KEY}`,
  },
});

//API를 통해 영화 목록을 가져오는 함수
//API 가져올 땐 비동기로(순차적으로 실행하지 않는다)
export const getMovies = async (page = 1) => {
  // ?language=ko-KR&page=1&region=KR
  const response = await tmdbApi.get("/movie/popular", {
    params: {
      language: "ko-KR",
      page, // page: page
      region: "KR",
    },
  });
  return response; // 영화데이터 들어있음
};

export default tmdbApi;
