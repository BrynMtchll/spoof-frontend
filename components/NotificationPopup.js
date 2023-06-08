import { Box, Fade } from '@mui/material'
import useOnTrackRecieved from '@/hooks/useOnTrackRecieved'
import BodyColumn from '@/components/BodyColumn'
export default function NotificationPopup() {
  const {notificationDisplay, notificationMessage} = useOnTrackRecieved();

  return (
    <BodyColumn fixed={true} bgcolor={false} pointerEvents={false}>
      <Box sx={{
        width: 1,
        height: '100vh',
        p: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
        <Fade in={notificationDisplay} timeout={500}>
        <Box sx={{
              minWidth: 150,
              maxWidth: 300,
              textAlign: 'center',
              py: 1,
              px: 4,
              bgcolor: 'hotPink',
              borderRadius: 3,
            }}>
              recieved a track <br /> 
              {notificationMessage}
        </Box></Fade>
      </Box>
    </BodyColumn>
  )
}