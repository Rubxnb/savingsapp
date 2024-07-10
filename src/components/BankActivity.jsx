import { useContext } from 'react';
import { BankActivityContext } from '../context/bankActivity';
import { Card, CardContent, Typography, Grid, Stack } from '@mui/material';
import { RestaurantIcon, AddCardIcon, AccountBalanceIcon } from '../assets/icons';
import { activityTypeList } from '../mocks/activityTypeList.json';
import '../styles/BankActivity.css';

export default function BankActivity() {
  const { bankActivity } = useContext(BankActivityContext);

  const sortedBankActivities = bankActivity 
    && [...bankActivity].sort((a, b) => new Date(b.date) - new Date(a.date));

  const getActivityInfo = (type) => {
    return activityTypeList.find(activity => activity.type === type);
  };

  const icons = {
    'restaurant': <RestaurantIcon />,
    'transfer': <AddCardIcon />,
    'salary': <AccountBalanceIcon />
  };

  // Funcion para renderizar las actividades bancarias del .json
  function renderBankActivity(bankActivity) {
    const activityInfo = getActivityInfo(bankActivity.type);

    return (
      <Grid key={bankActivity.id} item xs={12} sx={{ paddingTop: '0.5rem' }}>
        <Card className='movement__card'
          sx={{ 
            borderRadius: '16px',
            boxShadow: '3',
            width: 'auto',
          }}>
          <CardContent sx={{paddingBottom: '0.7rem !important'}}>
            <Stack direction='column' spacing='0.5rem'>
              <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Stack direction='column' alignItems='flex-start'> 
                  <Stack 
                    direction='row' 
                    justifyContent='center' 
                    alignItems='center' 
                    spacing='0.5rem'
                  >
                    {icons[bankActivity.type]}
                    <Typography variant="h6" color='#007fff'>
                      <b>{activityInfo.label}</b>
                    </Typography>
                  </Stack>
                  <Typography variant="subtitle2">
                    {bankActivity.description}
                  </Typography>
                </Stack>
                <Stack direction='column' alignItems='flex-end'>
                  {activityInfo && activityInfo.action === 'expense' ? (
                    <Typography variant="h5" sx={{ color: '#cd5c5c' }}>
                  - {bankActivity.money}€
                    </Typography>
                  ) : (
                    <Typography variant="h5">
                      {bankActivity.money}€
                    </Typography>
                  )}
                  <Typography variant="subtitle2" sx={{ color: 'grey' }}>
                    {bankActivity.total}€
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="subtitle1" alignSelf='flex-start'>{bankActivity.date}</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  return (
    <main className='bankActivities'>
      <Grid container sx={{ maxWidth: '50rem' }}>
        {sortedBankActivities && sortedBankActivities.map(renderBankActivity)}
      </Grid>
    </main>
  );
}
