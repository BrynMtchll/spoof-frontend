import { getCurrentTimestamp } from '../helpers'
import { updateUserQueue } from '../../graphql/mutations';
import { API } from 'aws-amplify';
import { getSession } from 'next-auth/react';

export default async function queueUpdateQuery({accessToken, user_id}) {
  const { token } = await getSession();
  if (!accessToken) accessToken = token.accessToken;
  if (!user_id) user_id = token.user.id;
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