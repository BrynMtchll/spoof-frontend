import {  signOut } from 'next-auth/react';
import { useContext, useState } from 'react';

import { Typography, Paper, Menu, MenuItem, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { DataContext } from '@/components/Context';
import BodyColumn from '@/components/BodyColumn';
import ProfilePic from '@/components/ProfilePic';


export default function ProfileMenu() {
  const { profile } = useContext(DataContext);
	const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const openMenu = async (event) => {
		setAnchorEl(event.currentTarget);
	};
  const closeMenu = () => {
		setAnchorEl(null);
	};

  const handleSignOut = () => {
    closeMenu();
    signOut({callbackUrl: 'http://localhost:3000'});
  }
  return (
    <>
    <Box sx={{pointerEvents: 'none'}}>
      <BodyColumn fixed={true} bgcolor={false}>
            <Paper
              onClick={openMenu}
              elevation={3} 
              sx={{
                position: 'relative',
                float: 'right',
                my: 1,
                gap: 1,
                display: 'flex',
                height: 40,
                width: {xs: 40, md: 'auto'},
                maxWidth: {md: 150},
                alignItems: 'center',
                borderRadius: 100,
                p: 0.5,
                pointerEvents: 'auto',
                overflow: 'hidden',

                '&:hover': {
                  bgcolor: 'rgba(250, 250, 250, 0.1)',
                  cursor: 'pointer',
                }
              }}
            >
              <ProfilePic height={1} profile_pic_url={profile.profile_pic_url} />
              <Typography sx={{ 
                fontWeight: 'bold', 
                whiteSpace: 'nowrap',
                textOverflow:  'ellipsis',
                overflow: 'hidden',
                flexGrow: 1,
              }}>{profile.display_name}</Typography>

              <ArrowDropDownIcon sx={{float: 'right', mr: 1,}} />
            </Paper>
        </BodyColumn>
      </Box>
      <Menu
        id='nested-menu'
        open={open}
        anchorEl={anchorEl}
        onClose={closeMenu}
        sx={{
          '& .MuiMenu-list': {
            p: 0.5,
          },
          '& .MuiMenu-paper': {
            width: '15ch',
          },
          mt: 0.5,
        }}
      >
        <MenuItem 
          sx={{
            py: 1, 
            borderRadius: 0.5,
          }}
          onClick={handleSignOut}
        >
          <Typography variant='body2'>
            sign out
          </Typography>
        </MenuItem>
      </Menu>
      
    </>
  )
}