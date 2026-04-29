import React from 'react'

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
          Social links will appear here
        </div>
      </div>
      <div className='border flex p-10 gap-10 w-[40vw] h-[40vh]'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl'>Quick Links</h1>
          <ul>
            <li>Home</li>
            <li>Browse Cars</li>
            <li>List your cars</li>
            <li>About us</li>
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl'>Resources</h1>
          <ul>
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Insurance</li>
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl'>Contact</h1>
          <ul>
            <li>1234 Luxury Drive</li>
            <li>San Francisco, CA 94107</li>
            <li>+1 234 567890</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
