import React, { Component, ComponentType } from 'react';
import AuthUserContext from './authUserContext'
import { Token } from '../types/authentication';
import { isSignedIn, getProfile } from '../services/userService';

interface WithAuthenticationState {
  authUser: Token | null
}

interface WithAuthenticationProps {
}

const withAuthentication = (InputComponent: ComponentType) => {

  return class WithAuthentication extends Component<WithAuthenticationProps, WithAuthenticationState> {

    state: WithAuthenticationState = {
      authUser: null,
    };


    componentDidMount() {
      isSignedIn()
          ? this.setState(() => ({ authUser: getProfile() }))
          : this.setState(() => ({ authUser: null }));
    }

    render() {
      const { authUser } = this.state;

      return (

        <AuthUserContext.Provider value={authUser}>
          <InputComponent />
        </AuthUserContext.Provider>
      );
    }
  }
}
export default withAuthentication;