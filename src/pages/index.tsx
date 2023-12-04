import Image from 'next/image'
import { Bebas_Neue, Covered_By_Your_Grace } from 'next/font/google'
import { BsGithub } from 'react-icons/bs'
import { SiMattermost } from 'react-icons/si'
import { FaMapMarkerAlt } from 'react-icons/fa'
import GoldenBrain from '../../public/golden-brain.png'
import BrainMap from '../../public/brain-map.png'
import Link from 'next/link'

import SimonsFoundationLogo from '../../public/sponsors/simons-foundation.svg'
import FlatironInstituteLogo from '../../public/sponsors/flatiron-institute.svg'

import getConfig from 'next/config'
const {
  publicRuntimeConfig: {
    REGISTRATION_URL,
    MATTERMOST_URL,
    GITHUB_URL,
    MAPS_URL,
  }
} = getConfig()

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] })
const apple = Covered_By_Your_Grace({ weight: '400', subsets: ['latin'] })

const Button = ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) =>
  <a className={`bg-sand-dark text-sand font-bold py-2 px-4 ${className}`} {...props}>
    {props.children}
  </a>

export async function getStaticProps() {
  return { props: { bodyClassName: 'jungle half-jungle fixed-jungle' } }
}

export default function Home() {
  return (
    <main>
      <div className={`
        p-12 md:p-10 lg:p-12 lg:pt-18 min-h-full lg:min-h-screen lg:max-h-screen
        flex justify-center items-center flex-grow relative
      `}>
        <div className={`
          relative max-w-6xl text-center
          grid grid-cols-1 md:grid-cols-2 flex-grow
        `}>
          {/* TODO: move COVID notice down and move other content up */}
          {/* <div className="md:absolute top-0 p-2 bg-jungle text-white text-left text-sm">
            <p className="font-bold m-0">COVID-19 notice</p>
            <p className="m-0">
              The Hackathon&apos;s policy aligns with local guidelines.
              Currently, proof of vaccination is not required, and while masks are strongly encouraged, they are not mandatory.
              If local guidelines change, the Hackathon will adapt its policy accordingly.
              Masks will be available for attendees.
            </p>
          </div> */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row md:flex-col items-center justify-center">
              <h2 className={`${bebas.className} mb-3 font-semibold  md:text-8xl mr-10 md:mr-0`}>
                Pre-COSYNE<br/>Brainhack<br/>Hackathon
              </h2>

              <div className="flex flex-col items-center justify-center">
                <div className={`${bebas.className} text-xl md:text-3xl lg:text-4xl p-2 text-center`}>
                  February 27-28, 2024
                </div>
                <div className="grid grid-cols-2 md:flex md:items-stretch gap-2 pt-2">
                  <a className="bg-sand-dark text-sand font-bold py-2 px-4" href={REGISTRATION_URL}>
                    Register
                  </a>
                </div>
              </div>
            </div>
            <div className="text-sand text-4xl md:text-6xl flex gap-4 md:gap-10 mt-8 md:pt-20 pb-0">
              <a href={MATTERMOST_URL}><SiMattermost className="filter drop-shadow-opaque" /></a>
              <a href={GITHUB_URL}><BsGithub className="filter drop-shadow-opaque" /></a>
              <a href={MAPS_URL}><FaMapMarkerAlt className="filter drop-shadow-opaque" /></a>
            </div>
          </div>
          <div className="relative flex flex-col md:px-0 items-center justify-center text-bolder shadow-white">
            <div className={`md:p-2 ${apple.className} text-xl md:text-3xl text-center text-sand-dark text-bolder shadow-black font-bold`}>
              Connect, Collaborate, Code
            </div>
            <Image
              className="object-contain max-h-3/4 md:max-h-1/2 lg:max-h-1/2 xl:max-h-3/5 !relative"
              src={GoldenBrain}
              alt="The Golden Brain"
              priority
              fill
              sizes="(max-width: 768px) 60vw,
                      (max-width: 1280px) 40vw,
                      50vw"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-jungle text-white">
        <div className="grid max-w-6xl min-h-1/4 grid-cols-1 md:grid-cols-2">
          <div className="flex md:px-0 mb-10 md:mb-0 items-center">
            <Image
              className="object-contain !relative max-h-4/5 flex-grow"
              src={BrainMap}
              alt="Brain Map"
              priority
              fill
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 75vw,
                      50vw"
            />
          </div>
          <div className="flex flex-col justify-center text-lg px-8 pb-8">
            <h3 className={`${bebas.className} mb-2 mt-6 text-4xl font-semibold text-gold`}>What is Pre-COSYNE Brainhack?</h3>
            <p className="text-sand mb-2">
              Pre-COSYNE Brainhack is a hackathon that brings together people who are passionate about open science,
              open-source tools, and collaboration around computational and systems neuroscience. The hackathon
              provides an opportunity for people from different institutions to work together on projects of
              shared interest and learn from each other.
            </p>
            <p className="text-sand">
              Projects can be on anything from integrating a data visualization tool with an analysis
              tool, to training an LLM to extract knowledge from neuroscience papers, to developing a tool for
              tracking the usage of a software package in papers. Everyone is welcome; you do not need to be a
              software engineer to participate.
            </p>
          </div>
        </div>
      </div>
      <div className="jungle-solo flex items-center py-10">
        <h2 className={`${bebas.className} mb-2 text-6xl font-semibold text-gold`}>Sponsors</h2>
        <div className="flex flex-wrap items-center justify-center">
          <Link className="mx-20 lg:w-1/5 m-5 logo" href="https://www.simonsfoundation.org/collaborations/global-brain/"><Image src={SimonsFoundationLogo} alt="Simons Foundation" /></Link>
          <Link className="mx-20 lg:w-1/5 m-5 logo" href="https://www.simonsfoundation.org/flatiron/center-for-computational-neuroscience"><Image src={FlatironInstituteLogo} alt="Flatiron Institute" /></Link>
        </div>
      </div>
      <div className="flex justify-center items-center bg-jungle text-white">
        <h2 className={`${bebas.className} mt-12 mb-2 text-6xl font-semibold text-gold`}>FAQ</h2>
        <div className="grid max-w-6xl min-h-1/4 grid-cols-1">
          <div className="flex flex-col justify-center text-lg px-8 pb-8">
            <p className="text-sand">
              Will travel or accommodation be provided?
            </p>
            <p className="text-sand">
              No. We are unable to provide travel or accommodation for
              participants. However, we will provide a list of recommended hotels in the area.
            </p>
            <p className="text-sand">
              Will food be provided?
            </p>
            <p className="text-sand">
              Breakfast, lunch, and coffee will be provided through a generous gift from the Simons
              Collaboration on the Global Brain and the Center for Computational Neuroscience at the
              Flatiron Institute. The Simons Foundation will also
              be organizing a social with refreshments on the last day of the hackathon.
            </p>
            <p className="text-sand">
              Who is eligible to participate?
            </p>
            <p className="text-sand">
              Anyone is welcome to participate! However, you must register in advance and due to
              space constraints, we may not be able to accommodate everyone. In the event that more
              people register than we can accommodate, we will accept participants on a first-come,
              first-served basis.
            </p>
            <p className="text-sand">
              Where will the hackathon take place?
            </p>
            <p className="text-sand">
              The Champalimaud Centre for the Unknown in Lisbon, Portugal.
            </p>
            <p className="text-sand">
              When should I arrive to Lisbon?
            </p>
            <p className="text-sand">
              Since the hackathon is relatively short in duration, participants are strongly encouraged to arrive in
              Lisbon by 18:00 the day before the hackathon (Feb. 26) to join other participants for dinner and
              socializing.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
