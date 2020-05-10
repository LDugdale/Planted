import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { userService, formService } from '../../../services';
import SignIn from './signIn';
import * as routes from '../../../constants/routes';

const INITIAL_STATE = {
  email: '',
  emailError: '',
  password: '',
  passwordError: '',
  authenticationError: ''
};

class SignInContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    const {
      email,
      password,
    } = this.state;

    const validationErrors = formService.validateSignInFields(email, password)
    if(validationErrors){
      this.setState({...validationErrors});
    } else {
      
      userService.signInUser(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        this.props.history.push(routes.HOME);
      })
      .catch(authenticationError => {
        this.setState({authenticationError: authenticationError.message});
      });   
    }
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return (
      <SignIn 
        values={this.state}
        isInvalid={this.isInvalid}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }  
}

export default withRouter(SignInContainer);