import Box from '@mui/material/Box';
import { keyframes } from '@mui/system';

export default function ListeningBars() {
  const barsMachine = () => {
    const bars = [];
    const delays = [0, 0.5, 0.6, 0.3]
    for (let i = 0; i < 4; i++) {
      const animationTime = 0.5;

      const animationDelay = 2 * animationTime / (i + 1);
      const styles = {
        bgcolor: 'hotPink',
        flexGrow: 1,
        animation: `animateBar ${animationTime}s linear -${delays[i]}s infinite alternate`,

        "@keyframes animateBar": {
          "0%": {
            height: 2,
          },
          "100%": {
            height: 12.5,
          }
        }
      }

      bars.push(<Box sx={styles}></Box>);
    }
    return bars;
  }
  return (
    <Box sx={{
      width: 15,
      height: 12.5,
      display: 'flex',
      alignItems: 'flex-end',
      gap: '1.5px',
    }}>
      {barsMachine()}
    </Box>
  )
}

