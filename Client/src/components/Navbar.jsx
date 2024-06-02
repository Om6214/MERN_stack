import { NavLink } from "react-router-dom"
import "./Navbar.css"

export const Navbar =()=>{
    return(
        <>
            <div className="container">
                <div className="left">
                    <a href="/">Omnath</a>
                </div>
                <div className="right">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/service">Service</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="register">Register</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}