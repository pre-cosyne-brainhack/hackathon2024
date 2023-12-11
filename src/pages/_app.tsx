import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { Bebas_Neue, Roboto, Nothing_You_Could_Do } from 'next/font/google'
import { useEffect } from 'react'

// import OGImage from '../../public/og.png'

import getConfig from 'next/config'
const {
  publicRuntimeConfig: {
    MATTERMOST_URL,
    GITHUB_URL,
    OHBM_HACKATHON_URL,
  }
} = getConfig()

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] })
const roboto = Roboto({ weight: '400', subsets: ['latin'] })
const nycd = Nothing_You_Could_Do({ weight: '400', subsets: ['latin'] })

function Header() {
  return (
    <>
      <Head>
        <title>Pre-COSYNE Brainhack 2024</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Pre-COSYNE Brainhack 2024" key="desc" />
        <meta property="og:title" content="Pre-COSYNE Brainhack 2024" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pre-cosyne-brainback.github.io/hackathon2024/" />
        <meta property="og:description" content="Let's get together to learn about open science and to collaborate on neuroscience projects!" />
        {/* <meta property="og:image" content={OGImage.src} /> */}
      </Head>
      <header className="font-display w-full absolute top-0 left-0 h-fit right-0 justify-center px-1 py-2 bg-dirt text-gold uppercase z-50">
        <div className="flex w-full max-w-screen-xl 8xl:max-w-screen-6xl px-4 mx-auto">
          <h1 className="text-3xl"><Link href="/">Pre-COSYNE Brainhack 2024</Link></h1>
          <nav className="flex-grow justify-end items-start md:items-center flex group text-lg lg:text-lg">
            <div className="hidden group-focus-within:flex md:flex gap-6 justify-end flex-col md:flex-row mb-4 mr-2 md:mb-0 text-2xl">
              <div><Link href="/code-of-conduct">Code of Conduct</Link></div>
              <div><Link href="/schedule">Schedule</Link></div>
              <div><Link href="/projects">Projects</Link></div>
              <div><Link href="/team">Team</Link></div>
            </div>
            <button className='md:hidden'>
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
              </svg>
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

function Footer() {
  return (
    <footer className="relative flex justify-center px-1 py-16 bg-dirt text-gold">
      <div className="grid gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-screen-xl 8xl:max-w-screen-6xl items-center justify-center text-center md:text-left md:pb-0">
          <h1 className="text-5xl">Pre-COSYNE<br />Brainhack<br />2024</h1>
          <div className="py-6 md:py-0">
            <h2 className="font-display text-3xl mb-0 text-center md:text-left">Organizers</h2>
            <p className="font-theme text-2xl mb-0">Ryan Ly</p>
            <p className="font-theme text-2xl mb-0">Olivier Winter</p>
            <p className="font-theme text-2xl mb-0">Gaelle Chapuis</p>
            <p className="font-theme text-2xl mb-0">Florian Rau</p>
            <p className="text-l mb-0 pr-6 whitespace-pre-wrap break-words">brainhack.cosyne@gmail.com</p>
          </div>
          <nav className="font-primary flex md:gap-6 text-1xl justify-around">
            <div className="flex flex-col gap-1">
              <div><Link href="/">Home</Link></div>
              <div><Link href="/code-of-conduct">Code of Conduct</Link></div>
              <div><Link href="/schedule">Schedule</Link></div>
              <div><Link href="/projects">Projects</Link></div>
              <div><Link href="/team">Team</Link></div>
            </div>
            <div className="flex flex-col gap-1">
              {/* <div><a href={MATTERMOST_URL}>Mattermost</a></div> */}
              <div><a href={GITHUB_URL}>GitHub</a></div>
            </div>
          </nav>
        </div>
        <div className="flex flex-col">
          <h3>Website design adapted with permission from the <a href={OHBM_HACKATHON_URL}>OHBM Hackathon 2023 website</a></h3>
          <p className="mt-2 text-xs">Poly brain image on homepage adapted from image from © [Deemerwha studio] / Adobe Stock</p>
        </div>
      </div>
    </footer>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.className = pageProps.bodyClassName
  })
  return (
    <>
      <style jsx global>
      {`
        :root {
          --roboto-font: ${roboto.style.fontFamily};
          --bebas-font: ${bebas.style.fontFamily};
          --nycd-font: ${nycd.style.fontFamily};
        }
      `}
      </style>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
