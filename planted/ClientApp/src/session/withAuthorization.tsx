import React, { Component, ComponentType, FC } from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { isSignedIn } from '../services/userService';
import AuthUserContext from './authUserContext';
import { Token } from '../types/authentication';
import * as routes from '../constants/routes';


interface WithAuthorizationState {
  authUser: Token | null
}

interface WithAuthorizationProps {
}

const withAuthorization = <P extends object>(InputComponent: ComponentType<P>) => {

  class WithAuthorization extends Component<RouteComponentProps<WithAuthorizationProps>, WithAuthorizationState> {
    componentDidMount() {
        if (!isSignedIn()) {
          this.props.history.push(routes.SIGN_IN);
        }
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => authUser ? <InputComponent {...this.props as P} authUser={authUser}/> : null}
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization);
}

export default withAuthorization;