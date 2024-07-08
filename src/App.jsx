import './styles/App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, CssBaseline, Stack, Button } from '@mui/material';
import { UserDataCard, BankActivity } from './components';
import { insertMovement } from './services/supabase/bankMovement';

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
const movement = {
  type: 'salary',
  money: 1200,
  total: 1500,
  description: 'Tus muerto perro sanxe'
};

const click = async () => {
  await insertMovement(movement);
}
function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Button onClick={click}>
        ADD MOVEMENT
      </Button>
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
