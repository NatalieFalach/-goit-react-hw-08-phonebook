import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { Box, Button, Tooltip } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <Box sx={{ mt: '10px' }}>
        <Tooltip title={`Welcome ${user.name}!`}>
          <AccountBoxIcon fontSize="large" color="info" />
        </Tooltip>
      </Box>
      <Button variant="contained" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
