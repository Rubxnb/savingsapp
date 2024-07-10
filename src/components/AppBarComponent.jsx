import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material';
import { PersonIcon } from '../assets/icons';
import { green } from '@mui/material/colors';

export default function AppBarComponent() {
  return (
    <AppBar 
      sx={{background: '#5cb183'}}>
      <Toolbar>
        <Typography 
          variant="h4" 
          sx={{
            marginLeft: '3rem', 
            color: '#D71869', 
            fontWeight: 'bold'
          }}>
        Savings App
        </Typography>
        <img 
          style={{
            width: '50px', 
            marginLeft: '1rem'
          }} 
          src='/src/assets/appIcon.png'
            
        />
        <Box component="div" sx={{ flexGrow: 1}}></Box>
        
        <Avatar xs={{ bgcolor: green[500]}}>
          <PersonIcon xs={{size:'30px'}}/>
        </Avatar>
      </Toolbar>
    </AppBar>
  );
}