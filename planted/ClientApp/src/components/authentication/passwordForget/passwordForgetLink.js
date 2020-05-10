import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../constants/routes';

export const PasswordForgetLink = () =>
    <p className="forget-password-link">
        <Link to={routes.PASSWORD_FORGET}>FORGOTTEN PASSWORD?</Link>
    </p>
