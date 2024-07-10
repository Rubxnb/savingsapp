import './styles/App.css';
import { AppBarComponent, NavigationDrawer } from './components';
import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline} from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { ThemeContext } from './context/themeContect';
import { useContext } from 'react';

function App() {
  
  const { currentTheme } = useContext(ThemeContext);
  
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <AppBarComponent />
      <NavigationDrawer />
      <Box sx={{marginTop: '5rem'}}>
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
