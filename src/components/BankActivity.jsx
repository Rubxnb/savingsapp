import { useContext } from 'react';
import { BankActivityContext } from '../context/bankActivity';
import { Card, CardContent, Typography, Box, Grid, Stack } from '@mui/material';
import { RestaurantIcon, AddCardIcon, AccountBalanceIcon } from '../assets/icons';
import { activityTypeList } from '../mocks/activityTypeList.json';

export default function BankActivity() {
  const { bankActivity } = useContext(BankActivityContext);

  const sortedBankActivities = [...bankActivity].sort((a, b) => new Date(b.date) - new Date(a.date));

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
      <Grid key={bankActivity.id} item xs={12}>
        <Card variant="elevation" sx={{ borderRadius: 2, width: 'auto' }}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'row',
              paddingLeft: 5,
              justifyContent: 'space-between'
            }}>
            <Stack>
              <Stack direction='row' alignItems='center'>
                {icons[bankActivity.type]}
                <Typography variant="h6" component="div" sx={{ color: '#007fff', ml: 2 }}>
                  <strong>{activityInfo.label}</strong>
                </Typography>
              </Stack>
              <Typography variant="p" sx={{ textAlign: 'left' }}>
                {bankActivity.description}
              </Typography>
            </Stack>
            <Stack direction='column' alignItems='flex-end' ml={2}>
              {activityInfo && activityInfo.action === 'expense' ? (
                <Typography variant="h5" sx={{ color: '#cd5c5c' }}>
                  - {bankActivity.money}€
                </Typography>
              ) : (
                <Typography variant="h5">
                  {bankActivity.money}€
                </Typography>
              )}
              <Typography variant="p" sx={{ color: 'grey' }}>
                {bankActivity.total}€
              </Typography>
            </Stack>
          </CardContent>
          <CardContent sx={{ display: 'flex', paddingLeft: 5 }}>
            <Typography variant="subtitle1">{bankActivity.date}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  return (
    <main className='bankActivities'>
      <Grid container spacing={2} sx={{ maxWidth: '50rem' }}>
        {sortedBankActivities.map(renderBankActivity)}
      </Grid>
    </main>
  );
}
