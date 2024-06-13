import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const hggothicssi = localFont({
  src: [
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={hggothicssi.variable}>
      <Component {...pageProps} />
    </div>
  );
}
