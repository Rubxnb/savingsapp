import { useState } from 'react';
import { userData as initialUserData} from '../mocks/userData.json';
import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { ArrowUpwardIcon, ArrowDownwardIcon } from '../assets/icons';

export default function UserDataCard() {

  const [userData] = useState(initialUserData);

  return (
    <div>
      <Card
        sx={{
          maxWidth: '25rem',
          borderRadius: '16px',
          boxShadow: '3'
        }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" textAlign='center'>{userData.name} {userData.surname}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" textAlign='center'>{userData.totalMoney}€</Typography>
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