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

export const addProduct = (newProductData) => {
    return axios({
        method: 'POST',
        url: `${process.env.hostUrl || 'http://localhost:8080'}/admin/addProduct`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
        data: newProductData
    })
}
export const getAllProduct = () => {
    return axios({
        method: 'GET',
        url: `${process.env.hostUrl || 'http://localhost:8080'}/admin/allProduct`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}
export const getProductById = (productId) => {
    return axios({
        method: 'GET',
        url: `${process.env.hostUrl || 'http://localhost:8080'}/admin/product/${productId}`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const deleteProductById = (productId) => {
    return axios({
        method: 'DELETE',
        url: `${process.env.hostUrl || 'http://localhost:8080'}/admin/deleteProduct/${productId}`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}