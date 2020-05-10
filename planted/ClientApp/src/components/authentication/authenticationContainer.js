import React from 'react';
import { AuthRoutes } from '../../routing';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useAuthenticationStyles } from '../../theme/styles';


const AuthenticationContainer = () => {

    const classes = useAuthenticationStyles();

    return(
        <Container 
            maxWidth="xs"
        >

            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.authContent}
            >
                <Typography 
                    className={classes.heading}
                    component="h1" 
                    variant="h5"
                >
                    Planted
                </Typography>

                <AuthRoutes />
            </Grid>

        </Container>
    );
}

export default AuthenticationContainer;