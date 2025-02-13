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
      background: {
        primary: '#1f2326'
      },
      table: {
        border:{
          primary: '#fff'
        }
      }
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
      background: {
        primary: 'lightgray'
      },
      table: {
        border:{
          primary: '#cccccc'
        }
      }
    },
  })