import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { authenticationLinks } from '../../../routing/links';
import { useAuthenticationStyles } from '../../../theme/styles'

const SignUpForm = (props) =>{

    const classes = useAuthenticationStyles();

    const {
        username,
        email,
        password,
        usernameError,
        emailError,
        passwordError,
        authenticationError
      } = props.values;
  
      return (
        <form 
          onSubmit={event => props.onSubmit(event)}
          className={classes.form}
        >

            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                onChange={props.onChange}
                autoFocus
            />
            <p className='form-error'>{usernameError}</p>

            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={props.onChange}
            />
            <p className='form-error'>{emailError}</p>

            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={props.onChange}
            />
            <p className='form-error'>{passwordError}</p>

            <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
            >
                Sign Up
            </Button>
          <p className='form-error'>{authenticationError}</p>

          <Grid container justify="flex-end">
            <Grid item>
              <Link 
                variant="body2"
                component={authenticationLinks.signInLink}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      );
}

export default SignUpForm;