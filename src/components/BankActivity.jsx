import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddCardIcon from '@mui/icons-material/AddCard';

import { activityTypeList } from '../mocks/activityTypeList.json';

export function BankActivity({ bankActivities }) {

  const sortedBankActivities = [...bankActivities].sort((a, b) => new Date(b.date) - new Date(a.date));

  const getActivityInfo = (type) => {
    return activityTypeList.find(activity => activity.type === type);
  };

  const icons = {
    'restaurant': <RestaurantIcon />,
    'transfer': <AddCardIcon />,
    'salary': <AccountBalanceIcon />
  };

  return (
    <main className='bankActivities'>
      <Grid container spacing={2}>
        {sortedBankActivities.map((bankActivity) => {

          const activityInfo = getActivityInfo(bankActivity.type);

          return (
            <Grid key={bankActivity.id} item xs={12}>
              <Card variant="elevation" sx={{ borderRadius: 2, width: '100%' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', paddingLeft: 5 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                      {icons[bankActivity.type]}
                      <Typography variant="h5" component="div" sx={{ color: '#007fff', ml: 2 }}>
                        <strong>{activityInfo.label}</strong>
                      </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ textAlign: 'left', marginTop: 2 }}>{bankActivity.description}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignSelf: 'center', marginLeft: 'auto' }}>
                    {activityInfo && activityInfo.action === 'expense' ? (
                      <Typography variant="h4" sx={{ color: '#cd5c5c' }}> - {bankActivity.money}€</Typography>
                    ) : (
                      <Typography variant="h4"> {bankActivity.money}€</Typography>
                    )}

                  </Box>
                </CardContent>
                <CardContent sx={{ display: 'flex', flexDirection: 'row', marginTop: 2, paddingLeft: 5 }}>
                  <Typography variant="subtitle1">{bankActivity.date}</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
}
