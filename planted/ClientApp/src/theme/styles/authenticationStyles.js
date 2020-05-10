import { makeStyles } from '@material-ui/core/styles';


export const useAuthenticationStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    heading: {
      margin: theme.spacing(2),
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(2),
    },
    authContent: {
      paddingTop: theme.spacing(8),
    }
  }));


  