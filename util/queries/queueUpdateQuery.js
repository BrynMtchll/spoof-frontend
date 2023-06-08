import { getCurrentTimestamp } from '../helpers'
import { updateUserQueue } from '../../graphql/mutations';
import { API } from 'aws-amplify';
import { getSession } from 'next-auth/react';

export default async function queueUpdateQuery({accessToken, user_id}) {
  if (!accessToken || !user_id) {
    const { token } = await getSession();
    user_id = token.user.id;
    accessToken = token.accessToken;
  }
  const variables = {
    access_token: accessToken,
    track_play_date: getCurrentTimestamp(),
    user_id: user_id
  }

  const response = await API.graphql({
    query: updateUserQueue,
    variables,
  })
  const queue = await response.data.updateUserQueue.queue;

  return queue;
}