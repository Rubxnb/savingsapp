import './styles/App.css';
import { AppBarComponent, NavigationDrawer } from './components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, CssBaseline} from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

/* const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
}); */

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
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
