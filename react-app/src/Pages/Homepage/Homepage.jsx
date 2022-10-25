
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
        dispatch(userInfoFetched(JSON.parse(localStorage.getItem("UserData"))));
    }, []);


    return (
        <div>
            HomePage

        </div>
    );
}

export default Homepage;