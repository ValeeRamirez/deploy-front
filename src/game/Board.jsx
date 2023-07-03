import Card from './Card';
import './Board.css';
import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const GameContext = createContext(null);

export default function Board() {
  const [guess, setGuess] = useState();
  const [cards, setCards] = useState([]);
  const [tableroNumber, setTableroNumber] = useState(null);
  const [diceValue, setDiceValue] = useState(null);
  const [playerId, setPlayerId] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}casillas`)
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
          coordenadas: card.coordenadas,
          tipo: card.tipo
        }));

        const tableroNumberData = response.data.id_tablero; // Adjust this according to the response structure
        setTableroNumber(tableroNumberData);

        console.log(tableroNumber);
        console.log("New cards:", newCards);

        setCards(newCards);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // Fetch the last created player ID here and set it to the playerId state
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/jugadors`)
      .then((response) => {
        const jugadors = response.data;
        if (jugadors.length > 0) {
          const lastPlayerId = jugadors[jugadors.length - 1].id; // Get the ID of the last player
          setPlayerId(lastPlayerId);
        }
      })
      .catch((error) => {
        console.error("Error fetching player ID:", error);
      });
  }, []);

  const handleCardClick = async (coordenadas) => {
    try {
      const clickedCard = cards.find((card) => card.coordenadas === coordenadas);
  
      if (clickedCard.tipo === "Mar" || clickedCard.tipo === "Esquina") {
        window.alert("You don't have a boat.");
        return;
      }
  
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/posicion_update/${playerId}/${coordenadas}`
      );
      const message = response.data.message;
      console.log(message); // Optional: Log the response message
  
      // Show the pop-up message with the updated position
      window.alert(`Position updated to ${coordenadas} for player ${playerId}`);
  
      // Perform any additional actions or update the state as needed
  
    } catch (error) {
      console.error("Error updating player's position:", error);
    }
  };
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
            onClick={() => handleCardClick(card.coordenadas)}
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
      <h1>Tablero: </h1>
      <div className="board">{renderBoard()}</div>
      <a href="/">Inicio</a>
      {/* <a href="/welcome">Inicio sesión</a> */}
      <a href="/instructions">Ir a Instrucciones</a>
      <a href="/principal">Ir a Pagina principal</a>
      <a href="/equipo">Acerca del equipo</a>
    </GameContext.Provider>
  );
}
