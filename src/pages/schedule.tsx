import React from 'react'

export async function getStaticProps() {
  return { props: { bodyClassName: 'jungle fade-jungle' } }
}

export default function Schedule() {
  return (
    <main>
      <div className="justify-center items-center">
        <div className="max-w-6xl">
          <h2>
            Schedule (Lisbon time)
          </h2>

          <div className="overflow-x-auto overflow-y-auto max-w-[100vw] mt-12 bg-white">
            <div style={{
              gridTemplateColumns: `3.5rem 16rem 16rem 16rem`,
              gridTemplateRows: `repeat(24, 4rem)`,
            }} className="grid grid-flow-col-dense max-w-full gap-2 p-6 text-center">
              <div className="sticky font-bold border-gray-200 border-b-2">Day</div>
              <div className="sticky font-bold border-gray-200 border-b-2">08:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">09:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">09:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">10:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">10:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">11:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">11:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">12:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">12:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">13:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">13:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">14:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">14:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">15:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">15:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">16:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">16:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">17:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">17:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">18:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">18:30</div>
              <div className="sticky font-bold border-gray-200 border-b-2">19:00</div>
              <div className="sticky font-bold border-gray-200 border-b-2">Into the night</div>

              <div className="sticky p-2 row-span-1 font-bold">
                Mon, Jan 29
              </div>
              <div className="p-2 row-span-1">
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Project brainstorming and <br/>meet-and-greet (Zoom)
              </div>
              <div className="p-2 row-span-10">
              </div>
              <div className="p-2 row-span-10">
              </div>

              <div className="sticky p-2 row-span-1 font-bold">
                Mon, Feb 26
              </div>
              <div className="p-2 row-span-11">
              </div>
              <div className="p-2 row-span-10">
              </div>
              <div className="p-2 row-span-2 border-black border-2 border-dashed">
                Meet at location TBD for dinner together
              </div>

              <div className="sticky p-2 row-span-1 font-bold">
                Tue, Feb 27
              </div>
              <div className="p-2 row-span-1 border-black border-2">
                Light breakfast and coffee
              </div>
              <div className="p-2 row-span-1 border-black border-2">
                Welcome
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Project pitches and mingling
              </div>
              <div className="p-2 row-span-4 border-black border-2">
                Hacking
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Lunch / Hacking
              </div>
              <div className="p-2 row-span-5 border-black border-2">
                Hacking
              </div>
              <div className="p-2 row-span-1 border-black border-2">
                Coffee break
              </div>
              <div className="p-2 row-span-5 border-black border-2">
                Hacking
              </div>
              <div className="p-2 row-span-2 border-black border-2 border-dashed">
                Go out to dinner together
              </div>

              <div className="sticky p-2 row-span-1 font-bold">
                Wed, Feb 28
              </div>
              <div className="p-2 row-span-1 border-black border-2">
                Light breakfast and coffee
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Presentations / Unconference
              </div>
              <div className="p-2 row-span-5 border-black border-2">
                Hacking
              </div>
              <div className="p-2 row-span-2 border-black border-2">
                Lunch / Hacking
              </div>
              <div className="p-2 row-span-5 border-black border-2">
                Hacking
              </div>
              <div className="p-2 row-span-1 border-black border-2">
                Coffee Break
              </div>
              <div className="p-2 row-span-3 border-black border-2">
                Wrap-up and closing
              </div>
              <div className="p-2 row-span-4 border-black border-2 border-dashed">
                Go to Simons Foundation social
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// after:absolute after:-z-20 after:content-[''] after:bottom-0 after:left-0 after:right-0 after:inset-2/3 after:bg-gradient-160 from-almost-black from-60% to-sand-dark