import { getSession } from 'next-auth/react';
import queueUpdateQuery from './queueUpdateQuery';
import { API } from 'aws-amplify';
import { addToUserQueue } from '@/graphql/mutations';

export default async function addToQueueQuery({ track_id }) {
  const {token: { accessToken, user: {id: user_id} }} = await getSession();

  const variables = {
    access_token: accessToken,
    track_uri: `spotify:track:${track_id}`,
    user_id,
  }

  try {
    const response = await API.graphql({
      query: addToUserQueue,
      variables: variables
    })
    await queueUpdateQuery();
    console.log(response);
    return 'added to queue';

  } catch (error) {
    return `add to queue failed: ${error.errors[0].message}`
  }
  
}