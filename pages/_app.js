import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';

import theme from '@/util/theme';
import createEmotionCache from '@/util/createEmotionCache';

import Context from '@/components/Context';
import Layout from '@/components/Layout';

Amplify.configure({ ...awsExports, ssr: true });

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  emotionCache = clientSideEmotionCache
}) {

  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

          <CssBaseline />
          <Context>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Context>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
}