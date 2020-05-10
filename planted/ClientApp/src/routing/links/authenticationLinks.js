import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

export const signInLink = React.forwardRef((props, ref) => (
    <Link ref={ref} to={routes.SIGN_IN} {...props} />
));

export const signUpLink = React.forwardRef((props, ref) => (
    <Link ref={ref} to={routes.SIGN_UP} {...props} />
));

export const forgotPasswordLink = React.forwardRef((props, ref) => (
    <Link ref={ref} to={routes.PASSWORD_FORGET} {...props} />
));
    