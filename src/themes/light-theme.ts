import { createTheme } from '@mui/material/styles';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#dc004e',
    },
    error: {
      main: '#d32f2f',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
        color: '#000',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 10,
          color: '#000',
        },
      },
    },
  },
});
