import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

let theme = createTheme({

  palette: {
    mode: 'dark',

    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#0d0d0d',
      paper: '#0d0d0d',
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      qs: 380, // quite small
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
      // custom: {
      //   light: '#ffa726',
      //   main: '#f57c00',
      //   dark: '#ef6c00',
      //   contrastText: 'rgba(0, 0, 0, 0.87)',
      // },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
})
theme = responsiveFontSizes(theme)

export default theme