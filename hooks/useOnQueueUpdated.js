import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { onUserQueueUpdated } from '@/graphql/subscriptions';
import { getUserQueue } from '@/graphql/queries';

export default function useOnQueueUpdated({ user_id }) {
  const [queue, setQueue] = useState([])

  let subscription;

  const request = async () => {
    const response = await API.graphql({
      query: getUserQueue,
      variables: {user_id: user_id}
    });

    const queue = await response.data.getUserQueue;

    setQueue(queue);

    subscription?.unsubscribe();
    API.cancel(subscription)

    subscription = await API.graphql({
      query: onUserQueueUpdated,
      variables: { user_id },
    }).subscribe({
      next: ({ value }) => {
        setQueue(value.data.onUserQueueUpdated.queue);
      },
    })
  }

  useEffect(() => {
    request();
		
		return () => {
      subscription?.unsubscribe()
      API.cancel(subscription);
    }
	}, [user_id])
  return queue;
}