import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    
    <section className="bg-gradient-to-b from-[#051027] to-[#071a3e] text-white relative overflow-hidden" id='hero'>
      <div className="container mx-auto px-4 md:px-6 relative py-12">
        <div className='w-full flex justify-center items-center gap-x-4 mb-14'>
            <Image alt='semicolon-logo' src={"https://suihackerhouse.semicolon.africa/semicolon-logo.svg"} width={154} height={24}/>
            <div className='w-0.5 h-6 bg-white'/>
            <Image alt='semicolon-logo' src={"https://suihackerhouse.semicolon.africa/sui-logo.svg"} width={44} height={24}/>

        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <Image src={"https://suihackerhouse.semicolon.africa/hacker-house.svg"} height={120} width={368} alt='sui-logo'/>
          <p className="text-lg mb-6 text-blue-300 font-semibold italic">Road to Sui Overflow</p>
        </div>
      </div>
    </section>
  );
}