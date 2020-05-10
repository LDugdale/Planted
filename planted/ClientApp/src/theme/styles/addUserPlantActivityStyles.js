import { makeStyles } from '@material-ui/core/styles';


export const useAddUserPlantActivityStyles = makeStyles((theme) => ({
    avatar: {
      margin: '0 auto !important',
    },
    headerButton: {
      alignSelf: 'center',
      boxShadow: 'none !important',
    },
    activityButtonsWrapper: {
      padding: theme.spacing(5),
      backgroundColor: 'white',
      borderRadius: `0 0 ${theme.spacing(5)}px ${theme.spacing(5)}px`
    },
    activityButtons: {
      width: '100%',
      backgroundColor: 'transparent !important'
    },
    activityButton: {
      color: `${theme.palette.primary.main} !important`,
      backgroundColor: `${theme.palette.backgroundColor.primary} !important`,
      margin: '0 auto !important',
      display: 'block !important',
      border: `0 !important`,
      borderRadius: `${theme.spacing(1)}px !important`,
    },
    activityButtonsSelected: {
      color: 'white !important',
      backgroundColor: `${theme.palette.primary.main} !important`,
    },
    postText: {
      width: '100%'
    },
    header: {
      top: 0,
      left: 0,
      width: '100%',
      padding: `0 ${theme.spacing(1)}px 0 ${theme.spacing(1)}px`,
      backgroundColor: 'white'
    },
    headerGrid: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(2),
    },
    acitivityType: {
      padding: `${theme.spacing(4)}px 0`,
      textAlign: 'center',
    },
    postWrapper: {
      display: 'flex',
      padding: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`
    },
    inputWrapper: {
      flexGrow: 4,
      paddingLeft: theme.spacing(2)
    },
    input: {
      display: 'none'
    },
    post: {
      flexGrow: 2,
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      padding: `${theme.spacing(3)}px ${theme.spacing(1)}px`,
      backgroundColor: 'white',
      borderRadius: `${theme.spacing(5)}px ${theme.spacing(5)}px 0 0 !important`,
      textAlign: 'center'
    },
    footerButton: {
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: 'white !important',
      margin: `0 ${theme.spacing(1.5)}px !important`,
      borderRadius: `${theme.spacing(1)}px !important`,
    },
    selectedImageWrapper: {
      width: '100%',
      overflowX: 'scroll',
      overflowY: 'hidden',
      whiteSpace: 'nowrap',
    },
    selectedImages: {
      position: 'relative',
      display: 'inline-block',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    selectedImagesFirst: {
      marginLeft: theme.spacing(9),
      position: 'relative',
      display: 'inline-block',
    },
    selectedImage: {
      height: '190px',
      borderRadius: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    cancelImage: {
      position: 'absolute',
      right: '0px',
      marginRight: theme.spacing(2),
      color: 'white',
    }
}));


  