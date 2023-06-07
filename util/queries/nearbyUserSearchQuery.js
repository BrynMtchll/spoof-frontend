import { getCurrentTimestamp } from '../helpers'
import { searchNearbyUsers } from '../../graphql/queries';
import { API } from 'aws-amplify';
import { getSession } from 'next-auth/react';

export default async function nearbyUserSearchQuery({ latitude, longitude, user_id }) {
  const timestamp = getCurrentTimestamp();
  const input = { 
    latitude, 
    longitude, 
    timestamp_lower_bound: timestamp - 15, 
    timestamp_upper_bound: timestamp + 10,
    user_id,
  }
    
  const response = await API.graphql({
    query: searchNearbyUsers,
    variables: input
  })

  const nearbyUsers = await response.data.searchNearbyUsers
  return nearbyUsers;
}