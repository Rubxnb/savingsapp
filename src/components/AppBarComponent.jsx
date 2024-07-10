import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeSwitch from './ThemeSwitch';

export default function AppBarComponent() {
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Savings App
        </Typography>
        <ThemeSwitch />
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}