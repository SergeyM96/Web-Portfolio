import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { Tinos } from 'next/font/google'
import Head from 'next/head'

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
    <main className={` bg-light w-full min-h-screen`}>
    <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
    </>
  ) 
}

export { tinos }
