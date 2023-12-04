import TeamMember from '@/components/team-member'

import RyanLy from '../../public/team/ryan-ly.png'
import OlivierWinter from '../../public/team/olivier-winter.jpg'
import FlorianRau from '../../public/team/florian-rau.jpeg'

import getConfig from 'next/config'
const {
  publicRuntimeConfig: {
  }
} = getConfig()

export async function getStaticProps() {
  return { props: { bodyClassName: 'jungle full-jungle fixed-jungle' } }
}

export default function Team() {
  return (
    <main>
      <div className="text-sand-light flex flex-col items-center">
        <h2>
          Team
        </h2>
        <div className="grid grid-cols-3 gap-2 md:gap-12 lg:gap-12 max-w-5xl mt-12">
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
