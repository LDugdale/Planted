import validator from 'validator';
import * as form from '../constants/form';

export const validateSignInFields = (email, password) => {
    let emailError = validateEmail(email);
    let passwordError = validatePassword(password);

    if(emailError || passwordError){

        let errors = {
            emailError: emailError,
            passwordError: passwordError
        };

        return errors;
    }

}

export const validateSignUpFields = (username, email, password) => {
        
    let emailError = validateEmail(email);
    let passwordError = validatePassword(password);
    let usernameError  = validateUsername(username);

    if(emailError || passwordError || usernameError){
        let errors = {
            emailError: emailError,
            passwordError: passwordError,
            usernameError: usernameError
        };

        return errors;
    }

}

const validateUsername = (username) => {
    let usernameError;
    if(!username){
        usernameError = form.EMPTY_PASSWORD;
    }
    return usernameError;
}

const validateEmail = (email) => {
    let emailError;
    if(!email){
        emailError = form.EMPTY_EMAIL;
    } else if(!validator.isEmail(email)){
        emailError = form.INVALID_EMAIL;
    }
    return emailError;
}

const validatePassword = (password) => {

    let passwordError;
    
    if(!password){
        passwordError = form.EMPTY_PASSWORD;
    }

    return passwordError;
}