import { useContext } from 'react';

import { Box, Fade } from '@mui/material';

import BodyColumn from '@/components/BodyColumn';
import { FeedbackContext } from '@/components/Context';

export default function FeedbackPopup() {
  const { feedbackDisplay, feedbackMessage } = useContext(FeedbackContext);
  
  return (
    <BodyColumn fixed={true} bgcolor={false} pointerEvents={false}>
      <Box sx={{
        width: 1,
        height: '100vh',
        pb: {xs: 8, sm: 3},
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        pointerEvents: 'none',
      }}>
        <Fade in={feedbackDisplay} timeout={500}>
        <Box sx={{
              minWidth: 200,
              maxWidth: 350,
              textAlign: 'center',
              py: 2,
              px: 4,
              bgcolor: 'hotPink',
              borderRadius: 3,
            }}>
              {feedbackMessage}
        </Box></Fade>
      </Box>
    </BodyColumn>
  )
}