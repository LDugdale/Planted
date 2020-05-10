import * as token from '../constants/token';
import decode from 'jwt-decode';

export const setToken = (jwt) => {
    localStorage.setItem(token.TOKEN_STORAGE, jwt);
}

export const getToken = () => {
    return localStorage.getItem(token.TOKEN_STORAGE);
}

export const removeToken = () => {
    localStorage.removeItem(token.TOKEN_STORAGE);
}

export const isTokenExpired = (jwt) => {
    try {
        const decoded = decode(jwt);
        if (decoded.exp < Date.now() / 1000) {
            return true;
        }
        else
            return false;
    }
    catch (error) {
        return false;
    }
}

export const getTokenInfo = () => {
    return decode(getToken());
}