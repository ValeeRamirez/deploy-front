import './principal.css'
import principal from '../../public/Imagenes/principal.png'

function Principal(){
    
    return (
        <>
        <h1>Island Hopper</h1>
        <img src={principal} className="principal"/>
        <p>
        Un tablero de isla, el objetivo final es salir de la isla y llegar a tierra. Para esto
        tienen recursos que son mejorables y cada casilla de la isla tendrá distintas
        características que te darán la opción de mejorar o empeorar tus recursos. Funciona con 
        sistema de turnos en lo que se tira un dado y puedes elegir en que dirección
        moverte.
        <p>
        <a href = '/Board'>¡Ve el top jugadores y adivina quien es el número 1!</a>
        </p>
        </p>
        <a href = '/'>Inicio</a>
        <a href = '/welcome'>Inicio sesión</a>
        <a href = '/instructions'>Ir a Instrucciones</a>
        <a href = '/equipo'>Acerca del equipo</a>
        </>

        
    )
}

export default Principal