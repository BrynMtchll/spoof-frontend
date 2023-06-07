/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserSpotify = /* GraphQL */ `
  query GetUserSpotify($access_token: String!) {
    getUserSpotify(access_token: $access_token) {
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
export const getUser = /* GraphQL */ `
  query GetUser($user_id: String!) {
    getUser(user_id: $user_id) {
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
export const searchNearbyUsers = /* GraphQL */ `
  query SearchNearbyUsers(
    $user_id: String!
    $latitude: Float!
    $longitude: Float!
    $timestamp_upper_bound: Int!
    $timestamp_lower_bound: Int!
  ) {
    searchNearbyUsers(
      user_id: $user_id
      latitude: $latitude
      longitude: $longitude
      timestamp_upper_bound: $timestamp_upper_bound
      timestamp_lower_bound: $timestamp_lower_bound
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
export const getUserQueue = /* GraphQL */ `
  query GetUserQueue($user_id: String!) {
    getUserQueue(user_id: $user_id) {
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
export const searchTracksSpotify = /* GraphQL */ `
  query SearchTracksSpotify(
    $query: String!
    $access_token: String!
    $limit: Int!
  ) {
    searchTracksSpotify(
      query: $query
      access_token: $access_token
      limit: $limit
    ) {
      href
      next
      total
      tracks {
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
export const getUserQueueSpotify = /* GraphQL */ `
  query GetUserQueueSpotify($access_token: String!, $track_play_date: Int) {
    getUserQueueSpotify(
      access_token: $access_token
      track_play_date: $track_play_date
    )
  }
`;
