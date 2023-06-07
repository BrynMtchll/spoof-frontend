import { useContext } from 'react';
import { useSession } from 'next-auth/react'

import { DataContext } from '../components/Context';
import Queue from '../components/Queue'

export default function YourQueue() {
	const {status} = useSession();
	const { profile, queue } = useContext(DataContext);
  if (status != "authenticated") return;
	return (
		<Queue profile={profile} queue={queue} />
	)
}