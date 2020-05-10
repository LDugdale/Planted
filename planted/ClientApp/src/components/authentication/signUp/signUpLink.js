import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../constants/routes';

export const SignUpLink = () =>
  <p className="sign-up-link">
    <Link to={routes.SIGN_UP}>CREATE NEW PLANTED ACCOUNT</Link>
  </p>