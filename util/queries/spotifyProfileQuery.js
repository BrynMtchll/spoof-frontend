import { API } from 'aws-amplify';
import { getSession } from 'next-auth/react';
import { getUserSpotify } from '@/graphql/queries';


export default async function spotifyProfileQuery() {
  const { token: { accessToken }} = await getSession();
  console.log(accessToken);

  const response = await API.graphql({
    query: getUserSpotify,
    variables: {access_token: accessToken}
  })

  const {getUserSpotify: user} = await response.data;
  return user;
}