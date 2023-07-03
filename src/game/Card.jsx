import './Card.css'
import { useContext, useState } from 'react'
import { GameContext } from "./Board.jsx";

export default function Card({ id, frontImgSrc, backImgSrc, onClick }) {
  const [showImage, setShowImage] = useState(true);
  const { guess, setGuess } = useContext(GameContext);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  const handleGuess = () => {
    setGuess(id);
  };

  return (
    <div className="card">
      <div className="card-container" onClick={() => onClick(id)}>
        {showImage ? (
          <img
            src={frontImgSrc}
            className="img"
            alt="front"
            onClick={toggleImage}
          />
        ) : (
          <img
            src={backImgSrc}
            className="img"
            alt="back"
            onClick={toggleImage}
          />
        )}
      </div>
      <div className="card-actions">
        {/* Render other actions or elements here */}
      </div>
    </div>
  );
}
