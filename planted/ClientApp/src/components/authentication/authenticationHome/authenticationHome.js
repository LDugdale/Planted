import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useAuthenticationStyles } from '../../../theme/styles';
import { authenticationLinks } from '../../../routing/links';

const AuthenticationHome = (props) => {

    const classes = useAuthenticationStyles();

    return (
        <>           
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                component={authenticationLinks.signUpLink}
            >
                Create New Account
            </Button>

            <Typography                     
                className={classes.submit}
            >
                <Link 
                    component={authenticationLinks.signInLink}
                >
                    Sign In
                </Link>
            </Typography>
        </>
    );    
}

export default AuthenticationHome;