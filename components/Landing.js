import { Box, Button, Typography } from '@mui/material';
import { signIn } from 'next-auth/react';
import LandingVisual from './LandingVisual';

export default function Landing() {
  const handleSignIn = e => {
    e.preventDefault();
    signIn("spotify");
  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center', 
      height: '100vh',
      px: {xs: 4, qs: 8},
      pl: {md: 15, lg: 20},
      pb: 20,
      position: 'relative',
    }}>

      <LandingVisual />
      
      <Box sx={{
        maxWidth: 850,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}>
        <Typography variant="h2" sx={{fontWeight: '500'}}>
          Spoof
        </Typography>
        <Typography variant="subtitle1" sx={{fontWeight: '400'}}>
          See and add songs to the Spotify queue of spoof users nearby you
        </Typography>
        <Button 
          onClick={handleSignIn}
          sx={{
            alignSelf:"flex-end", 
            p: 1,
            color: 'hotPink',
            transition: 'background-color 0.4s',

            '&:hover': {
              bgcolor: 'rgba(255, 105, 180, 0.1)'
            }
          }}
      >
          Log in with spotify
        </Button>
      </Box>
    </Box>
  )
}