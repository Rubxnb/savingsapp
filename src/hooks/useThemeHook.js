import { createTheme } from '@mui/material';
import { useState } from 'react';

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

export function useThemeHook() {
  const [theme, setTheme] = useState(lightTheme);
  
  const toggleTheme = (newTheme) => {
    setTheme(newTheme === THEMES.LIGHT ? lightTheme : darkTheme);
  };

  return {currentTheme: theme, toggleTheme, THEMES};
}