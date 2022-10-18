import './Navbar.css'
import { NavLink } from "react-router-dom";
import React from 'react';


function Navbar() {
    return (
        <>
            <div className='Navbar-body'>
                <div className="brand">Niraj</div>
                <div className="menues">
                    <div className="menu">
                        <ul>
                            <li >
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')} end>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                    Cart
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="loginsignup">
                        <button>Signup</button> 
                        </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;