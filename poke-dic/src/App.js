import React, { useState, useRef, useCallback } from "react";
import PokeTemplate from "./components/PokeTemplate";
import PokeInsert from "./components/PokeInsert";
import PokeList from "./components/PokeList";

function App() {
  const [pokes, setPokes] = useState([
    { id: 1, name: "피카츄", img: "/images/피카츄.png", unactive: false },
    { id: 2, name: "메타몽", img: "/images/메타몽.png", unactive: false },
    { id: 3, name: "파이리", img: "/images/파이리.png", unactive: false },
    { id: 4, name: "꼬부기", img: "/images/꼬부기.png", unactive: false },
    { id: 5, name: "삐삐", img: "/images/삐삐.png", unactive: false },
    { id: 6, name: "이상해씨", img: "/images/이상해씨.png", unactive: false },
  ]);

  const nextId = useRef(7);

  const onInsert = useCallback(
    (name) => {
      const poke = {
        id: nextId.current,
        name,
        img: "/images/" + name + ".png",
        unactive: false,
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

  const onDoubleClick = useCallback(
    (id) => {
      const doubleClickPokes = pokes.map((poke) => {
        return poke.id === id
          ? {
              ...poke,
              unactive: !poke.unactive, // visual 값을 덮어쓴다
            }
          : poke;
      });

      setPokes(doubleClickPokes);
    },
    [pokes]
  );

  return (
    <PokeTemplate>
      <PokeInsert onInsert={onInsert}></PokeInsert>
      <PokeList
        pokes={pokes}
        onRemove={onRemove}
        onDoubleClick={onDoubleClick}
      ></PokeList>
    </PokeTemplate>
  );
}

export default App;
