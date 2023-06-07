import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';


import querystring from 'querystring';
import {getToken} from 'next-auth/jwt';

 
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
 
async function refreshAccessToken(token) {
    console.log('refreshing access token');
    try {
        const response = await fetch(TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token: token.refreshToken,
            }),
        });
        const refreshedTokens = await response.json()
    
        if (!response.ok) {
            throw refreshedTokens
        }
        return {
            ...token,
            accessToken: refreshedTokens.access_token,
            accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
            refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
        }
    } catch (error) {
        console.log(error)
        return {
            ...token,
            error: "RefreshAccessTokenError",
        }
    }
};

export const nextAuthOptions = {

}
export default NextAuth({
  providers: [
    SpotifyProvider({
      authorization:
        'https://accounts.spotify.com/authorize?scope=user-read-email,user-read-private,streaming,user-read-playback-state,user-read-currently-playing,user-modify-playback-state',
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
            accessToken: account.access_token,
            accessTokenExpires: account.expires_at,
            refreshToken: account.refresh_token,
            user,
        }
      }
      if (Date.now() < token.accessTokenExpires) {
        return token
      }
      return refreshAccessToken(token)
      
    },
    async session(session, token) {
      if (token) {
        session.user = token.user
        session.accessToken = token.accessToken
        session.error = token.error
      }

      return session
    },
  },
});