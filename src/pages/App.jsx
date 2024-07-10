import { AppBarComponent, NavigationDrawer } from '../components';
import { Box } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from '../routes';

function App() {
  
  
  return (
    <>
      <AppBarComponent />
      <NavigationDrawer />
      <Box sx={{marginTop: '0.2rem', marginLeft:'4rem'}}>
        <RouterProvider router={router} />
      </Box>
    </>
  );
}

export default App;
