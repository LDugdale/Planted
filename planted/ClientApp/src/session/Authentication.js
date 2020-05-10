import React, { Component } from 'react'
import { getProfile, isSignedIn } from '../services/userService';
import AuthUserContext from './authUserContext';

const INITIAL_STATE = {
    authUser: null
}

class Authentication extends Component{

    constructor(props){
    super(props);
    this.state = { ...INITIAL_STATE};
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
        {this.props.children}
      </AuthUserContext.Provider>
    );
  }
};

export default Authentication