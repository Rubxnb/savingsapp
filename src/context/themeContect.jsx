import { createTheme } from '@mui/material';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
}); 

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const THEMES = {
  LIGHT: lightTheme,
  DARK: darkTheme
};

export function ThemeContextProvider({ children }) {

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme === THEMES.LIGHT ? lightTheme : darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme, THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}