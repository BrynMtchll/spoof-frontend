import { useState, useEffect, useRef } from 'react';
import { useSession, getSession } from 'next-auth/react';
import queueUpdateQuery from '@/util/queries/queueUpdateQuery';


const setQueueCallback = (prevQueue, queue) => {
  if (!queue) return []
  if (prevQueue.length != queue.length) return queue;
  for (let i = 0; i < prevQueue.length; i++) {
    if (prevQueue[i].track_id != queue[i].track_id) {
      return queue;
    }
  }
  return prevQueue;
}

export default function useQueueUpdate() {
  const { status } = useSession();
  const [queue, setQueue] = useState([]);
  const workerRef = useRef()

  const initialUpdate = async () => {
    const queue = await queueUpdateQuery({});
    setQueue(queue);
  }

  const sendSessionToWorker = async () => {
    try {
      const { token: { accessToken, user: {id: user_id }}} = await getSession();
      workerRef.current.postMessage({accessToken, user_id});

    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if ( status == "unauthenticated" || status == "loading") return
    workerRef.current = new Worker(new URL('../util/workers/queueUpdateWorker.js', import.meta.url))

    initialUpdate();

    workerRef.current.onmessage = event => {
      if (event.data == "session request") {
        sendSessionToWorker();
        return;
      }
      const queue = event.data
      setQueue(prevQueue => setQueueCallback(prevQueue, queue));
    }

    return () => {
      workerRef.current?.terminate()
    }
  }, [status])

  return queue
}