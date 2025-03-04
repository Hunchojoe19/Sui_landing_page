import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-12 bg-[#051027] py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
        <div>
          <h4 className="mb-4 text-lg font-bold text-cyan-500">Logistics</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-cyan-500">•</span>
              <span>Accommodation will be provided for teams from outside Lagos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-cyan-500">•</span>
              <span>Lunch will be provided</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-bold text-cyan-500">Resources and Support</h4>
          <p className="mb-4">
            Semicolon is hosting the training on Sui Move, sponsored by the Sui Foundation. If you have any questions or need any kind of support, click on the link to register: 
            <a className="text-cyan-500 underline" href="https://bit.ly/SC-SUI-Training">https://bit.ly/SC-SUI-Training</a>
          </p>
          <p>
            Semicolon is a workforce development company that is solving the problem of youth unemployment by training software engineers and hardware developers through an intensive 12-month program. The company has a proven track record with over 300 software engineers in the global market.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2">
        <div className="mx-auto mt-12 flex max-w-6xl items-center gap-16 px-4">
          <div>
            <img
              alt="Semicolon logo"
              loading="lazy"
              width="120"
              height="30"
              decoding="async"
              className="h-6 w-auto object-contain bg-transparent"
              src="https://suihackerhouse.semicolon.africa/semicolon-logo.svg"
            />
          </div>
          <span className="text-xl">|</span>
          <div>
            <img
              alt="Sui logo"
              loading="lazy"
              width="120"
              height="30"
              decoding="async"
              className="h-6 w-auto object-contain bg-transparent"
              src="https://suihackerhouse.semicolon.africa/sui-logo.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer