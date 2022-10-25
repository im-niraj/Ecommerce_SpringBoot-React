import * as AuthType from './types';


export const authenticate = () => {
    return {
        type: AuthType.AUTH_REQ
    }
}


export const authSuccess = (content) => {
    localStorage.setItem('USER_KEY', content.token);
    return {
        type: AuthType.AUTH_SUCCESS,
        payload: content
    }
}

export const authFailure = (error) => {
    return {
        type: AuthType.AUTH_FAILURE,
        payload: error
    }
}

export const authLogout = () => {
    return {
        type: AuthType.AUTH_LOGOUT
    }
}

export const userInfoFetched = (userData) => {
    return {
        type: AuthType.USER_INFO_FETCHED,
        payload: userData
    }
}

export const userInfoLost = () => {
    return {
        type: AuthType.USER_INFO_LOST
    }
}
