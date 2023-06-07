import { Box } from '@mui/material'
import { drawerWidth } from './SideNavigation';
export default function BodyColumn({children, fixed, bgcolor = true, pointerEvents = true}) {

  return (
    <Box sx={{
      width: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: {xs: 'flex-end', lg: 'center'},
      overflow: 'hidden',
      zIndex: 2,

      pointerEvents: !pointerEvents && 'none',
    }}>
      <Box sx={{
        width: 1,
        maxWidth: {xs: '100%', sm: `calc(100% - ${drawerWidth.sm}px)`, md: `calc(100% - ${drawerWidth.md}px)`, lg: 850}, //eeeeeewwwwwwwwwwwwwww
        flexGrow: 1, 
        px: {xs: 2, md: 4},
        pl: {lg: 8},
        position: fixed ? 'fixed' : 'relative',
        bgcolor: bgcolor && 'background.default',
        pb: !fixed && 10,

      }}>
        {children}
      </Box>
    </Box>
  )
}