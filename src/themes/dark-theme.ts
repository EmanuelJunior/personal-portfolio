import { createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: teal[400],
    },
    secondary: {
      main: "#dc004e",
    },
    error: {
      main: "#d32f2f",
    },
    background: {
      default: "#111",
      paper: "#222",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
        color: '#fff',
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
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 10,
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0f0f0f',
        },
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212',
        },
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: teal[400]
        },
      },
    }

  }
})