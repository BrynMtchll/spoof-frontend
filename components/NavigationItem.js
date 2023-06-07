import { Box, Typography, Link } from '@mui/material'
import { useRouter } from 'next/router';

export default function NavigationItem({icon, label, href, type}) {
  const router = useRouter();
  const tabStyles = {
    height: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const sideItemStyles ={
    m: 2.5,
    ml: 3.5,
    gap: 2,
  }

  return (
    <Link sx={{flexGrow: 1, width: 0 }} href={href} underline="none" color="inherit">
      <Box sx={{
        color: router.pathname == href ? 'hotPink' : 'inherit', 
        display: 'flex',
        transition: 'opacity 0.4s',

        '&:hover': {
          opacity: router.pathname != href && '0.75',
        },
      
        ...(type == "side" && sideItemStyles),
        ...(type == "tab" && tabStyles),
        
      }}>
        {icon}
        <Typography variant={type == 'tab' ? 'caption' : 'body1'}>{label}</Typography>
      </Box>
    </Link>

  )
}