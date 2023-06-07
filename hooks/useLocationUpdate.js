import { useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';


export default function useLocationUpdate() {
  const { status } = useSession();
  const workerRef = useRef()

  useEffect(() => {
    if (status == "unauthenticated" || status == "loading" || typeof window == 'undefined') return

    workerRef.current = new Worker(new URL('../util/workers/locationUpdateWorker.js', import.meta.url))
    workerRef.current?.postMessage('start');

    navigator.geolocation.watchPosition(({ coords: { latitude, longitude }}) => {
      workerRef.current?.postMessage({ latitude, longitude })
    })
    return () => {
      workerRef.current?.terminate()
    }
  }, [status])
}