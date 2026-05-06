import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-slate-900 to-black text-white'>
      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12'>
          <div className='lg:col-span-2 space-y-4'>
            <div className='font-extrabold text-5xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'>
              RentX
            </div>
            <p className='text-sm text-slate-300 leading-relaxed'>
              Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
            </p>
            <div className='flex gap-4 pt-4'>
              <a href='#' className='w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300'>
                <span className='text-lg'>f</span>
              </a>
              <a href='#' className='w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300'>
                <span className='text-lg'>𝕏</span>
              </a>
              <a href='#' className='w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300'>
                <span className='text-lg'>in</span>
              </a>
              <a href='#' className='w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300'>
                <span className='text-lg'>📷</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-6 text-blue-400'>Quick Links</h3>
            <ul className='space-y-3'>
              <li>
                <Link to='' className='text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='' className='text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm'>
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link to='' className='text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm'>
                  List Your Cars
                </Link>
              </li>
              <li>
                <Link to='' className='text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm'>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-6 text-blue-400'>Resources</h3>
            <ul className='space-y-3'>
              <li>
                <Link to='' className='text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm'>
                  Help Center
                </Link>
              </li>
              <li>
                <Link to='' className='text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm'>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to='' className='text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='' className='text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm'>
                  Insurance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-6 text-blue-400'>Contact</h3>
            <ul className='space-y-3 text-sm text-slate-300'>
              <li>1234 Luxury Drive</li>
              <li>San Francisco, CA 94107</li>
              <li className='pt-2'>
                <a href='tel:+12345678901' className='hover:text-blue-400 transition-colors duration-300'>
                  +1 (234) 567-8901
                </a>
              </li>
              <li>
                <a href='mailto:info@rentx.com' className='hover:text-blue-400 transition-colors duration-300'>
                  info@rentx.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-slate-700 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-slate-400 text-sm'>
              © 2026 RentX. All rights reserved.
            </p>
            <div className='flex gap-6'>
              <Link to='' className='text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm'>
                Privacy
              </Link>
              <Link to='' className='text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm'>
                Terms
              </Link>
              <Link to='' className='text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm'>
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
