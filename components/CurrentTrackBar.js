import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Track from './Track'
import { useTheme } from '@mui/material/styles';


export default function CurrentTrackBar() {
    const theme = useTheme()
    const height = 100;
    console.log(theme.palette);
    return (
        <Card elevation={1} sx={{ 
            position: 'fixed', 
            bottom: 0, 
            width: 1, 
            height: height, 
            zIndex: 1,
            borderTop: 1,
            borderColor: theme.palette.divider,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>
            <Track height={height}/>
            <Typography variant='body2' sx={{flexGrow: '1', color: theme.palette.text.secondary}}>Added by you</Typography>
            <Box sx={{width: 100, mr: 4, textAlign: 'right'}}>Kebab Icon</Box>
        </Card>

    )
}