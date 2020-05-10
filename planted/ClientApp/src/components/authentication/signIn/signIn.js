import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { authenticationLinks } from '../../../routing/links';
import { useAuthenticationStyles } from '../../../theme/styles'

const SignIn = (props) => {

    const classes = useAuthenticationStyles();

    const {
    email,
    password,
    emailError,
    passwordError,
    authenticationError,
    } = props.values;
    
    return (
        <form 
            onSubmit={props.onSubmit}
            className={classes.form}
        >

            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={props.onChange}
                autoFocus
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
                autoComplete="current-password"
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
                Sign In
            </Button>
            <p className='form-error'>{authenticationError}</p>

            <Grid container>

                <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>

                <Grid item>
                    <Link 
                        variant="body2"
                        component={authenticationLinks.signUpLink}
                    >
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </form>
    );
}

export default SignIn;