import React from 'react'
import { Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex justify-center'>
      <div className='border w-[40vw] flex flex-col gap-5 p-10 h-[40vh]'>
        <div className='font-extrabold text-4xl'>
          Rentx
        </div>
        <p className='text-xs'>
          Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
        </p>
        <div>
          Social Link to=''nks will appear here
        </div>
      </div>
      <div className='border flex p-10 gap-10 w-[40vw] h-[40vh]'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl'>Quick Linknks</h1>
          <ul>
            <Link to=''>Home</Link>
            <Link to=''>Browse Cars</Link>
            <Link to=''>List your cars</Link>
            <Link to=''>About us</Link>
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl'>Resources</h1>
          <ul>
            <Link to=''>Help Center</Link>
            <Link to=''>Terms of Service</Link>
            <Link to=''>Privacy PoLink to=''cy</Link>
            <Link to=''>Insurance</Link>
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl'>Contact</h1>
          <ul>
            <Link to=''>1234 Luxury Drive</Link>
            <Link to=''>San Francisco, CA 94107</Link>
            <Link to=''>+1 234 567890</Link>
            <Link to=''>info@example.com</Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
