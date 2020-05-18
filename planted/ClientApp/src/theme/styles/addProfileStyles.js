import { makeStyles } from '@material-ui/core/styles';

export const useProfileStyles = makeStyles((theme) => ({
    tabbedMenu: {
        backgroundColor: theme.palette.common.white,
        borderRadius: `0 0 ${theme.spacing(5)}px ${theme.spacing(5)}px!important`,
    },
    avatar: {
        width: `${theme.spacing(11)}px !important`,
        height: `${theme.spacing(11)}px !important`,
        marginBottom: theme.spacing(1)
    },
    headerBackground: {
        backgroundColor: theme.palette.common.white,
        display: 'flex',
        flexDirection: 'column',
        padding: `0 ${theme.spacing(6)}px`
    },
    headerInfoWrapper: {
        display: 'flex',
        flexDirection: 'column'
    },
    headerActionWrapper: {

    },
    activityItemWrapper: {
        borderRadius: `${theme.spacing(0.5)}px ${theme.spacing(2.5)}px ${theme.spacing(2.5)}px ${theme.spacing(2.5)}px`,
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing(2)
    }
  }));


  