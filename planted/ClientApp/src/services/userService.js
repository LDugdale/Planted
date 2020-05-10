import { user } from '../data/server';
import { setToken, getToken, isTokenExpired, getTokenInfo } from  './tokenService';
 
export const createUser = (username, email, passwordOne) => {
    const credentials = {
        username: username,
        emailAddress: email,
        password: passwordOne
    }

    return new Promise((resolve, reject) => {
        user.createUser(credentials)
        .then((data) => {
            setToken(data.token);
            resolve()
        })
        .catch((error) => {
            reject(error)
        });
    });
}

export const signInUser = (email, password) => {

    let credentials = {
        emailAddress: email,
        password: password
    }

    return new Promise((resolve, reject) => {
        user.signInUser(credentials)
        .then((data) => {
            setToken(data.token);
            resolve()
        })
        .catch((error) => {
            reject(error)
        });
    });
    
}

export const isSignedIn = () => {
    const token = getToken() 
    return token && !isTokenExpired(token)
}

export const passwordReset = (email) => {
    //return auth.doPasswordReset(email);
}

export const getProfile = () => {
    const tokenInfo = getTokenInfo();
    return tokenInfo;
}