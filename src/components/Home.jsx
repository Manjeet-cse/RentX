import React from 'react'
import car from '../assets/car.png'

const Home = () => {
  return (
    <div className='w-screen relative h-screen flex'>
        <img className='absolute w-[80vw] top-[70%] left-1/2 z-2 -translate-x-1/2 -translate-y-1/2' src={car} alt="" />
        <h1 className='absolute font-extrabold z-1 top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18rem] text-white'>Race</h1>
      <div className="w-[40%] h-full bg-amber-400"></div>
      <div className="w-[60%] bg-gray-900 h-full"></div>
    </div>
  )
}

export default Home
