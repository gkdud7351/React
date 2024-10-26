import "./css/PokeTemplate.css";

function PokeTemplate({ children }) {
  return (
    <div className="PokeTemplate">
      <div className="app-title">Poketmon</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default PokeTemplate;
