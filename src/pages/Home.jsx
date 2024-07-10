import { Stack } from '@mui/material';
import { BankActivity, PieChartCard, UserDataCard } from '../components';

export default function Home() {
  return ( 
    <Stack direction='row'
      spacing={2}
      justifyContent='center'
      alignItems='start'>
      <Stack 
        direction='column' 
        justifyContent='flex-start'
        spacing={1}
        sx={{padding:'1rem'}}>
        <UserDataCard />
        <PieChartCard />
      </Stack>
      <Stack >
        <BankActivity />
      </Stack>

    </Stack>
  );
}