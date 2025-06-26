import React from 'react'

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col md:flex-row justify-between pt-44 pb-6 px-4 sm:px-6 lg:px-8'>
      
      <div className='w-full md:w-1/2 space-y-8'>
        <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
          <span className='text-blue-600 group-hover:text-amber-300 group-hover:scale-110 transition-transform'>★</span>
          <span className='text-sm font-medium'>Jump start your growth</span>
        </div>
      </div>

      <div className='w-full md:w-1/2'>Right</div>
    </section>
  )
}

export default Hero