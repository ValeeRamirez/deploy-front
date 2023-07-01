import "./card3.css";
import "./flip-transition.css";

function Card3({onClick}) {
  return (
    <div className="card3" onClick={onClick}>
      <div className="card3-back"></div>
      <div className="card3-front">Trigo</div>
    </div>
  );
}

export default Card3;