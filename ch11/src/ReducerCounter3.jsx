import React, { useReducer, useState } from "react";
import { act } from "react";

function ReducerCounter2() {
  const [number, setNumber] = useState(1);
  const [count, countDispatch] = useReducer(countReducer, 0);

  //  reducer 함수 : state 바꾸는 역할
  // reducer 함수(state 값, 행위)
  function countReducer(oldCount, action) {
    if (action.type === "UP") {
      return oldCount + action.number;
    } else if (action.type === "DOWN") {
      return oldCount - act.number;
    } else if (action.type === "RESET") {
      return 0;
    }
  }

  const down = () => countDispatch({ type: "DOWN", number: number });
  const reset = () => countDispatch({ type: "RESET", number: number });
  const up = () => countDispatch({ type: "UP", number: number });

  const changeNumber = (e) => setNumber(Number(e.target.value));

  return (
    <>
      <input type="button" value="-" onClick={down} />
      <input type="button" value="0" onClick={reset} />
      <input type="button" value="+" onClick={up} />
      <br></br>
      <input type="text" value={number} onChange={changeNumber}></input>
      <span>{count}</span>
    </>
  );
}

export default ReducerCounter2;
