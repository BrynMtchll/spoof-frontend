import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import Head from 'next/head';


import NearbyUsers from '@/components/NearbyUsers';
import Landing from '@/components/Landing';

export default function IndexPage() {
  const { data: session, status } = useSession();
  
  useEffect(() => {
    if (session?.error === "RefreshAccessTokenError") {
      signIn();
    }
  }, [session]); 
  if (status == "loading") return;
  if (status == 'unauthenticated') {
    return (
      <>
        <Head>
          <title>Spoof - Landing</title>
        </Head>
      <Landing />
      </>
    )
  }

  return (
    <>
        <Head>
          <title>Spoof - Nearby Users</title>
        </Head>
      <NearbyUsers />
      </>
  )

  
}