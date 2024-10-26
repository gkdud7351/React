import "./css/PokeListItem.css";

function PokeListItem({ poke, onRemove }) {
  const { id, name, img } = poke;

  return (
    <li className="PokeListItem">
      <img src={poke.img} alt={poke.name} width="130" />
      <p>{poke.name}</p>
      <button
        onClick={() => {
          onRemove(id);
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default PokeListItem;
