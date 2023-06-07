import {  useContext, useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import User from './User';
import { DataContext } from './Context';
import BodyColumn from './BodyColumn';

export default function NearbyUsers() {
  const { nearbyUsers } = useContext(DataContext);
  const [noNearbyUsers, setNoNearbyUsers] = useState(true);


  useEffect(() => {
    if (!nearbyUsers.length) setNoNearbyUsers(true);
    else setNoNearbyUsers(false);
  }, [nearbyUsers])
  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: "bold", pb: 2, mt: 8,}}>Nearby Users</Typography>
      <Box sx={{
					pt: 10,
					display: noNearbyUsers ? 'flex' : 'none',
					color: 'text.secondary',
					justifyContent: 'center',
					px: 2,
				}}>
					<Typography sx={{textAlign: 'center', maxWidth: 400, wordBreak: 'break-word'}} variant="h5">
						There are no spoof users online near you at the moment :(
					</Typography>
				</Box>
      <Grid container sx={{ 
        width: 1 + 'theme.spacing', 
        position: 'relative',
        pl: 0,
        maxWidth: {xs: 280, qs: 500, sm: 700, md: 850},
      }} rowSpacing={2} columnSpacing={2} >
        
        {
          nearbyUsers.map((user, i) => {
            return (
              <Grid key={i} item xs={12} qs={6} md={4}>
                <User user={user} index={i} />
              </Grid>
            )
          }) 
        }
      </Grid>
    </>
  );
}