import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import { BsGithub } from 'react-icons/bs'
import { SiMattermost } from 'react-icons/si'
import { FaMapMarkerAlt } from 'react-icons/fa'
import GoldenBrain from '../../public/gold-poly-brain.png'
import BrainhackLogo from '../../public/brainhack-logo.png'
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
        p-12 md:p-10 lg:p-12 lg:pt-18 h-[95vh] min-h-[95vh] lg:min-h-[95vh] lg:max-h-screen
        flex justify-center items-center flex-grow relative
      `}>
        <div className={`
          relative max-w-6xl text-center
          grid grid-cols-1 md:grid-cols-2 flex-grow gap-24
        `}>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row md:flex-col items-center justify-center">
              <h2 className={`${bebas.className} mb-3 font-semibold  md:text-8xl mr-10 md:mr-0`}>
                Pre-COSYNE<br/>Brainhack
              </h2>

              <div className="flex flex-col items-center justify-center">
                <div className={`${bebas.className} text-xl md:text-4xl lg:text-5xl p-2 text-center`}>
                  February 27-28, 2024
                </div>
                <div className="grid grid-cols-2 md:flex md:items-stretch gap-2 pt-6">
                  <a className="bg-sand-dark text-sand font-bold md:text-2xl lg:text-3xl py-2 px-4" href={REGISTRATION_URL}>
                    Register
                  </a>
                </div>
              </div>
            </div>
            <div className="text-sand text-4xl md:text-6xl flex gap-4 md:gap-10 mt-4 md:pt-10 pb-0">
              {/* <a href={MATTERMOST_URL}><SiMattermost className="filter drop-shadow-opaque" /></a> */}
              <a href={GITHUB_URL}><BsGithub className="filter drop-shadow-opaque" /></a>
              <a href={MAPS_URL}><FaMapMarkerAlt className="filter drop-shadow-opaque" /></a>
            </div>
          </div>
          <div className="relative flex flex-col md:px-0 items-center justify-center text-bolder">
            <Image
              className="sm:max-w-md max-w-1xl !relative"
              src={GoldenBrain}
              alt="The Golden Brain"
              priority
              // fill
              // sizes="(max-width: 768px) 60vw,
              //         (max-width: 1280px) 40vw,
              //         50vw"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-jungle text-white">
        <div className="grid max-w-6xl min-h-1/4 grid-cols-1 md:grid-cols-2">
          <div className="flex md:px-0 mb-10 md:mb-0 items-center">
            <Image
              className="object-contain !relative max-h-4/5 flex-grow"
              src={BrainhackLogo}
              alt="Brainhack Logo"
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
            <p className="text-sand mb-2">
              Projects can be on any topic. They can range from integrating a data visualization tool with an
              analysis tool, to training an LLM to extract knowledge from neuroscience papers, to creating a website
              to host data analysis challenges and leaderboards. The suggested theme for this year
              is Benchmarks and Quality Control.
            </p>
            <p className="text-sand mb-2">
              Anyone is welcome to participate. However,
              space is limited, so please <a href={REGISTRATION_URL}>register</a> to attend soon.
            </p>
            <p className="text-sand mb-2">
              If you cannot attend but would like to be notified of future events,
              please <a href="https://docs.google.com/forms/d/e/1FAIpQLSdH_LikO1-7HiVcM-Utu9r_0GEWcSiuwcFLck7f9zZgKC9OOw/viewform?usp=sf_link">join for our mailing list</a>.
            </p>
          </div>
        </div>
      </div>
      <div className="jungle-solo flex items-center py-10">
        <h2 className={`${bebas.className} mb-2 text-6xl font-semibold`}>Sponsors</h2>
        <div className="flex flex-wrap items-center justify-center">
          <Link className="mx-20 lg:w-1/5 m-5 logo" href="https://www.simonsfoundation.org/collaborations/global-brain/"><Image src={SimonsFoundationLogo} alt="Simons Foundation" /></Link>
          <Link className="mx-20 lg:w-1/5 m-5 logo" href="https://www.simonsfoundation.org/flatiron/center-for-computational-neuroscience"><Image src={FlatironInstituteLogo} alt="Flatiron Institute" /></Link>
        </div>
      </div>
      <div className="flex justify-center items-center bg-jungle text-white">
        <h2 className={`${bebas.className} mt-12 mb-4 text-6xl font-semibold text-gold`}>Logistics</h2>
        <div className="grid max-w-4xl min-h-1/4 grid-cols-1">
          <div className="flex flex-col justify-center text-lg px-8 pb-8">
            <p className="text-sand mb-2">
            Pre-COSYNE Brainhack runs from February 27-28, 2024 - the two days preceding the COSYNE conference. It consists
            of brief project pitches at the start, brief project presentations at the end, and an unconference session
            in the middle where participants can give brief talks on topics of shared interest. The rest of the time
            is dedicated to hacking and meals. The event runs from 8:30 AM to around 7 PM on both days.
            </p>
            <p className="text-sand mb-2">
            The hackathon will be hosted at the <a href={MAPS_URL}>Champalimaud Center for the Unknown</a> in
            Lisbon, Portugal.
            </p>
            <p className="text-sand mb-2">
            Since the hackathon is relatively short in duration, participants are strongly encouraged to
            arrive in Lisbon by 6 PM the day before the hackathon (Feb. 26) to join other participants for
            dinner and socializing. Participants are strongly encouraged to stay through the Simons Foundation
            social at the end of the second day.
            </p>
            <p className="text-sand mb-2">
            Similar to hackathons in the tech sector, much of the schedule is left open for attendees to work
            together on projects of their choosing. We also include an unconference session that consists of
            talks that are chosen by the attendees based on their interests as they evolve throughout the meeting.
            See the <Link href="/schedule">Schedule</Link> page for more details.
            </p>
            <p className="text-sand mb-2">
            Unlike a hackathon in the tech sector, there are no prizes. This hackathon is designed to encourage
            collaboration not competition.
            </p>
            <p className="text-sand mb-2">
            This hackathon is heavily inspired by
            the <a href="https://ohbm.github.io/hackathon2023/">OHBM Hackathon</a>, <a href="https://brainhack.org/">Brainhack</a>, and <a href="https://www.brainsimulation.org/bsw/zwei/events/single/11217-ebrains-hbp-codejam-workshop-13"> EBRAINS/HBP/NeuralEnsemble CodeJam
            </a> events. For more information about the history and culture of Brainhack, please see this <a href="https://www.sciencedirect.com/science/article/pii/S0896627321002312">Neuron NeuroView article</a>.
            </p>
            <p className="text-sand">
            Pre-COSYNE Brainhack is not an official part of COSYNE.
            </p>
          </div>
        </div>
      </div>
      <div className="jungle-solo flex justify-center items-center">
        <h2 className={`${bebas.className} mt-12 mb-4 text-6xl font-semibold`}>FAQ</h2>
        <div className="grid max-w-4xl min-h-1/4 grid-cols-1">
          <div className="flex flex-col justify-center text-lg px-8 pb-8">
            <p className="text-bolder">
              Will travel or accommodation be provided?
            </p>
            <p className="mb-4">
                No. We are unable to provide travel or accommodation for
                participants. However, we will provide a list of recommended hotels in the area.
            </p>
            <p className="text-bolder">
              Will food be provided?
            </p>
            <p className="mb-4">
                Breakfast, lunch, and coffee will be provided through a generous gift from the Simons
                Collaboration on the Global Brain and the Center for Computational Neuroscience at the
                Flatiron Institute. The Simons Foundation will also
                be organizing a social with refreshments on the last day of the hackathon.
            </p>
            <p className="text-bolder">
              Who is eligible to participate?
            </p>
            <p className="mb-4">
                Anyone is welcome to participate! However, you must register in advance and, due to
                space constraints, we may not be able to accommodate everyone.
            </p>
            <p className="text-bolder">
              When should I arrive to Lisbon?
            </p>
            <p className="mb-4">
                Since the hackathon is relatively short in duration, participants are strongly encouraged to arrive in
                Lisbon by 18:00 the day before the hackathon (Feb. 26) to join other participants for dinner and
                socializing.
            </p>
            <p className="text-bolder">
              What is your COVID-19 vaccination and mask policy?
            </p>
            <p className="mb-4">
              Pre-COSYNE Brainhack&apos;s COVID policy aligns with local guidelines. Currently, proof of vaccination
              is not required, and while masks are strongly encouraged, they are not mandatory. In addition to local
              guidelines, there are a couple additional policies. If you are sick,
              please notify the organizers and DO NOT attend the hackathon in-person. We will work out an alternate
              way for you to participate. Testing for COVID prior to attendance is strongly encouraged, but not
              mandatory.
              If local guidelines change, Pre-COSYNE Brainhack will adapt its policy accordingly.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
