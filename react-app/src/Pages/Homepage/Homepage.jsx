import {fetchUserData} from '../../api/authenticationService';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// const baseURL = "https://jsonplaceholder.typicode.com/users";
// const springUrl = "http://localhost:8080/test";


function Homepage(props) {
    const [userData,setUserData]=useState({});

    useEffect(() => {
        fetchUserData().then((response)=>{
            setUserData(response.data);
        }).catch((e)=>{
            localStorage.clear();
            props.history.push('/');
        })
    });

    const logOut=()=>{
        localStorage.clear();
        props.history.push('/');

    }

    return (
        <div>
           <h4>Hello {userData && `${userData.firstName} ${userData.lastName}`}</h4>
                <br></br>
                {userData && userData.roles && userData.roles.filter(value => value.roleCode==='ADMIN').length>0 && <button type="variant">Add User</button> }
                <br></br>
            <button onClick={() =>logOut()}>Logout</button>
        </div>
    );
}

export default Homepage;