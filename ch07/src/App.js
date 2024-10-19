import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import React, { useState, useRef, useCallback } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "헬스장 가기",
      checked: true,
    },
    {
      id: 2,
      text: "점심약속",
      checked: true,
    },
    {
      id: 3,
      text: "리액트 복습",
      checked: false,
    },
  ]);

  // 고유 값으로 사용 될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  // 할 일 등록하기
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current, // useRef의 현재값을 가져옴(4)
        text, // text:text
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos]
  );

  // 할 일 삭제하기
  const onRemove = useCallback(
    (id) => {
      const removeTodos = todos.filter((todo) => todo.id !== id);
      setTodos(removeTodos);
    },
    [todos]
  );

  // 할 일 완료, 미완료 토글
  // 매개변수로 들어온 id에 해당하는 json 객체의 checked 값을 토글로 바꿔준다
  const onToggle = useCallback(
    (id) => {
      const toggleTodos = todos.map((todo) => {
        return todo.id === id
          ? {
              ...todo,
              checked: !todo.checked, // check 값을 덮어쓴다
            }
          : todo;
      });

      setTodos(toggleTodos);
    },
    [todos]
  );

  return (
    <TodoTemplate>
      {/* TodoInsert 컴포넌트에서 할 일을 등록하므로 onInsert 함수 props로 전달 */}
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      ></TodoList>
    </TodoTemplate>
  );
}

export default App;
