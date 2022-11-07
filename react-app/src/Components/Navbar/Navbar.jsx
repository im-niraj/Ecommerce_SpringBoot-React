import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { userInfoLost } from '../../redux/authActions';

const Navbar = () => {
    const state = useSelector((state) => state);
    const history = useNavigate();
    const dispatch = useDispatch();
    const userHandler = () => {
        if (Object.keys(state.userInfo).length > 0) {
            if (state.userInfo.user !== null && Object.keys(state.userInfo.user).length > 0) {
                const { firstName, lastName, userName, roles } = state.userInfo.user;
                return (
                    <>

                        <li className="nav-item mx-2">
                            <span className='fs-4 text-secondary'><i className="fas fa-user fs-4 mx-1 text-warning"></i>{firstName} {lastName}</span>
                        </li>
                        {roles && roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                            <li className="nav-item mx-2">
                                <NavLink to="/Admin" aria-current="page" className={({ isActive }) => (isActive ? 'active btn btn-success' : 'inactive btn btn-success')} end>Admin</NavLink>
                            </li>
                        }
                        {roles && roles.filter(value => value.roleCode === 'USER').length > 0 &&
                            <li className="nav-item ">
                                <NavLink to="/Cart" aria-current="page" className={({ isActive }) => (isActive ? 'active btn btn-primary position-relative' : 'inactive btn btn-primary position-relative')} end>Cart
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                                        {state.cartItemCount > 0 ? state.cartItemCount : ''}
                                    </span>
                                </NavLink>
                            </li>
                        }
                        <li className="nav-item ms-3">
                            <button className="btn btn-danger" onClick={() => logOut()} type="submit">LogOut</button>
                        </li>
                    </>
                )
            }
            else {
                return (
                    <button className="btn btn-success" onClick={() => logIn()} type="submit">LogIn</button>
                )
            }

        }
        else {
            return (
                <button className="btn btn-success" onClick={() => logIn()} type="submit">LogIn</button>
            )
        }


    }
    useEffect(() => {
        userHandler();
    }, [state]);


    const logOut = () => {
        dispatch(userInfoLost());
        localStorage.clear();
        history('/');
    }
    const logIn = () => {
        dispatch(userInfoLost());
        localStorage.clear();
        history('/');
    }

    return (

        <nav className="navbar navbar-expand-lg bg-light sticky-top" >

            <div className="container-fluid">
                <a className="navbar-brand fw-bold text-secondary" href="#">MyMart</a>
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
                        <form className="d-flex ms-5" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </ul>
                    <div className="userData">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {userHandler()}
                        </ul>
                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Navbar