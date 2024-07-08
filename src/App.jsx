import './styles/App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, CssBaseline, Stack } from '@mui/material';
import { UserDataCard, BankActivity } from './components';

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
      <Stack direction='column' spacing={2} justifyContent='center' alignItems='center'>
        <Box 
          sx={{
            display: 'flex',
            gap: '1rem',
            flexGrow: 1,
            flexFlow: 'row-gap'
          }}>
          <UserDataCard />
          {/* <PieChartCard /> */}
        </Box>
        <BankActivity />
      </Stack>

    </ThemeProvider>
  );
}

export default App;
