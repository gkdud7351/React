import "./css/PokeList.css";
import PokeListItem from "./PokeListItem";

function PokeList({ pokes, onRemove, onDoubleClick }) {
  return (
    <div className="inner">
      <ul className="PokeList">
        {pokes.map((poke) => (
          <PokeListItem
            poke={poke}
            key={poke.id}
            onRemove={onRemove}
            onDoubleClick={onDoubleClick}
          ></PokeListItem>
        ))}
      </ul>
    </div>
  );
}

export default PokeList;
