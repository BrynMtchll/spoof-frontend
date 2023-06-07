import { Box } from '@mui/material';

export default function Divider() {
  return (
    <Box sx={{
      width: 0,
    }}>
      <Box sx={{
        borderBottom: 1,
        borderColor: 'divider',
        position: 'relative',
        width: '200vw',
        right: '100vw',
      }}>
      </Box>
    </Box>
  )
}