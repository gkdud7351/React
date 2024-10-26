import React, { useState, useRef, useCallback } from "react";
import PokeTemplate from "./components/PokeTemplate";
import PokeInsert from "./components/PokeInsert";
import PokeList from "./components/PokeList";

function App() {
  const [pokes, setPokes] = useState([
    { id: 1, name: "피카츄", img: "/images/피카츄.png" },
    { id: 2, name: "메타몽", img: "/images/메타몽.png" },
    { id: 3, name: "파이리", img: "/images/파이리.png" },
    { id: 4, name: "꼬부기", img: "/images/꼬부기.png" },
    { id: 5, name: "삐삐", img: "/images/삐삐.png" },
    { id: 6, name: "이상해씨", img: "/images/이상해씨.png" },
  ]);

  const nextId = useRef(7);

  const onInsert = useCallback(
    (name) => {
      const poke = {
        id: nextId.current,
        name,
        img: "/images/" + name + ".png",
      };
      setPokes(pokes.concat(poke));
      nextId.current += 1;
    },
    [pokes]
  );

  const onRemove = useCallback(
    (id) => {
      const removePokes = pokes.filter((poke) => poke.id !== id);
      setPokes(removePokes);
    },
    [pokes]
  );

  return (
    <PokeTemplate>
      <PokeInsert onInsert={onInsert}></PokeInsert>
      <PokeList pokes={pokes} onRemove={onRemove}></PokeList>
    </PokeTemplate>
  );
}

export default App;
