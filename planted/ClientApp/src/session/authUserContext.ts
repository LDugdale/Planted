import React, { createContext } from 'react';
import { Token } from '../types/authentication';

const AuthUserContext = createContext<Token | null>(null);

export default AuthUserContext;