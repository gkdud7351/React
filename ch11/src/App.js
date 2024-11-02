import React, { useState } from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

// reducer : 직접적으로 state를 변경해주는 역할
function reducer(currentState, action) {
  // 현재 state가 없다면 number state에 1을 할당
  if (currentState === undefined) {
    return { number: 1 };
  }

  // 현재 state에 데이터가 있다면
  const newState = { ...currentState }; // 깊은 복사(현재 state값 복사)

  if (action.type === "PLUS") {
    newState.number++; // number state 증가
  }

  return newState; // 새로운 state를 반영
}

// store:state를 저장, reducer 저장
const store = createStore(reducer);

function Left1() {
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
}
function Left2() {
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}
function Left3() {
  // useSelector:store에 있는 state값을 무선으로 연결해서 가져올 수 있다

  // function f(state) {
  //   return state.number;
  // }

  // const number = useSelector(f);

  // return (
  //   <div>
  //     <h1>Left3</h1>
  //   </div>
  // );

  const number = useSelector((state) => state.number);

  return (
    <div>
      <h1>Left3:{number}</h1>
    </div>
  );
}
function Right1() {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2() {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      ></input>
    </div>
  );
}
function App() {
  return (
    <div className="container">
      <h1>Root</h1>
      <div className="grid">
        {/* Provider:store에 저장되어 있던 state, reducer를
        어떤 컴포넌트에 제공할 것인지 지정 => 제공하고 싶은 컴포넌트를 감싸준다 */}
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}
export default App;
