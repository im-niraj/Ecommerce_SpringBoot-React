import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {
    const state = useSelector((state) => state);
    const [userData, setUserData] = useState({});
    const history = useNavigate();
    const userHandler = () => {
        if (userData) {
            return (
                <>
                    <li className="nav-item mx-2">
                        <span className='fs-4'>{userData.firstName} {userData.lastName}</span>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-primary" onClick={() => logOut()} type="submit">LogOut</button>
                    </li>
                </>
            )
        }
        else {
            return (
                // <NavLink className="btn btn-success fw-bold" to="/" role="button">LogIn</NavLink>
                <button className="btn btn-success" onClick={() => logIn()} type="submit">LogIn</button>
            )
        }
    }

    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem('username')));
    }, [state])

    const logOut = () => {
        localStorage.clear();
        history('/');
    }
    const logIn = () => {
        history('/');
    }

    return (

        <nav className="navbar navbar-expand-lg bg-light" >

            <div className="container-fluid">
                <a className="navbar-brand" href="#">MyMart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <NavLink to="/Home" aria-current="page" className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')} end>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/About" aria-current="page" className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')} end>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Cart" aria-current="page" className={({ isActive }) => (isActive ? 'active nav-link disabled' : 'inactive nav-link disabled')} end>Cart</NavLink>
                        </li>
                        <form className="d-flex ms-5" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </ul>
                    <div className="userData">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <i className="fas fa-user fs-4 mx-3 "></i>
                            </li>
                            {userHandler()}
                        </ul>
                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Navbar