import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';
import { Box, Button } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        <Box className={css.logo} display={{ xs: 'none', md: 'block' }}></Box>
      </NavLink>

      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <Button variant="contained">Contacts</Button>
        </NavLink>
      )}
    </nav>
  );
};
