// pages/_app.tsx

import type { AppProps } from 'next/app';
// 💥 CRITICAL FIX: Import the global styles here 💥
import '../styles/globals.css'; 
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Ensures the viewport is correctly configured for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Component is the actual page being rendered (e.g., pages/innovatehub.tsx) */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;