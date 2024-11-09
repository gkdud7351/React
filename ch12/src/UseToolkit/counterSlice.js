import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice", // slice이름 지정(slice가 여러개이므로 구분을 할 수 있어야 한다.)
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      console.log("state value:", state.value);
      console.log("action:", action);
      // 리덕스에서는 state 값을 새로 만들어서 return
      // 툴킷은 state값 자체를 바꿔준다
      state.value += action.payload; //2
    },
    down: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export default counterSlice.reducer;

// reducers 안에 정의한 up,down 함수를 내보냄
export const { up, down } = counterSlice.actions;
