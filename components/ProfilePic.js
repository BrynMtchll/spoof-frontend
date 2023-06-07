import Box from '@mui/material/Box'
import Image from 'next/image'

export default function ProfilePic(props) {
    const { width = 'auto', maxWidth = '100%', height = 'auto', profile_pic_url } = props
    return (
        <Box sx={{ 
            position: 'relative',
            aspectRatio : '1 / 1',
            width: width, 
            height: height,
            borderRadius: '50%', 
            boxShadow: '0 10px 20px #121212',
            flexShrink: 0,
            overflow: 'hidden',
            }}> 
            {profile_pic_url && 
                <Image style={{objectFit: "cover"}} 
                    src={profile_pic_url} 
                    priority={true} 
                    fill={true} 
                    alt='profile picture' />
            }
        </Box>
    )
}