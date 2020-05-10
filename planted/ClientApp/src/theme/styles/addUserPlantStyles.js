import { makeStyles } from '@material-ui/core/styles';
import { theme } from '..';

export const useAddUserPlantStyles = makeStyles((theme) => ({
    headerWrapper: {
        textAlign: 'center',
    },
    title: {
        padding: '24px 0',
    },
    contentWrapper: {
        overflow: 'hidden',
        flexGrow: 2,
        borderRadius: theme.spacing(3),
        backgroundColor: theme.palette.background.default
    },
    typeContentWrapper: {
        backgroundColor: 'white',
        padding: theme.spacing(3),
        display: 'inline-flex'
    },
    textBox: {
        width: '100%',
        padding: `${theme.spacing(8)}px 8% ${theme.spacing(1)}px 8% !important`,
    },
    searchBox:{
        width: '100%',
        display: 'inline-flex',
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.spacing(1.5),
        padding: theme.spacing(3),
        height: 0,
    },
    listWrapper: {
        padding: `${theme.spacing(1)}px 8% !important`,
        flexGrow: 2,
        overflowY: 'scroll',
        backgroundColor: '#DDE8D5',
        borderRadius: theme.spacing(3),
    },
    listItem: {
        backgroundColor: 'white !important',
        marginBottom: `${theme.spacing(1)}px !important`,
        borderRadius: `${theme.spacing(1.5)}px !important`,
        color: `${theme.palette.primary.main} !important`,
    },
    listItemSelected: {
        backgroundColor: `${theme.palette.primary.main} !important`,
        marginBottom: `${theme.spacing(1)}px !important`,
        borderRadius: `${theme.spacing(1.5)}px !important`,
        color: `white !important`,
    },
    footerButtonWrapper: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(1),    
    }
  }));


  