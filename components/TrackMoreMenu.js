import { useState, useCallback, useContext } from 'react';
import { FeedbackContext, DataContext } from './Context';
import addToQueueQuery from '@/util/queries/addToQueueQuery';
import sendTrackToUserQuery from '@/util/queries/sendTrackToUserQuery';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { wait } from '@/util/helpers';

export default function TrackMoreMenu({ track_id }) {
  const { nearbyUsers } = useContext(DataContext);
  const { setFeedbackDisplay, setFeedbackMessage } = useContext(FeedbackContext);
  
	const [anchorEl, setAnchorEl] = useState(null);
	const [nestedAnchorEl, setNestedAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

	const open = Boolean(anchorEl);
  const nestedOpen = Boolean(nestedAnchorEl);
  let timeout;

	const openMenu = async (event) => {
		setAnchorEl(event.currentTarget);
    await wait(10)
    setIsMenuOpen(true);
	};

  const closeNestedMenu = () => {
		setNestedAnchorEl(null);
	};
	const closeAllMenus = () => {
		closeNestedMenu();
    setAnchorEl(null);
    setIsMenuOpen(false);
	};
	
  const openNestedMenu = (event) => {
    if (!isMenuOpen) return;
    setNestedAnchorEl(event.target)
  }

  const handlePopup = (message) => {
    setFeedbackMessage(message);
    clearTimeout(timeout);
    setFeedbackDisplay(true);
    timeout = setTimeout(() => setFeedbackDisplay(false), 2000);
  }

  const handleAddToQueueClick = useCallback(async () => {
    closeAllMenus();
    const message = await addToQueueQuery({ track_id });
    handlePopup(await message);
    
  }, [track_id])

  const handleSendToUserClick = useCallback(async (user) => {
    closeAllMenus();
    await sendTrackToUserQuery({ to_user_id: user.user_id, track_id });
    handlePopup(`sent to ${ user.display_name }`);
  }, [track_id])

  const menuStyle = {
    '& .MuiMenu-list': {
      p: 0.5,
    },
    '& .MuiMenu-paper': {
      width: '20ch',
    }
  }

  const menuItemStyle = {
    py: 1, 
    borderRadius: 0.5
  }

	return (
    <>
      <IconButton
        id="long-button"
        onClick={openMenu}
        sx={{
          p: 0,
          pr: 1,
          '&:hover': {
            bgcolor: 'transparent',
            cursor: 'default'
          }
        }}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={closeAllMenus}
        sx={{...menuStyle}}
      >
          <MenuItem 
            onMouseOver={closeNestedMenu} 
            sx={{...menuItemStyle}} 
            onClick={handleAddToQueueClick}
          >
            <Typography variant='body2'>Add to my queue</Typography>
          </MenuItem>
          <MenuItem sx={{
              ...menuItemStyle,
              position: 'relative', 
              bgcolor: nestedOpen ? 'rgba(250, 250, 250, 0.075)' : 'inherit',
            }}
            onMouseOver={openNestedMenu}
          >
            <Typography 
              sx={{pointerEvents: 'none'}}  
              variant='body2'
            >
              Add to user&apos;s queue
            </Typography>
          </MenuItem>
      </Menu>
      <Menu
        id='nested-menu'
        open={nestedOpen}
        anchorEl={nestedAnchorEl}
        onClose={closeAllMenus}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          pointerEvents: 'none',
          ...menuStyle,

        }}
      >
        {nearbyUsers.map((user, i) => {
          return (
            <MenuItem 
              key={i} 
              sx={{
                ...menuItemStyle,
                pointerEvents: 'auto',
              }}
              onClick={() => handleSendToUserClick(user)}
            >
              <Typography 
                variant='body2' 
                sx={{pointerEvents: 'none'}}
              >
                {user.display_name}
              </Typography>
            </MenuItem>
          )
        })}
      </Menu>
    </>
	)
}