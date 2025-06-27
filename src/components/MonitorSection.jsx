import React from 'react'

import monitorImage from '../assets/monitor-card.webp'
import { IoIosArrowRoundForward } from 'react-icons/io'

const MonitorSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24'>
        <div className='md:w-1/2 w-full'>
          <p className='text-green-500 font-semibold'>MONITOR</p>
          <h2 className='text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5'>
            Introducing best mobile carousels
          </h2>
          <p className='text-gray-600 mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>
            Learn more about monitoring
            <IoIosArrowRoundForward className='size-8' />
          </a>
        </div>

        <div className='md:w-1/2 w-full'>
          <img src={monitorImage} alt="schedule image" className='w-full h-auto' />
        </div>
      </div>
    </section>
  )
}

export default MonitorSection