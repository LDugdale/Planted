import React from 'react';
import { withRouter } from 'react-router-dom';
import { isSignedIn } from '../services/userService';
import AuthUserContext from './authUserContext';
import * as routes from '../constants/routes';

const withAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
        if (!isSignedIn()) {
          this.props.history.push(routes.SIGN_IN);
        }
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => authUser ? <Component /> : null}
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization);
}

export default withAuthorization;