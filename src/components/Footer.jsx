import React from 'react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }

  return (
    <footer className='bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
          <div className='lg:col-span-4'>
            <div className='flex gap-1 items-center mb-6'>
              <div className='flex items-center gap-1 cursor-pointer'>
                <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
                <div className='w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-75 hover:opacity-75 transition-opacity'></div>
              </div>
              <span className='text-xl font-medium ml-1'>The Lorem Ipsum</span>
            </div>
            <p className='text-gray-600 mb-6 md:w-3/4'>The Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur atque voluptate debitis nihil quae inventore.</p>
          
            <div className='flex gap-4'>
              <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center
                text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200'>
                <FaFacebookF className='size-5'/>
              </a>
              <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center
                text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200'>
                <FaTwitter className='size-5'/>
              </a>
              <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center
                text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200'>
                <FaLinkedin className='size-5'/>
              </a>
            </div>
          </div>

          <div className='lg:col-span-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <div key={category}>
                  <h3 className='text-lg font-medium mb-4 uppercase'>{category}</h3>
                  <ul className='space-y-3'>
                    {links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href="#" className='text-gray-600 hover:text-gray-900'>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='border-t border-gray-200 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-600 text-sm'>Copyright © {new Date().getFullYear()} eugericocarl.com</p>
            <p className='text-gray-600 text-sm'>Created by Jerico Caranto</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer