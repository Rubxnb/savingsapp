import { Box, Stack } from '@mui/material';
import { BankActivity, UserDataCard } from '../components';

export default function Home() {
  return ( 
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
  );
}