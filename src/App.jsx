import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import NavbarDemo from './components/resizable-navbar-demo'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <div className="relative">
      <div className='absolute w-full'>
      <NavbarDemo/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cars" element={<h1>Cars Page</h1>} />
        <Route path="/bookings" element={<h1>My Bookings Page</h1>} />
      </Routes>
      <div className=''>
      <Footer />
      </div>
      </div>
    </>
  )
}

export default App
