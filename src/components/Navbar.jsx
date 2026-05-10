import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
    return (
        <>
            <div className="flex container mx-auto text-[#FCBF26] mt-5 font-mono">
                
                <div className='size-25'>
                    <img src={logo} alt="" />
                </div>
                <ul className="flex gap-10 ms-auto text-xl">
                    <NavLink to="/">🏠Home</NavLink>
                    <NavLink to="/programmes">🗓️Programes</NavLink>
                    <NavLink to="/planning">📝Planning</NavLink>
                    <NavLink to="/passeport">📃Passeport</NavLink>
                    <NavLink to="/login">login</NavLink>
                    
                </ul>
            </div>
        </>
    )
}