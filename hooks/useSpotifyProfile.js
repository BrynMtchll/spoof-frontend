import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import spotifyProfileQuery from '@/util/queries/spotifyProfileQuery';

export default function useSpotifyProfile () {
  const { status } = useSession();
  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    const user = await spotifyProfileQuery();
    setProfile(await user);
  }

  useEffect(() => {
    if (status == 'unauthenticated' || status == 'loading') return;
    console.log("fetching spotify")

    getProfile().catch(console.error);
    
  }, [status])
  return profile
}