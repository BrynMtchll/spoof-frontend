import { Box, Typography } from '@mui/material';
import Track from '@/components/Track';
import TrackList from '@/components/TrackList';
import ProfilePic from '@/components/ProfilePic';
import Divider from '@/components/Divider';

const subheaderStyle ={
	fontWeight: 'bold',
	color: 'text.secondary',
	pb: 1,
	pt: 4,
}

export default function Queue({profile, queue}) {
	return (
			<>
				<Box sx={{
					display: 'flex',
					alignItems: 'flex-end',
					gap: 4,
					pt: 8,
					py: 4,
				}}>
					<ProfilePic width={'calc(10% + 100px)'} profile_pic_url={profile.profile_pic_url} />
					{profile.display_name && <Typography variant="h2" sx={{ fontWeight: 'bold'}}>{profile.display_name}&apos;s queue</Typography>}
				</Box>
				<Divider />
				<Box>
					<Typography variant='subtitle1' sx={{ ...subheaderStyle }}>Currently Playing</Typography>
					<Track track={queue[0]} currentTrack={true}/>
				</Box>
				<Box>
				<Typography variant='subtitle1' sx={{ 
						...subheaderStyle,
					}}>Next Up</Typography>
					
					<TrackList tracks={queue.slice(1)} />
				</Box>
		</>
	)
}