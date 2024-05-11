import '@/styles/globals.css'
import { Black_Ops_One, Tinos } from 'next/font/google'
import Head from 'next/head'

//  Font instance for "Black Ops One"
const blackOpsOne = Black_Ops_One({
  weight: '400',
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-black-ops-one',
})

//  Font instance for "Tinos"
const tinos = Tinos({
  weight: '400',
  subsets: ['latin'],
  style: 'italic',
  variable: '--font-tinos',
})

export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${blackOpsOne.variable} font-blackopsone bg-light w-full min-h-screen`}>
    <Component {...pageProps} />
    </main>
    </>
  ) 
}
