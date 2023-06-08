import { createContext, useState } from 'react';

import useSpotifyProfile from '@/hooks/useSpotifyProfile';
import useQueueUpdate from '@/hooks/useQueueUpdate';
import useNearbyUsersSearch from '@/hooks/useNearbyUsersSearch';
import useLocationUpdate from '@/hooks/useLocationUpdate';
import useUserCreate from '@/hooks/useUserCreate';

export const DataContext = createContext()
export const FeedbackContext = createContext()

export default function Context({ children }) {
  const [feedbackDisplay, setFeedbackDisplay] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const value = { 
    profile: useSpotifyProfile(),
    nearbyUsers: useNearbyUsersSearch()
  }
  value.queue = useQueueUpdate(value.profile.user_id);
  useLocationUpdate();
  useUserCreate(value.profile);


  return (
    <DataContext.Provider value={value}>
      <FeedbackContext.Provider value={{feedbackDisplay, setFeedbackDisplay, feedbackMessage, setFeedbackMessage}}>
        {children}
      </FeedbackContext.Provider>
    </DataContext.Provider>
  );
}
