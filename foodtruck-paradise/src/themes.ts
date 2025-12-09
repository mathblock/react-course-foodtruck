import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8e24aa', // Purple 600
    },
    secondary: {
      main: '#ba68c8', // Purple 300
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ce93d8', // Purple 200
    },
    secondary: {
      main: '#f3e5f5', // Purple 50
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});
