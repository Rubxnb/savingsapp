import './styles/App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { UserDataCard } from './components/UserDataCard';

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
      <Box className="w-fit">
        <UserDataCard/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
