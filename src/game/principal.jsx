import { Link } from "react-router-dom";
import './principal.css';
import principal from '../../public/Imagenes/principal.png';
import axios from 'axios';

function Principal() {
  const handleIniciarPartida = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}jugadors`, {
        tipo: "Principiante",
        posicion: "(0,0)"
      });
      const jugadorId = response.data.id; // Assuming the response contains the jugador ID
      
      alert(`Welcome jugador ${jugadorId}`);
      // Handle success or redirect to another page
    } catch (error) {
      console.error("Error creating jugador:", error);
      // Handle error
    }
  };

  return (
    <>
      <h1>Island Hopper</h1>
      <img src={principal} className="principal" />
      <p>
        Un tablero de isla, el objetivo final es salir de la isla y llegar a tierra. Para esto
        tienen recursos que son mejorables y cada casilla de la isla tendrá distintas
        características que te darán la opción de mejorar o empeorar tus recursos. Funciona con 
        sistema de turnos en lo que se tira un dado y puedes elegir en qué dirección
        moverte.
      </p>
      <p>
        <Link to="/Board" onClick={handleIniciarPartida}>¡Inicia una partida!</Link>
      </p>
      <a href="/">Inicio</a>
      {/* <a href="/welcome">Inicio sesión</a> */}
      <a href="/instructions">Ir a Instrucciones</a>
      <a href="/equipo">Acerca del equipo</a>
    </>
  );
}

export default Principal;
