import { useEffect, useState } from 'react';
import { userData as initialUserData} from '../mocks/userData.json';
import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { ArrowUpwardIcon, ArrowDownwardIcon } from '../assets/icons';

export default function UserDataCard() {

  const [userData] = useState(initialUserData);
  const [name, setName] = useState('');
  
  useEffect(() => {
    const alias = userData.alias[Math.floor(Math.random() * ((userData.alias.length - 1) - 0 + 1)) + 0];
    setName(`${userData.name} "${alias}" ${userData.surname}`);
  }, [userData]);

  return (
    <div>
      <Card
        sx={{
          maxWidth: '40rem',
          borderRadius: '16px',
          boxShadow: '3'
        }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">{name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">{userData.totalMoney}€</Typography>
            </Grid>
            <Grid item xs={6}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                color="green"
              >
                <ArrowUpwardIcon fontSize="large"/>
                <Typography variant="h4">{userData.income}€</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                color="#cd5c5c"
              >
                <ArrowDownwardIcon fontSize="large"/>
                <Typography variant="h4">{userData.expenses}€</Typography>
              </Stack>
              
            </Grid>
            <Grid item xs={12}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                color="grey"
              >
                <Typography variant="h5">Ahorro Total: { userData.income - userData.expenses}€</Typography>
              </Stack>
              
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}