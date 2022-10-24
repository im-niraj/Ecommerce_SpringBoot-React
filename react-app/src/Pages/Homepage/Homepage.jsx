
import React, { useEffect, useState, useReducer } from 'react';
import { fetchUserData } from '../../api/authenticationService';

function Homepage(props) {
    useEffect(() => {
        fetchUserData().then((response) => {
            const useDetail = {
                firstName: response.data.firstName,
                lastName: response.data.lastName,
            }
            localStorage.setItem('username', JSON.stringify(useDetail));
        }).catch((e) => {
            localStorage.clear();
        })
    })

    return (
        <div>
            HomePage

        </div>
    );
}

export default Homepage;