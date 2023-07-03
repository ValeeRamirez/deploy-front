import Card from './Card';
import './Board.css';
import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const GameContext = createContext(null);

export default function Board() {
  const [guess, setGuess] = useState();
  const [cards, setCards] = useState([]);


  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/casillas`)
      .then((response) => {
        const data = response.data;
  
        console.log(data);
  
        if (!Array.isArray(data)) {
          console.error("Invalid data structure:", data);
          return;
        }
  
        const newCards = data.map((card) => ({
          id: card.id_casilla,
          front: card.front || "/../../public/Imagenes/Collect.png",
          back: card.back || "/../../public/Imagenes/Collect.png",
        }));
  
        console.log("Fetched data:", data);
        console.log("New cards:", newCards);
  
        setCards(newCards);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  

  // Generar el tablero de 8x8
  const boardSize = 6;
  const renderBoard = () => {
    const board = [];
  
    for (let row = 0; row < boardSize; row++) {
      const cells = [];
  
      for (let col = 0; col < boardSize; col++) {
        const cardId = row * boardSize + col;
        const card = cards.find((c) => c && c.id === cardId);
  
        if (!card) {
          console.warn(`Card not found for id: ${cardId}`);
          continue;
        }
  
        console.log('Rendering card:', card);
  
        cells.push(
          <Card
            key={`${row}-${col}`}
            frontImgSrc={card.front}
            backImgSrc={card.back}
            id={card.id}
          />
        );
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
      {/* <a href="/welcome">Inicio sesión</a> */}
      <a href="/instructions">Ir a Instrucciones</a>
      <a href="/principal">Ir a Pagina principal</a>
      <a href="/equipo">Acerca del equipo</a>
    </GameContext.Provider>
  );
}
