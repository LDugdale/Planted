import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { userService, formService } from '../../../services';
import SignUpForm from './signUpForm';
import * as routes from '../../../constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  usernameError: '',
  emailError: '',
  passwordError: '',
  authenticationError: ''
};

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

    handleSubmit(event) {
      event.preventDefault();

      const {
        username,
        email,
        password
      } = this.state;

      const validationErrors = formService.validateSignUpFields(username, email, password);
      if(validationErrors){
        this.setState({...validationErrors});
      } else {

        userService.createUser(username, email, password)
        .then(() => {
          this.setState(() => ({ ...INITIAL_STATE }));
          this.props.history.push(routes.HOME);
        })
        .catch(authenticationError => {
          this.setState({authenticationError: authenticationError.error});
        });
      }
    }

    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });    
    }
    
  render(){
      return(
          <SignUpForm 
              values={this.state}
              isInvalid={this.isInvalid}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
          />     
      );
  }
}

export default withRouter(SignUpContainer);
