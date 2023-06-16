import Image from 'next/image';

import { Box, Typography } from '@mui/material';

import ListeningBars from '@/components/ListeningBars';
import TrackMoreMenu from '@/components/TrackMoreMenu';


export default function Track(props) {
	const { height = 60, stripped = false, currentTrack = false, position, track, px = 1 } = props
	if (!track) return
	return (
		<Box sx={{ 
			height: height, 
			display: 'flex',
			gap: 2,
			py: 1,
			borderRadius: 0.7,		
			pl: px + 1,
			pr: px,
			width: 1,
			'&:hover': {
				// bgcolor: 'rgba(250, 250, 250, 0.1)',
			}
		}}>
			{!stripped && <Box sx={{
				height: 1,
				width: 20,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				{currentTrack && <ListeningBars/>}
				{position && <Typography variant="subtitle2" sx={{color: 'text.secondary'}}>{position}</Typography>}
			</Box>  }
			<Box sx={{ 
				aspectRatio : '1 / 1',
				height: 1, 
				bgcolor: 'hotPink',
				position: 'relative',
			}}>
				<Image 
					sizes="(max-width: 100px) 60px" 
					src={track.album_cover_url} 
					priority={true} fill={true} 
					alt='album cover' />
			</Box>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				width: 0,
				flexGrow: 1,
			}}>
				<Typography variant='subtitle2' sx={{
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					textOverflow:  'ellipsis',
					maxWidth: '100%',
					
				}}>{track.name}</Typography>
				<Typography variant='caption' sx={{ 
					fontWeight: '400',
					color: 'text.secondary',
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					textOverflow:  'ellipsis',
					maxWidth: '100%',
					}}>{track.artists[0]}</Typography>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
				<TrackMoreMenu track_id={track.track_id} />
			</Box>
		</Box>
	)
}