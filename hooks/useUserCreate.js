import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { createUser } from '../graphql/mutations';
import { API } from 'aws-amplify';
import { useContext } from 'react';
import { DataContext } from '../components/Context';
import { getCurrentTimestamp } from '../util/helpers'

export default function useUserCreate({display_name, profile_pic_url, user_id}) {
  const { status } = useSession();

  const userCreate = async ({coords: {latitude, longitude}}) => {
    console.log('creating user')
    
    const variables = {
      display_name, 
      user_id, 
      profile_pic_url, 
      latitude,
      longitude,
      updated_at: getCurrentTimestamp()
    }

    await API.graphql({
      query: createUser,
      variables: variables
    })
  }

  useEffect(() => {
    if (status == 'unauthenticated') {
      localStorage.setItem('isLoggedIn', 'false');
    }

    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

    if (status == 'unauthenticated' || status == 'loading' || isLoggedIn || user_id == '') return;

    localStorage.setItem('isLoggedIn', 'true');

    navigator.geolocation.getCurrentPosition((pos) => {
      userCreate(pos).catch(console.error);
    })

  }, [user_id, status])
}