import Card from './Card'
import './Board.css'
import Trigo from '../Imagenes/Wheat.png'
import Metal from '../Imagenes/Metal.png'
import Madera from '../Imagenes/Forest.png'
import Agua from '../Imagenes/Sea1.png'
import Corner from '../Imagenes/Shore.png'
import React, { createContext, useState, useEffect } from "react";

export const GameContext = createContext(null);

export default function Board() {
  const [guess, setGuess] = useState();

  const cards = [
    { id: 1, imgSrc: Trigo },
    { id: 2, imgSrc: Metal },
    { id: 3, imgSrc: Madera },
    { id: 4, imgSrc: Agua },
    { id: 5, imgSrc: Corner },
  ];

  // Generar el tablero de 8x8
  const boardSize = 6;

  const renderBoard = () => {
  const board = [];

  for (let row = 0; row < boardSize; row++) {
    const cells = [];

    for (let col = 0; col < boardSize; col++) {
      let card;

      if ((row === 0 && (col === 0 || col === boardSize - 1)) || (row === boardSize - 1 && (col === 0 || col === boardSize - 1))) {
        // Corner cells
        card = cards.find((c) => c.id === 5);
      } else if ((row === 0 && col > 0 && col < boardSize - 1) || (row === boardSize - 1 && col > 0 && col < boardSize - 1) || (col === 0 && row > 0 && row < boardSize - 1) || (col === boardSize - 1 && row > 0 && row < boardSize - 1)) {
        // Sea cells
        card = cards.find((c) => c.id === 4);
      } else {
        // Element cell
        card = cards.find((c) => c.id === 1);
      }

      cells.push(<Card key={`${row}-${col}`} imgSrc={card.imgSrc} id={card.id} />);
    }

    board.push(
      <div key={row} className="board-row">
        {cells}
      </div>
    );
  }

  return board;
};


  return (
    <GameContext.Provider
      value={{
        guess,
        setGuess,
      }}
    >
      <h1>Top jugadores</h1>
      <div className="board">{renderBoard()}</div>
      <a href="/">Inicio</a>
      <a href="/welcome">Inicio sesión</a>
      <a href="/instructions">Ir a Instrucciones</a>
      <a href="/principal">Ir a Pagina principal</a>
      <a href="/equipo">Acerca del equipo</a>
    </GameContext.Provider>
  );
}
