import "./css/PokeList.css";
import PokeListItem from "./PokeListItem";

function PokeList({ pokes, onRemove, onChangeName }) {
  return (
    <div className="inner">
      <ul className="PokeList">
        {pokes.map((poke) => (
          <PokeListItem
            poke={poke}
            key={poke.id}
            onRemove={onRemove}
            onChange={onChangeName}
          ></PokeListItem>
        ))}
      </ul>
    </div>
  );
}

export default PokeList;
