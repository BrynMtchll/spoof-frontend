import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { onTrackRecieved } from '@/graphql/subscriptions';
import addToQueueQuery from '@/util/queries/addToQueueQuery';
import { getSession } from 'next-auth/react';
export default function useOnTrackRecieved() {
  const [notificationDisplay, setNotificationDisplay] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  let subscription;
  let timeout;


  const request = async () => {
    const { token: { user: { id: user_id }}} = await getSession();
    subscription?.unsubscribe();
    API.cancel(subscription);
    console.log(user_id);
    subscription = await API.graphql({
      query: onTrackRecieved,
      variables: { user_id },
    }).subscribe({
      next: async ({ value }) => {
        const track = value.data.onTrackRecieved;
        const message = await addToQueueQuery({track_id: track.track_id});
        setNotificationMessage(message);
        clearTimeout(timeout);
        setNotificationDisplay(true);
        timeout = setTimeout(() => setNotificationDisplay(false), 2000);
      },
    })
  }

  useEffect(() => {
    request();
		
		return () => {
      subscription?.unsubscribe()
      API.cancel(subscription);
    }
	}, [])
  return { notificationDisplay, notificationMessage };
}