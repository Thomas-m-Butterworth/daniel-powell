import { Html, Head, Main, NextScript } from 'next/document'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { meta } from '@lang'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name={meta.main.title} content={meta.main.description} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head> 
      <body>
        <SpeedInsights />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
