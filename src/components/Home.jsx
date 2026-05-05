import React from 'react'
import car from '../assets/car.png'
import GradualBlurMemo from './ui/GradualBlur/GradualBlur'
import CircularGallery from './ui/CircularGallery/CircularGallery'
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'
import blueBoxCar from '../assets/blueBoxCar.png'

const Home = () => {
  const galleryItems = [
    {
      image: img1,
      text: 'first'
    },
    {
      image: img2,
      text: 'second'
    },
    {
      image: img3,
      text: 'third'
    }
  ]
  return (
    <>
      <div className='w-screen relative h-screen flex'>
        <img className='absolute w-[80vw] top-[70%] left-1/2 z-2 -translate-x-1/2 -translate-y-1/2' src={car} alt="" />
        <h1 className='absolute font-extrabold z-1 top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18rem] text-white'>Race</h1>
        <div className="w-[40%] h-full bg-amber-400"></div>
        <div className="w-[60%] bg-gray-900 h-full"></div>
        <GradualBlurMemo position="bottom" height="8rem" strength={3} />

      </div>
      <div className='m-auto w-full justify-center py-4 flex flex-col items-center mt-3'>
        <h1 className='text-4xl font-extrabold uppercase tracking-[0.2em] text-slate-950 drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]' style={{ fontFamily: 'var(--font-car)' }}>
          Featured Cars
        </h1>
        <p className='mt-3 text-base text-slate-600'>Explore our selection of premium vehicles available for your next adventure.</p>
      </div>
      <div className='h-140 flex items-center flex-col relative'>
        <CircularGallery items={galleryItems} bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}
          scrollSpeed={2}
        />
        <button className='border py-1 rounded w-40'>Explore all cars {'->'}</button>
      </div>
      <div className='w-full flex justify-center p-20'>
          <div className='h-60 items-center flex p-10 rounded-4xl w-[80vw] bg-linear-to-r from-[#1E5BFF] via-[#4F8BFF] to-[#9FBFEF]'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-white font-bold text-3xl'>Do You Own a Luxury Car?</h1>
            <p className='text-white w-150'>Monetize your vehicle effortlessly by listing it on CarRental.
              We take care of insurance, driver verification and secure payments — so you can earn passive income, stress-free.</p>
            <button className='bg-white text-xs w-30 py-3 px-2 rounded-2xl ' style={{ fontFamily: 'var(--font-car)' }}>List your car</button>
          </div>
          <div>
            <img src={blueBoxCar} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className='h-60 flex flex-col gap-3 items-center justify-center'>
          <h1 style={{ fontFamily: 'var(--font-car)' }} className='text-4xl font-extrabold'>What Our Customers Say</h1>
          <p>Discover why discerning travelers choose StayVenture for their luxury accommodations around the world.</p>
        </div>
        <div>
          
        </div>
      </div>
    </>
  )
}

export default Home
