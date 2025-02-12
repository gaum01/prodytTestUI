import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    typography: {
        fontFamily: [
          'Roboto',
          'sans-serif',
        ].join(','),
    },
    palette: {
      mode: 'dark',
    },
  });

  export const lightTheme = createTheme({
    typography: {
        fontFamily: [
          'Roboto',
          'sans-serif',
        ].join(','),
    },
    palette: {
      mode: 'light',
    },
  })