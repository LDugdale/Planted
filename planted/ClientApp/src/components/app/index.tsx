import React from 'react';
import withAuthentication from '../../session/withAuthentication';
import { InitialRoutes } from '../../routing';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import { useRootStyles } from '../../theme/styles';
import { theme } from '../../theme';
import 'typeface-lato';

const App = () => {

  const classes = useRootStyles();

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Container className={classes.rootContainer}>
            <InitialRoutes />
          </Container>
        </CssBaseline>
      </ThemeProvider>
    );
}
export default withAuthentication(App);