import { Drawer, Box } from '@mui/material'
export const drawerWidth = {sm: 190, md: 220, lg: 220};

export default function SideNavigation({children }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width:  drawerWidth,
        zIndex: 3,
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      <Box>
      {children}
      </Box>
  
  </Drawer>
  )
  
}