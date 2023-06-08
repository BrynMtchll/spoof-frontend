import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from '@mui/icons-material/Clear';

import { Box, InputBase } from '@mui/material';


export default function SearchBar({ onChange, clearSearch, value }) {
  return (
    <Box sx={{ 
        maxWidth: {sm: 450, lg: 500},
        bgcolor: 'text.primary',
        display: 'flex',
        borderRadius: 50,
        my: 1,
        mr: 7.5,
    }}>
      <Box sx={{
        px: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        
      }}>
        <SearchIcon sx={{color: 'background.default' }}></SearchIcon>
      </Box>

      <InputBase autoFocus={true} value={value} onChange={onChange} placeholder="find a track..." sx={{
        width: 1, 
        color: 'background.default',
        maxWidth: 1,
      }}>
      </InputBase>
      <Box sx={{
        px: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
      }}>
        <ClearIcon
        onClick={clearSearch}
         sx={{
          display: !value && 'none',
          color: 'background.default',

          '&:hover': {
            cursor: 'pointer',
          }
          }}
        ></ClearIcon>
      </Box>
    </Box>
  )
}