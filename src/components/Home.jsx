import React from 'react'
import car from '../assets/car.png'
import GradualBlurMemo from './ui/GradualBlur/GradualBlur'
import CircularGallery from './ui/CircularGallery/CircularGallery'
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'

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
      <GradualBlurMemo position="bottom" height="8rem" strength={3}/>

    </div>
    <div className='m-auto w-full flex justify-center  mt-4 py-4'>
      <h1 className='font-extrabold text-4xl'>Featured Cars</h1>
    </div>
    <div className='h-150 relative'>
  <CircularGallery items={galleryItems} bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}
  scrollSpeed={2}
/>
</div>
    </>
  )
}

export default Home
