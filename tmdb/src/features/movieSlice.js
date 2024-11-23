import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../api/tmdbApi";

// 비동기 thunk 액션 : API를 호출 -> 호출된 결과를 extraReducers에게 전달
// createAsynThunk(내가 지은 액션명, API를 호출하는 비동기 함수)
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await getMovies();
  return response.data.results; //extraReducers에게 결과 전달
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: false,
    movies: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //데이터를 가져오는 동안
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      //데이터를 성공적으로 가져오는 경우
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload; // response.data.results
      })
      //데이터 가져오는 걸 실패했을 때
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // 에러메세지
      });
  },
});

export default moviesSlice.reducer;
