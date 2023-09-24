import '@/styles/globals.css'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ketanech Technology Company</title>
        <meta name="description" content="Ketanech Technology services website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Toaster />
      <Component {...pageProps} />
      </div>
    </>
  )
}
