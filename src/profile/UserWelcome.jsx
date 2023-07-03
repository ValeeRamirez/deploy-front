import { useState } from "react"
import '../common/index.css'

export default function UserWelcome() {

    const [nombre, setNombre] = useState(null)

    function handleChange(nombre){
        setNombre(nombre);
    }
    return(
        <>
        <h2>Mi nombre de usuario</h2>
        <input 
            onChange={e => handleChange(e.target.value)}
        />
        <p>Bienvenid@, { nombre }!</p>
        {/*Envola agregar un boton para volver a la landing page?*/}
        <a href = '/'>Inicio</a>
        <a href = '/instructions'>Ir a Instrucciones</a>
        <a href = '/principal'>Ir a Pagina principal</a>
        <a href = '/equipo'>Acerca del equipo</a>
        </>
    )
}