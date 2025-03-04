import Image from 'next/image'
import React from 'react'
import { IoMdTime } from 'react-icons/io'
import { MdCalendarMonth } from 'react-icons/md'
import { PiMapPinLineFill } from 'react-icons/pi'
import smiling from "../assets/smiling.png"

const AboutSui = () => {
  return (
    <div className='relative w-full bg-white'>
        <div className='w-full px-6 h-[200px] md:container md:mx-auto' >
            <div className='absolute flex flex-col items-start space-y-4 px-6 py-6 h-[210px] w-[90%] -top-10 bg-white shadow-2xl rounded-2xl md:w-[80%] lg:w-[70%] lg:right-48 md:h-[120px] md:flex-row md:items-center md:justify-between lg:px-12'>
                <div className='flex items-center space-x-2'>
                    <MdCalendarMonth size={30} className='text-blue-700'/>
                    <p className='block font-semibold lg:hidden'>March 24-29, 2025</p>
                    <p className='hidden lg:block font-semibold'>March 24-29, <br/>2025</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <PiMapPinLineFill size={30} className='text-blue-700'/>
                    <p className='font-bold text-wrap'>312, herbert Macauley, <br/>Sabo, Yaba, Lagos, Nigeria.</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <IoMdTime size={30} className='text-blue-700'/>
                    <div className='flex flex-col items-start'>

                    <p className='font-normal'>Application deadline:</p>
                    <p className='font-bold'>March 12, 2025</p>
                    </div>
                </div>
            </div>
        

        </div>
        <div className='relative py-6 px-4 flex flex-col space-y-6 md:flex-row md:justify-between md:items-start md:container md:mx-auto'>
        <Image src={smiling} alt='smiling image' className='w-full h-full md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3'/>
        <div className='w-full md:w-1/2 md:h-full md:px-4 lg:px-8'>
          <h2 className='mb-6 text-3xl font-bold text-blue-700'>About SUI Lagos Hacker House</h2>
          <p className='mb-4 text-lg'>
            <span className='font-semibold text-blue-700'>Sui Lagos Hacker House</span> is a 6-day event that is designed to bring together developers, engineers, builders, innovators, and blockchain enthusiasts who are interested in building on the Sui blockchain.
          </p>
          <p className='mb-4 text-lg'>
            The event will feature workshops, mentorship and coaching sessions, hacking, and networking opportunities to encourage innovation and collaboration. Attendees will learn about the Sui blockchain, develop skills to build robust solutions using Sui and prepare for the <span className='font-semibold text-blue-700'>Sui Overflow 2023 Hackathon</span>, a global competition with over $500,000 in combined prizes.
          </p>
          <p className='mb-4 text-lg'>
            The Sui Lagos Hacker House is implemented by <span className='font-semibold'>Semicolon</span> and sponsored by <span className='font-semibold'>Sui Foundation</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSui