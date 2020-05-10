import { makeStyles } from '@material-ui/core/styles';

export const useHeaderStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.common.white
    },
    icon: {
        color: theme.palette.common.black
    },
    spacer: {
        flexGrow: 1
    }
}));


  