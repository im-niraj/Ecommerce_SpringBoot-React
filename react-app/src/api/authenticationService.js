import axios from 'axios';


const getToken = () => {
    return localStorage.getItem('USER_KEY');
}

export const userLogin = (loginData) => {
    return axios({
        method: 'POST',
        url: `${process.env.hostUrl || 'http://localhost:8080'}/api/v1/auth/login`,
        data: loginData
    })
}

export const fetchUserData = () => {
    return axios({
        method: 'GET',
        url: `${process.env.hostUrl || 'http://localhost:8080'}/api/v1/auth/userinfo`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}