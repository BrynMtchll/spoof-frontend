import { getCurrentTimestamp } from '../helpers'
import { updateUserLocation } from '../../graphql/mutations';
import { API } from 'aws-amplify';
import { getSession } from 'next-auth/react';

export default async function locationUpdateQuery({ latitude, longitude }) {
  const {token: { user: { id: user_id }}} = await getSession();

  const variables = {
    user_id, 
    latitude, 
    longitude, 
    updated_at: getCurrentTimestamp()
  }
  
  const response = await API.graphql({
    query: updateUserLocation,
    variables: variables
  })
  return response;
}