import './styles/App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { UserDataCard, PieChartCard } from './components';

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
      <Box className="w-fit"
        sx={{
          display: 'flex',
          gap: '1rem'
        }}>
        <UserDataCard/>
        <PieChartCard/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
