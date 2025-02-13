import React, {createContext, useState} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { darkTheme, lightTheme } from './theme/Theme';
import Routes from './routes/Routes';

const ThemeContextHandler = createContext();
const App = () => {

  const [theme, setTheme] = useState('dark');

  const handleThemeChange = (theme) => {
    setTheme(theme);
  }


  return (
    <ThemeProvider theme={(theme==='dark') ? darkTheme : lightTheme}>
      <CssBaseline />
      <ThemeContextHandler value={{ handleThemeChange, theme } }>
        <Routes />
      </ThemeContextHandler>
    </ThemeProvider>
  );
}

export {ThemeContextHandler}
export default App;
