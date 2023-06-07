import { sendTrackToUser } from '@/graphql/mutations';
import { API } from 'aws-amplify';
import { getSession } from 'next-auth/react';

export default async function sendTrackToUserQuery({ to_user_id, track_id }) {
  const { token: { user: { id: user_id }}} = await getSession();
  console.log(user_id, to_user_id, track_id);
  const variables = {
    user_id,
    to_user_id,
    track_id,
  }
  
  const response = await API.graphql({
    query: sendTrackToUser,
    variables: variables,
  })

  console.log(response);
}