import "./card1.css";
import "./flip-transition.css";

function Card1({onClick}) {
  return (
    <div className="card1" onClick={onClick}>
      <div className="card1-back"></div>
      <div className="card1-front">Madera</div>
    </div>
  );
}

export default Card1;