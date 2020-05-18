import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
const defaultTheme = createMuiTheme();

const primaryColor = '#739a5b'
//#81aa68
//#1c1c29
const backgroundColor = '#DDE8D5'
// #f3f9ef
// DDE8D5
const transparentWhiteColor = '#ffffff9e'

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Lato',
      'Helvetica Neue',
      'Helvetica',
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(',')
  },
  palette:{
      primary: {
        main: primaryColor
      },
      background: {
        default: backgroundColor,
      },
      backgroundColor: {
        primary: backgroundColor
      }
    },
    overrides: {
      MuiAppBar:{
        positionStatic: {
          boxShadow: 'none',
        }
      },
      MuiContainer: {
        root: {
          backgroundColor: backgroundColor
        },
      },
      MuiInputBase: {
        formControl: {
          backgroundColor: 'white !important'
        }
      },
      MuiOutlinedInput: {
        notchedOutline: {
          border: 'none !important'
        },
        root:{
          borderRadius: defaultTheme.spacing(1.5)
        }
      },
      MuiGridListTile: {
        tile: {
          borderRadius: defaultTheme.spacing(3)
        }
      },
      MuiGridListTileBar: {
          root: {
            backgroundColor: defaultTheme.palette.background.paper,
          },
          titleWrap: {
            color: defaultTheme.palette.text.primary
          },
      },
      MuiBottomNavigation: {
        root: {    
          width: '100%',
          position: 'fixed',
          bottom: 0,          
        }
      },
      MuiAvatar: {
        root: {
          borderRadius: defaultTheme.spacing(2)
        }
      },
      MuiListItem: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
        },
        gutters: {
          paddingLeft: defaultTheme.spacing(5),
          paddingRight: defaultTheme.spacing(2),
        }
      },
      MuiList: {
        padding:{
          paddingTop: 0,
          paddingBottom: 0,
        }
      }
    }  
});
theme = responsiveFontSizes(theme);

export { theme };