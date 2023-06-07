/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $user_id: String!
    $display_name: String!
    $latitude: Float!
    $longitude: Float!
    $profile_pic_url: String!
    $updated_at: Int
  ) {
    createUser(
      user_id: $user_id
      display_name: $display_name
      latitude: $latitude
      longitude: $longitude
      profile_pic_url: $profile_pic_url
      updated_at: $updated_at
    )
  }
`;
export const updateUserLocation = /* GraphQL */ `
  mutation UpdateUserLocation(
    $user_id: String!
    $latitude: Float!
    $longitude: Float!
    $updated_at: Int
  ) {
    updateUserLocation(
      user_id: $user_id
      latitude: $latitude
      longitude: $longitude
      updated_at: $updated_at
    ) {
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
export const updateUserQueue = /* GraphQL */ `
  mutation UpdateUserQueue(
    $user_id: String!
    $track_play_date: Int
    $access_token: String!
  ) {
    updateUserQueue(
      user_id: $user_id
      track_play_date: $track_play_date
      access_token: $access_token
    ) {
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
export const sendTrackToUser = /* GraphQL */ `
  mutation SendTrackToUser(
    $to_user_id: String!
    $user_id: String!
    $track_id: String!
  ) {
    sendTrackToUser(
      to_user_id: $to_user_id
      user_id: $user_id
      track_id: $track_id
    ) {
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
export const addToUserQueue = /* GraphQL */ `
  mutation AddToUserQueue(
    $access_token: String!
    $track_uri: String!
    $user_id: String!
  ) {
    addToUserQueue(
      access_token: $access_token
      track_uri: $track_uri
      user_id: $user_id
    )
  }
`;
export const connectToUser = /* GraphQL */ `
  mutation ConnectToUser($user_id: String!) {
    connectToUser(user_id: $user_id) {
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
