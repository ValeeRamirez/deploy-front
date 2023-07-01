// import React, {useContext, useState} from 'react';
// import './Login.css';
// import { AuthContext } from '../auth/AuthContext';

// const LogoutButton = () => {
//   const { logout, token } = useContext(AuthContext);
//   const [msg, setMsg] = useState("");

//   const handleLogout = () => {
//     if (token){
//       logout();
//       setMsg("Has hecho logout con éxito!");
//     }
//     if (!token){
//       console.log("No has iniciado sesión")
//       setMsg("No has iniciado sesión");
//     }
//   }

//   return (
//     <>
//         {msg.length > 0 && <div className="successMsg"> {msg} </div>}
//         <button onClick={handleLogout}>
//         Cerrar sesión
//         </button>
//     </>
//   );
// }

// export default LogoutButton;


import React, { useContext, useState, forwardRef } from 'react';
import './Login.css';
import { AuthContext } from '../auth/AuthContext';

const LogoutButton = forwardRef((props, ref) => {
  const { logout, token } = useContext(AuthContext);
  const [msg, setMsg] = useState('');

  const handleLogout = () => {
    if (token) {
      logout();
      setMsg('Has hecho logout con éxito!');
    }
    if (!token) {
      console.log('No has iniciado sesión');
      setMsg('No has iniciado sesión');
    }
  };

  return (
    <>
      {msg.length > 0 && <div className="successMsg">{msg}</div>}
      <button ref={ref} onClick={handleLogout}>
        Cerrar sesión
      </button>
    </>
  );
});

export default LogoutButton;
