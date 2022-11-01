import React, { useEffect, useState } from 'react';
import { userLogin, fetchUserData, cartItems } from '../../api/authenticationService';
import { useNavigate } from 'react-router-dom';
import { authenticate, authFailure, authSuccess, userInfoLost, userInfoFetched, cartItemCount } from '../../redux/authActions';
import { useDispatch, useSelector } from 'react-redux'
import './login.css';


const Login = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const history = useNavigate();
    const [loginData, setLoginData] = useState({
        userName: '',
        password: ''
    });


    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(authenticate());
        userLogin(loginData).then((response) => {
            if (response.status === 200) {
                dispatch(authSuccess(response.data));
                fetchUserData().then((response) => {
                    const data = response.data;
                    localStorage.setItem("UserData", JSON.stringify(data));
                    dispatch(userInfoFetched(response.data));

                    response.data.roles.forEach(e => {
                        if (e.authority === 'USER') {
                            cartItems(response.data.userId).then(res => {
                                dispatch(cartItemCount(res.data.length));
                            })
                        }
                    })
                    console.log(response.data);
                    history('/home')
                }).catch((e) => {
                    dispatch(userInfoLost());
                    alert("You have to login first...")
                    history('/')
                })
            }
            else {
                dispatch(authFailure('Something Wrong!Please Try Again'));
            }
        }).catch((err) => {
            if (err && err.response) {
                switch (err.response.status) {
                    case 401:
                        console.log("401 status");
                        dispatch(authFailure("Authentication Failed.Bad Credentials"));
                        break;
                    default:
                        dispatch(authFailure('Something Wrong!Please Try Again'));
                }
            }
            else {
                dispatch(authFailure('Something Wrong!Please Try Again'));
            }
        });
        //console.log("Loading again",loading);

    }
    const handleChange = (e) => {
        e.persist();
        setLoginData(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };
    const logOut = () => {
        localStorage.clear();
        dispatch(userInfoLost());
        history('/');
    }
    const signup = () => {
        localStorage.clear();
        dispatch(userInfoLost());
        history('/signup');
    }

    useEffect(() => {
        logOut();
    }, []);

    return (
        <div style={{ minHeight: "80vh" }} className='col-8 mx-auto'>
            <button className='btn btn-warning ms-3 my-3' onClick={signup} >Signup</button>
            <form className=" gx-3 gy-2 align-items-center w-100 p-3" onSubmit={handleSubmit} noValidate={false}>

                <div className="col-sm-6 mt-3">
                    <div className="input-group">
                        <div className="input-group-text">Username</div>
                        <input type="text" className="form-control" id="userName" name='userName' value={loginData.userName} onChange={handleChange} placeholder="Username" />
                    </div>
                </div>
                <div className="col-sm-6 mt-3">
                    <div className="input-group">
                        <div className="input-group-text">Password&nbsp;</div>
                        <input type="password" className="form-control" id="password" name='password' value={loginData.password} onChange={handleChange} placeholder="Password" />
                    </div>
                </div>
                <div className="col-auto mt-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {state.loading && (
                        <span className="ms-2 fw-bold">Loading...</span>
                    )}

                </div>

            </form>
        </div>
    );
}

export default Login;