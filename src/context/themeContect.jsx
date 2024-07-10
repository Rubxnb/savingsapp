import { createTheme } from '@mui/material';
import { createContext, useEffect, useState } from 'react';

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

const saveThemeLocalStorage = (newTheme) => {
  window.localStorage.setItem('appTheme', JSON.stringify(newTheme));
};

export function ThemeContextProvider({ children }) {
  
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    
    const initialTheme = JSON.parse(window.localStorage.getItem('appTheme'));
    switch(initialTheme) {
    case 'dark': 
      setTheme(THEMES.DARK);
      break;

    case 'light': 
      setTheme(THEMES.LIGHT);
      break;
      
    default: 
      setTheme(THEMES.LIGHT);
      break;
      
    }

  }, []);
  
  const toggleTheme = (newTheme) => {
    if(newTheme === THEMES.LIGHT) {
      saveThemeLocalStorage('light');
      setTheme(lightTheme);
    } else {
      saveThemeLocalStorage('dark');
      setTheme(darkTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme, THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}