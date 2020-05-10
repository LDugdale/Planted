import { makeStyles } from '@material-ui/core/styles';


export const useRootStyles = makeStyles((theme) => ({
    rootContainer: {
        height: '100%',
        padding: 0,
        '&h3': {
            padding: 0,
            margin: 0
        }
    },
  }));


  