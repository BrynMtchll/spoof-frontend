import { Typography, Box } from '@mui/material';
import Track from '@/components/Track';
import Image from 'next/image'

export default function TrackList({ tracks }) {
  return (
    <>
      {
        tracks.map((track, i) => 
          <Track position={i+1} key={i} track={track} />
        )
      }
      {tracks.length != 0 && 
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 1,
        gap: 1,
        pt: {xs: 2, sm: 5},
      }}>
      <Typography variant='subtitle1' sx={{color: 'text.secondary', fontWeight: 500}}>Results fetched from </Typography> 
      <Image
      style={{height: '50%', objectFit: 'contain', width: '100px'}}
      src='/Spotify_Logo_CMYK_White.png'
      priority={true} 
      width={200}
      height={100}
      alt='profile picture' />
          </Box>
        }
    </>
  )
}