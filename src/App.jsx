import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import NavbarDemo from './components/resizable-navbar-demo'
import Home from './components/Home'
import Login from './components/auth/Login'
import Cars from './components/Cars'
import CarDetails from './components/CarDetails'
import MyBookings from './components/MyBookings'

const App = () => {
  const [bookings, setBookings] = React.useState([]);
  const addBooking = (booking) => setBookings(prev => [...prev, booking]);
  return (
    <>
      <div className="relative">
        <div className='absolute w-full'>
          {location.pathname != '/login' && <NavbarDemo />}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/car-details/:id" element={<CarDetails addBooking={addBooking} />} />
          <Route path="/bookings" element={<MyBookings bookings={bookings} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <div className='mt-15'>
          {location.pathname != '/login' && <Footer />}
        </div>
      </div>
    </>
  )
}

export default App
