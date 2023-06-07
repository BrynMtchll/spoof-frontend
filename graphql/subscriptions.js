/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const userLocationChanged = /* GraphQL */ `
  subscription UserLocationChanged($user_id: String!) {
    userLocationChanged(user_id: $user_id) {
      user_id
      display_name
      profile_pic_url
      current_track {
        name
        artists
        album
        user_id
        from_user_id
        track_id
        duration
        track_play_date
        id
        album_cover_url
      }
      queue {
        name
        artists
        album
        user_id
        from_user_id
        track_id
        duration
        track_play_date
        id
        album_cover_url
      }
      latitude
      longitude
      updated_at
    }
  }
`;
export const onUserQueueUpdated = /* GraphQL */ `
  subscription OnUserQueueUpdated($user_id: String) {
    onUserQueueUpdated(user_id: $user_id) {
      user_id
      queue {
        name
        artists
        album
        user_id
        from_user_id
        track_id
        duration
        track_play_date
        id
        album_cover_url
      }
    }
  }
`;
export const onTrackRecieved = /* GraphQL */ `
  subscription OnTrackRecieved($user_id: String!) {
    onTrackRecieved(user_id: $user_id) {
      name
      artists
      album
      user_id
      from_user_id
      track_id
      duration
      track_play_date
      id
      album_cover_url
    }
  }
`;
export const userConnectedToMe = /* GraphQL */ `
  subscription UserConnectedToMe($user_id: String!) {
    userConnectedToMe(user_id: $user_id) {
      user_id
      display_name
      profile_pic_url
      current_track {
        name
        artists
        album
        user_id
        from_user_id
        track_id
        duration
        track_play_date
        id
        album_cover_url
      }
      queue {
        name
        artists
        album
        user_id
        from_user_id
        track_id
        duration
        track_play_date
        id
        album_cover_url
      }
      latitude
      longitude
      updated_at
    }
  }
`;
