import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { CircularProgress, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const Layout = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <AppBar />
        <Suspense
          fallback={
            <CircularProgress
              sx={{ display: 'block', margin: '0 auto' }}
              color="inherit"
            />
          }
        >
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} duration={2500} />
      </Container>
    </ThemeProvider>
  );
};
