import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Instructions from '../game/instructions'
import UserWelcome from '../profile/UserWelcome'
import Board from '../game/Board'
import Principal from '../game/principal'
import App from './App'
import Equipo from './equipo'
import Tablero from '../game/Tablero'
import Login from '../profile/Login'
import Signup from '../profile/Signup'
import AdminCheck from '../protected/AdminCheck'
import UserCheck from '../protected/UserCheck'
import LogoutButton from '../profile/Logout'

function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/instructions'} element={<Instructions />} />
                    <Route path={'/welcome'} element={<UserWelcome />} />
                    <Route path={'/board'} element={<Board />} />
                    <Route path={'/principal'} element={<Principal />} />
                    <Route path={'/equipo'} element={<Equipo />} />
                    <Route path={'/tablero'} element={<Tablero />} />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/signup'} element={<Signup />} />
                    <Route path={'/'} element={<App />} />
                    <Route path={"/admincheck"} element={<AdminCheck />}/>
                    <Route path={"/usercheck"} element={<UserCheck />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing