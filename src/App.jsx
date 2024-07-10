import './styles/App.css';
import { AppBarComponent, NavigationDrawer } from './components';
import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline} from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { useThemeHook } from './hooks/useThemeHook';

function App() {
  const { currentTheme } = useThemeHook();
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
