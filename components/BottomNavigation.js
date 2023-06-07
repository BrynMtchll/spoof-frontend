import { Box } from '@mui/material';

export default function BottomNavigation({ children }) {
  return (
    <Box
      sx={{
        position: 'fixed', 
        bottom: 0, 
        width: 1, 
        zIndex: 3,
        borderTop: 1,
        borderColor: 'divider',
        display: {xs: 'flex', sm: 'none'},
        bgcolor: 'background.default',
        height: 60,
      }}
    >
      {children}
    </Box>
  )
}