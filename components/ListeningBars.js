import Box from '@mui/material/Box';

export default function ListeningBars() {
    return (
        <Box sx={{
            width: 15,
            height: 15,
            display: 'flex',
            alignItems: 'flex-end',
            gap: '1.5px',
        }}>
            <Box sx={{
                flexGrow: 1,
                bgcolor: '#1DB954',
                height: 15,
            }}></Box>
            <Box sx={{
                flexGrow: 1,
                bgcolor: '#1DB954',
                height: 5
            }}></Box>
            <Box sx={{
                flexGrow: 1,
                bgcolor: '#1DB954',
                height: 10
            }}></Box>
            <Box sx={{
                flexGrow: 1,
                bgcolor: '#1DB954',
                height: 7
            }}></Box>
        </Box>
    )
}