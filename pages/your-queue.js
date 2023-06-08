import { useContext } from 'react';
import { useSession } from 'next-auth/react'
import Head from 'next/head';

import { DataContext } from '@/components/Context';
import Queue from '@/components/Queue';


export default function YourQueuePage() {
	const {status} = useSession();
	const { profile, queue } = useContext(DataContext);
  if (status != "authenticated") return;
	return (
		<>
			<Head>
				<title>Spoof - Your Queue</title>
			</Head>
			<Queue profile={profile} queue={queue} />
		</>
	)
}