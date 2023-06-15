import { Box, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

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
					gap: {xs: 2, md: 4},
					pt: 8,
					py: 4,
				}}>
					<ProfilePic width={'calc(10% + 110px)'} profile_pic_url={profile.profile_pic_url} />
					<Box sx={{
						alignSelf: 'stretch',
						display: 'flex',
						justifyContent: 'flex-end',
						gap: 1,
						flexDirection: 'column',
					}}>
					{profile.display_name && 
						<Typography sx={{
							fontSize: profile.display_name.length < 8 ? {xs: 'h2.fontSize', md: 'h1.fontSize'}
								: {xs: 'h4.fontSize', sm:'h3.fontSize', md: 'h2.fontSize'}, 
							lineHeight: 'normal', 
							fontWeight: 'bold',
							display: 'flex',
							alignItems: 'flex-end',

						}}>
							{profile.display_name}&apos;s queue
						</Typography>}
						<a 
              href={`spotify:user:${profile.user_id}`} 
              style={{
								textDecoration: 'none',
								 color: 'inherit', 
								 alignSelf: 'flex-start'
							}}
              rel="noopener noreferrer"
            >
							<Box sx={{
								display: 'flex',
								gap: 1,
								alignItems: 'center',
								borderBottom: 1,
								borderColor: 'background.default',
								'&:hover': {
									cursor: 'pointer',
									borderColor: 'text.primary',
								}
							}}>
								<Typography variant='body2' sx={{position: 'relative', bottom: -1}}>view profile
								</Typography>
								<LaunchIcon sx={{fontSize: 'small', position: 'relative', bottom: -1}} />
							</Box>
						</a>
					</Box>
					
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