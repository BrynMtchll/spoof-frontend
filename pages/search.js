import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Search from '@/components/Search';

export default function SearchPage() {
	const {status} = useSession();
  if (status != "authenticated") return;

	return (
		<>
			<Head>
				<title>Spoof - Search</title>
			</Head>
			<Search />
		</>
	)
}