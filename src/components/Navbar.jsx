import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className='flex justify-between items-center px-8 py-5'>
        <Link to='/' className="text-3xl font-extrabold">
            RentX
        </Link>
        <div className="flex items-center gap-4">
            <ul className='flex gap-6'>
                <li className='cursor-pointer'><Link to="/">Home</Link></li>
                <li className='cursor-pointer'><Link to="/cars">Cars</Link></li>
                <li className='cursor-pointer'><Link to="/bookings">My Bookings</Link></li>
            </ul>
            <Link className='px-3 py-2 rounded-2xl'>List Cars</Link>
            <button className='bg-blue-500 px-7 py-2 rounded-2xl text-white cursor-pointer'>Login</button>
        </div>
      </nav>
  )
}

export default Navbar
