import { Box, Button } from '@mui/material';
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import NearbyUsers from '@/components/NearbyUsers';
import Landing from '@/components/Landing';

export default function Home() {
  const { data: session, status } = useSession();
  
  useEffect(() => {
    if (session?.error === "RefreshAccessTokenError") {
      signIn();
    }
  }, [session]); 
  if (status == "loading") return;
  if (status == 'unauthenticated') {
    return (
      <Landing />
    )
  }

  return (
    <NearbyUsers />
  )

  
}