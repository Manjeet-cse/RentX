import React from 'react'
import car from '../assets/car.png'
import GradualBlurMemo from './ui/GradualBlur/GradualBlur'
import CircularGallery from './ui/CircularGallery/CircularGallery'
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'
import img4 from '../assets/image4.png'
import img5 from '../assets/image5.png'
import img6 from '../assets/image6.png'
import img7 from '../assets/image7.png'
import img8 from '../assets/image8.png'
import img9 from '../assets/image9.png'
import img10 from '../assets/image10.png'
import blueBoxCar from '../assets/blueBoxCar.png'
import CustomerFeedbackCard from './CustomerFeedbackCard'
import { address, image } from 'motion/react-client'
import { Link } from 'react-router-dom'
import test from 'node:test'

const Home = () => {
  const galleryItems = [
    {
      image: img1,
      text: 'Rolls-Royce Phantom'
    },
    {
      image: img2,
      text: 'Ferrari Roma'
    },
    {
      image: img3,
      text: 'McLaren 720S'
    },
    {
      image: img4,
      text: ' Lamborghini Urus'
    },
    {
      image: img5,
      text: 'Mercedes-AMG GT'
    },
    {
      image: img6,
      text: ' Audi R8 V10'
    },
    {
      image: img7,
      text: 'Porsche 911 GT3'
    },
    {
      image: img8,
      text: 'Ford Mustang Shelby GT500'
    },
    {
      image: img9,
      text: "Volkswagen Beetle"
    },
    {
      image: img10,
      text: "Chevrolet Camaro SS."
    }
  ]
  const feedback = [
    {
      profilePhoto: img1,
      name: "Priyaaa",
      address: "India",
      stars: 5,
      description: "I've rented cars from various companies, but the experience with CarRental was exceptional."
    },
    {
      profilePhoto: img2,
      name: "Piyuu",

      address: "India",
      stars: 5,
      description: "CarRental made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!"
    },
    {
      profilePhoto: img3,
      name: "Manju",
      address: "India",
      stars: 4,
      description: "I highly recommend CarRental! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent service."
    }
  ]

  return (
    <>
      <div className='w-screen relative h-screen flex'>
        <img className='absolute w-[80vw] top-[70%] left-1/2 z-2 -translate-x-1/2 -translate-y-1/2' src={car} alt="" />
        <h1 className='absolute font-extrabold z-1 top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18rem] text-white'>RentX</h1>
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
      <div className='h-140 flex items-center flex-col relative '>
        <CircularGallery items={galleryItems} bend={3} textColor="#000000ff" borderRadius={0.05} scrollEase={0.02}
          scrollSpeed={2}
        />
        <Link to="/cars"><button className='border py-1 rounded w-40'>Explore all cars {'->'}</button></Link>
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
        <div className='flex w-full justify-center gap-10'>
          {
            feedback.map((obj) => {
              return <CustomerFeedbackCard profilePhoto={obj.profilePhoto} name={obj.name} address={obj.address} stars={obj.stars} description={obj.description} />
            })
          }

        </div>
      </div>
      <div className="flex flex-col gap-6 justify-center h-60 items-center">
        <h1 className='font-extrabold text-4xl' style={{ fontFamily: 'var(--font-car)' }}>Never Miss a Deal!</h1>
        <div className='flex gap-6'>
          <input className='border rounded-2xl w-120 px-4 h-10' placeholder='Enter your email id' type="text" />
          <button className='px-7 bg-blue-600 h-10 text-white rounded-2xl'>Subscribe</button>
        </div>
      </div>
    </>
  )
}

export default Home
