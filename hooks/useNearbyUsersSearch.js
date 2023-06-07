import { useEffect, useState, useRef } from 'react';
import { useSession } from 'next-auth/react';
import nearbyUserSearchQuery from '../util/queries/nearbyUserSearchQuery';

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

const setNearbyUsersCallback = (prevNearbyUsers, nearbyUsers) => {
  if (!nearbyUsers) return []
  if (prevNearbyUsers.length != nearbyUsers.length) return nearbyUsers;

  for (let i = 0; i < prevNearbyUsers.length; i++) {
    if (prevNearbyUsers[i].track_id != nearbyUsers[i].track_id) {
      return nearbyUsers;
    }
  }
  return prevNearbyUsers;
}

export default function useNearbyUsersSearch() {
  const { status } = useSession();
  const [nearbyUsers, setNearbyUsers] = useState([]);
  const workerRef = useRef();

  const initialSearch = () => {
    navigator.geolocation.getCurrentPosition(async ({ coords: { latitude, longitude }}) => {

      const nearbyUsers = await nearbyUserSearchQuery({latitude, longitude});
      setNearbyUsers(nearbyUsers);

    }, error, {enableHighAccuracy: true})
  }

  const updatePosition = () => {
    navigator.geolocation.watchPosition(({coords: { latitude, longitude }}) => {

      workerRef.current?.postMessage({latitude, longitude})

    }, error, {enableHighAccuracy: true})
  }

  useEffect(() => {
    if (status == "unauthenticated" || status == "loading" || typeof window == 'undefined') return
    workerRef.current = new Worker(new URL('../util/workers/nearbyUserSearchWorker.js', import.meta.url))

    initialSearch()

    updatePosition()

    workerRef.current.onmessage = event => {
      const nearbyUsers = event.data;
      setNearbyUsers(prevNearbyUsers => setNearbyUsersCallback(prevNearbyUsers, nearbyUsers));
    }
    return () => {
      workerRef.current?.terminate()
    }
  }, [status])
  return nearbyUsers
}