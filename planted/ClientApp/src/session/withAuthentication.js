import React from 'react';
import AuthUserContext from './authUserContext';
import { isSignedIn, getProfile } from '../services/userService';

const withAuthentication = (Component) =>
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      isSignedIn()
          ? this.setState(() => ({ authUser: getProfile() }))
          : this.setState(() => ({ authUser: null }));
    }

    render() {
      const { authUser } = this.state;

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  }

export default withAuthentication;