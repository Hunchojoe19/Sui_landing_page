import Image from 'next/image'
import React from 'react'

const EligibilityPage = () => {
  return (
    <section className="mx-auto w-full lg:max-w-6xl px-4 py-8 my-8">
  <div className="relative rounded-xl bg-[#0A1739] overflow-hidden md:overflow-visible">
    <div className="grid md:grid-cols-2 items-center relative">
      <div className="p-16 z-10 relative">
        <h3 className="mb-6 text-xl font-bold text-cyan-500">Eligibility Criteria</h3>
        <ul className="space-y-4">
          <li className="text-white">
            <span className="font-semibold text-cyan-500">Team Size:</span> Maximum of 4 (individuals are eligible to apply but will be paired to make the team)
          </li>
          <li className="text-white">
            <span className="font-semibold text-cyan-500">Participants:</span> Open to developers, designers, entrepreneurs, and blockchain enthusiasts
          </li>
        </ul>
      </div>
      <div className="relative md:static">
        <Image
          alt="Team members smiling"
          loading="lazy"
          width="500"
          height="350"
          decoding="async"
          className="w-full h-auto md:hidden"
          style={{ color: 'transparent' }}
        src={"https://suihackerhouse.semicolon.africa/eligibility-image.svg"}
        />
        <Image
        src={"https://suihackerhouse.semicolon.africa/eligibility-image.svg"}
          alt="Team members smiling"
          loading="lazy"
          width="600"
          height="450"
          decoding="async"
          className="hidden md:block absolute lg:-top-12 md:-top-0 md:right-0 md:translate-x-10 md:-translate-y-12"
          style={{ color: 'transparent' }}
        
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default EligibilityPage