import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: teal[600],
    },
    info: {
      main: '#fff'
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
        color: '#000'
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        color: 'secondary',
        variant: 'text',
      },
      styleOverrides: {
        root: {
          fontWeight: 400,
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 10,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: teal[500]
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: teal[500]
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid #eee'
        },
      },
    }
  },
});
