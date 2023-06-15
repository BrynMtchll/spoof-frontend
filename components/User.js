import { Typography, Box, Paper } from '@mui/material';
import Link from 'next/link';

import Track from '@/components/Track';
import ProfilePic from '@/components/ProfilePic';
import ListeningBars from '@/components/ListeningBars';

import useQueueSubscribe from '@/hooks/useOnQueueUpdated';


export default function User({ user }) {
  const { user_id } = user;
  let queue = useQueueSubscribe({ user_id });
  if (!queue.length) queue = user.queue

  const href = {
    pathname: `/queue/${user.user_id}`,
    query: {
      display_name: user.display_name,
      profile_pic_url: user.profile_pic_url,
    }
  }
  return (
    <Paper elevation={1} sx={{
        borderRadius: 2,
        boxShadow: 0,
        '&:hover': {
            background: 'rgba(250,250,250,0.1)'
        },
        pb: 3,
        position: 'relative',
      }}>
        <Link href={href} style={{ textDecoration: 'none' }}>
          <Box sx={{
            width: 1,
            height: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,            
          }}></Box>
        </Link>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        py: 2,
        
      }}>
        <Box sx={{px: 2}}><ProfilePic profile_pic_url={user.profile_pic_url}/></Box>
          <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: 2,
          }}>
              <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{user.display_name}</Typography>
              {queue.length != 0 && <ListeningBars />}
          </Box>
        <Box sx={{zIndex: 2, height: 60, px: 1,}}>
            <Track stripped={true} track={queue[0]} px={0} />
        </Box>
    </Box>
    </Paper>
  )
};