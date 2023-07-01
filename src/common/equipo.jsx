import './equipo.css'
import Vale from '../Imagenes/Vale.jpg'
import Nico from '../Imagenes/Nico.jpg'

function Equipo(){
    return (
        <>
        <h1>Acerca del equipo</h1>
        <img src={Nico} className="foto" />  {/*poner nuestro propio logo*/}
        
        <p> Nicole esta en 5to año de Ingeniería en Robótica, es chistosa y muy amorosa. Además es participante activa de proyectos como "Trabajados de invierno", reconocida por su liderazgo y pasión por la causa. </p>
        <img src={Vale} className="foto2" />  {/*poner nuestro propio logo*/}
        <p> Valentina también es una estudiante de Ingeniería en Computación de 5to año, le encanta hacer deporte y estar con su gatito llamado Mishka. Además, es fanática de las películas de comedia romántica y de jugar juegos de mesa en un día nublado.</p>
        <a href = '/'>Inicio</a>
        <a href = '/welcome'>Inicio sesión</a>
        <a href = '/instructions'>Ir a Instrucciones</a>
        <a href = '/principal'>Ir a Pagina principal</a>
        </>
    )
}

export default Equipo