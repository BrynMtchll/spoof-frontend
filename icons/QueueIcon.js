import { Box } from '@mui/material';

export default function QueueIcon() {

  return (
    <Box sx={{
      width: 23,
      height: 23,
      p: '3px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Box sx={{
        width: 1,
        height: '5px',
        border: 2,
        borderRadius: 2,
      }}></Box>
      <Box sx={{
        width: 1,
        border: 1,
        borderRadius: 2,
      }}></Box>
      <Box sx={{
        width: 1,
        border: 1,
        borderRadius: 2,
      }}></Box>
    </Box>
  ) 

}