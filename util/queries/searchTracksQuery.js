import { searchTracksSpotify } from '@/graphql/queries';
import { API } from 'aws-amplify';
import { getSession } from 'next-auth/react';

export default async function searchTracksQuery({ queryString }) {
  const {token: { accessToken }} = await getSession();

  const variables = { 
    query: queryString, 
    access_token: accessToken, 
    limit: 20,
  }

  const response = await API.graphql({
    query: searchTracksSpotify,
    variables: variables
  })
  const tracks = response.data.searchTracksSpotify.tracks;

  return tracks;
}