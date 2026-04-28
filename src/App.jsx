import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NavbarDemo from './components/resizable-navbar-demo'

const App = () => {
  return (
    <>
      <NavbarDemo/>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/cars" element={<h1>Cars Page</h1>} />
        <Route path="/bookings" element={<h1>My Bookings Page</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
