import { useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';

export default function useLocationUpdate() {
  const { status, data} = useSession();
  const workerRef = useRef()
  useEffect(() => {
    if (status == "unauthenticated" || status == "loading" || typeof window == 'undefined') return
    const user_id = data.token.user.id
    
    workerRef.current = new Worker(new URL('../util/workers/locationUpdateWorker.js', import.meta.url))
    workerRef.current?.postMessage('start');

    navigator.geolocation.watchPosition(({ coords: { latitude, longitude }}) => {
      workerRef.current?.postMessage({ latitude, longitude, user_id })
    })
    return () => {
      workerRef.current?.terminate()
    }
  }, [status])
}