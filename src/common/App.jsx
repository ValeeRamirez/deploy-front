import { useState, useEffect, useContext, useRef } from 'react'
import './App.css'
import SpinningText from "./SpinningText";
import recursosia from "../Imagenes/recursosia.png"
import LogoutButton from '../profile/Logout'
import { AuthContext } from '../auth/AuthContext';


function App() {
  const [count, setCount] = useState(0);
  const {token } = useContext(AuthContext);
  // const logoutButtonRef = useRef(null);

  // useEffect(() => {
  //   if (logoutButtonRef.current) {
  //     logoutButtonRef.current.click();
  //   }
  // }, []);

  return (
    <div className="App">
      <center><SpinningText text="ISLAND HOPPER   ISLAND HOPPER  ">
        <img src={recursosia} alt="Got Milk" />
      </SpinningText></center>
      <div className="card">
        <p2>
        ¡Un grupo de náufragos intenta salir de la mítica isla del misterio! {/*Poner una buena descripción*/}
        </p2>
      </div>
      {/* <a href = '/welcome'>Welcome</a> */}
      {token === null && (
        <>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </>
      )}
      <a href = '/instructions'>Ir a Instrucciones</a>
      <a href = '/principal'>Ir a Pagina principal</a>
      <a href = '/equipo'>Acerca del equipo</a>
      <a href='/admincheck'>Chequeo Scope Admin</a>
      <a href='/usercheck'>Chequeo Scope User</a>
      <br></br>
      {token != null && (
        <>
          <LogoutButton></LogoutButton>
        </>
      )}
    </div>
  )
}

export default App