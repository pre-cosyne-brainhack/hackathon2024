import TeamMember from '@/components/team-member'

import RyanLy from '../../public/team/ryan-ly.png'
import OlivierWinter from '../../public/team/olivier-winter.jpg'
import FlorianRau from '../../public/team/florian-rau.jpeg'
import GaelleChapuis from '../../public/team/gaelle-chapuis.jpeg'

import getConfig from 'next/config'
const {
  publicRuntimeConfig: {
  }
} = getConfig()

export async function getStaticProps() {
  return { props: { bodyClassName: 'jungle fade-jungle' } }
}

export default function Team() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <h2>
          Team
        </h2>
        <div className="grid grid-cols-2 gap-2 md:gap-y-12 lg:gap-y-12 md:gap-x-24 lg:gap-x-24 max-w-5xl mt-12">
          <TeamMember
            circle="circle"
            size={1}
            name="Ryan Ly"
            photo={RyanLy.src}
            place="Berkeley, USA"
            social={{
              github: "rly",
            }}
          />
          <TeamMember
            circle="circle"
            size={1}
            name="Olivier Winter"
            photo={OlivierWinter.src}
            place="Lisbon, Portugal"
            social={{
              github: "oliche",
            }}
          />
          <TeamMember
            circle="circle"
            size={1}
            name="Gaelle Chapuis"
            photo={GaelleChapuis.src}
            place="Geneva, Switzerland"
            social={{
              github: "GaelleChapuis",
            }}
          />
          <TeamMember
            circle="circle"
            size={1}
            name="Florian Rau"
            photo={FlorianRau.src}
            place="Lisbon, Portugal"
            social={{
              github: "bimac",
            }}
          />
        </div>
      </div>
    </main>
  )
}
