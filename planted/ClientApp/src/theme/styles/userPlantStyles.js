import { makeStyles } from '@material-ui/core/styles';


export const useUserPlantStyles = makeStyles((theme) => ({
    gridList: {
        width: '100%',
        height: '100%'
    },
    gridListTileBar: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary
    },
    cardTitle: {
        textTransform: 'uppercase',
        fontWeight: 700,
        fontSize: '1rem',
        lineHeight: 1
    },
    cardSubtitle: {
        textTransform: 'uppercase',
        fontWeight: 300,
        fontSize: '.6875rem',
        letterSpacing: '.11063rem'          
    },
    cardMedia: {
        height: 140
    },
    cardActions: {
        padding: `0 !important`
    },
    cardButton: {
        width: '100%',
        borderRadius: `0  0 ${theme.spacing(3)}px ${theme.spacing(3)}px !important`
    }
}));


  