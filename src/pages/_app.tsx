import GoogleAnalytics from "@/lib/GoogleAnalytics";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';

import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const hggothicssi = localFont({
  src: [
    {
      path: '../font/HGGothicssi_00g.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/HGGothicssi_20g.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/HGGothicssi_40g.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../font/HGGothicssi_60g.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../font/HGGothicssi_80g.ttf',
      weight: '900',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-hggothicssi',
});

const myFont = localFont({
  src: '../font/HGGothicssi_80g.ttf',
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      ) : null}
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;