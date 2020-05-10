import { postData } from './helpers';

export const createUser = (credentials) => {
    let path = 'https://localhost:44347/api/User/SignUp';

    return postData(path, credentials); 
}

export const signInUser = (credentials) => {
    let path = 'https://localhost:44347/api/User/SignIn';
    return postData(path, credentials); 
}
