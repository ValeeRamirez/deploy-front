import "./card2.css";
import "./flip-transition.css";

function Card2({onClick}) {
  return (
    <div className="card2" onClick={onClick}>
      <div className="card2-back"></div>
      <div className="card2-front">Metal</div>
    </div>
  );
}

export default Card2;