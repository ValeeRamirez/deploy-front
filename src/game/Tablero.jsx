import Card from './Card'
import './Board.css'
import top1 from '../Imagenes/top1.png'
import top2 from '../Imagenes/top2.png'
import top3 from '../Imagenes/top3.png'
import top4 from '../Imagenes/top4.png'
import top5 from '../Imagenes/top5.png'
import top6 from '../Imagenes/top6.png'
import React, {createContext, useState, useEffect} from "react";

export const GameContext = createContext(null);

export default function Board() {
  const [guess, setGuess] = useState();

  const cards =[
    { id: 1, imgSrc: top1},
    { id: 2, imgSrc: top2},
    { id: 3, imgSrc: top3},
    { id: 4, imgSrc: top4},
    { id: 5, imgSrc: top5},
    { id: 6, imgSrc: top6},
  ];

  const opponentSelectionId = 3;

  useEffect(() => {
    if (guess === opponentSelectionId) {
      alert('¡Adivinaste correctamente!');
      setGuess(null);
    } else if (typeof guess === 'number') {
      alert("No adivinaste :(");
      setGuess(null);
    }
  }, [guess])

  return (
    <GameContext.Provider
      value={{
        guess,
        setGuess
      }}
    >
      <h1>Top jugadores</h1>
      <div className="board">
         <div className="board-row">
            {cards.map(card=> (
                <Card key={card.id} imgSrc={card.imgSrc} id={card.id}/>
            ))}
        </div>
      </div>
      <a href = '/'>Inicio</a>
      <a href = '/welcome'>Inicio sesión</a>
      <a href = '/instructions'>Ir a Instrucciones</a>
      <a href = '/principal'>Ir a Pagina principal</a>
      <a href = '/equipo'>Acerca del equipo</a>
    </GameContext.Provider>
  )
}
