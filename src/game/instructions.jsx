import './Instructions.css'
import React from 'react';
import ImageSlider from "./ImageSlider";
import FlippableCard1 from "../assets/flippable-card";
import FlippableCard2 from "../assets/flippable-card2";
import FlippableCard3 from "../assets/flippable-card3";
import Portada from '../../public/Imagenes/Portada.jpg'
import Instrucciones from '../../public/Imagenes/Inst.jpg'
import Agua from '../../public/Imagenes/Agua.jpg'
import Barcos from '../../public/Imagenes/Barcos.jpg'
import Casilla1 from '../../public/Imagenes/Casillas_1.jpg'
import Casilla2 from '../../public/Imagenes/Casillas_2.jpg'


const Instructions = () => {
    const slides = [
      { url: Portada, title: "Portada" },
      { url: Instrucciones, title: "Instrucciones" },
      { url: Agua, title: "Agua" },
      { url: Barcos, title: "Barcos" },
      { url: Casilla1, title: "Cas1" },
      { url: Casilla2, title: "Cas2" }
      ];
    const containerStyles = {
      width: "1000px",
      height: "560px",
      margin: "0 auto",
    };
    return (
      <div>
        <h1>Reglas e instrucciones</h1>
        
        <h2>Objetivo del juego</h2>
        <div className="texto-instruc">
        ¡Un grupo de náufragos intenta salir de la mítica isla del misterio! 
        <br></br>
        <br></br>
        Cada jugador participa en una carrera contra el tiempo para moverse a la seguridad de tierra firme.
        <br></br>
        <br></br>
        El ganador es el jugador que logre salir de la isla lo más rápido posible, recolectando materiales para construir y mejorar su barco.
        <br></br>
        <br></br>
        <br></br>
        </div>


        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
        <br></br>
        <br></br>
        <h2>Casillas y recursos</h2>
        <FlippableCard1/>
        <FlippableCard2/>
        <FlippableCard3/>
        <a href = '/'>Inicio</a>
        <a href = '/welcome'>Inicio sesión</a>
        <a href = '/principal'>Ir a Pagina principal</a>
        <a href = '/equipo'>Acerca del equipo</a>
      </div>
      
    );
  };

  // https://github.com/monsterlessonsacademy

export default Instructions
