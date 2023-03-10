import foneBook from '../../images/foneBook2.gif';
import { Box, Paper, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Box sx={{ mx: 'auto' }}>
        <Paper elevation={3} sx={{ pt: 2, pb: 2 }}>
          <Typography align="center" variant="h5" gutterBottom>
            FoneBook - phone book aplication.
          </Typography>
          <Typography align="center" variant="subtitle1" gutterBottom>
            Manage your contacts for free.
          </Typography>

          <Box
            component="img"
            sx={{
              display: 'block',
              mx: 'auto',
              width: 360,
              // maxHeight: { xs: 233, md: 167 },
              // maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src={foneBook}
          />
        </Paper>
      </Box>
    </>
  );
}
