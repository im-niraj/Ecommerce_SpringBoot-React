
import React, { useEffect, useState, useReducer } from 'react';
import { fetchUserData } from '../../api/authenticationService';
import { useNavigate } from 'react-router-dom';
import { userInfoFetched, userInfoLost } from '../../redux/authActions';
import { useDispatch, useSelector } from 'react-redux'

function Homepage(props) {
    const history = useNavigate();
    const state = useSelector((state) => state);
    const dispatch = useDispatch();


    useEffect(() => {
        fetchUserData().then((response) => {
            dispatch(userInfoFetched(response.data));
        }).catch((e) => {
            dispatch(userInfoLost());
            // console.log("Error: ", e);
            alert("You have to login first...")
            history('/')
        })
    }, [])

    return (
        <div>
            HomePage

        </div>
    );
}

export default Homepage;