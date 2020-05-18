import { makeStyles } from '@material-ui/core/styles';

export const useActivityStyles = makeStyles((theme) => ({
    spacerListItem: {
        height: theme.spacing(4)    
    },
    activityItemWrapper: {
        borderRadius: `${theme.spacing(0.5)}px ${theme.spacing(2.5)}px ${theme.spacing(2.5)}px ${theme.spacing(2.5)}px`,
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing(2),
        marginTop: `${theme.spacing(1.5)}px !important`,
        marginBottom: `${theme.spacing(1.5)}px !important`
    },
    activityDivider: {
        backgroundColor: `${theme.palette.common.black} !important`
    },
    flippedIcon: {
        transform: 'scaleX(-1)',
        marginLeft: '-1em'
    }
  }));


  