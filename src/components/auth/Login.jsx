import React from 'react'
import loginbg from '../../assets/loginbg.png'

const Login = () => {
  return (
    <div className='h-screen relative'>
      <img className='w-full absolute h-full object-cover block' src={loginbg} alt="" />
      <div className='w-[30vw] z-5 absolute right-10 top-25 border-2 rounded-2xl h-[80vh] bg-white/10
      backdrop-blur-xl p-10
    border-white/20
      shadow-[0_8px_32px_rgba(0,0,0,0.4)]'>
        <h2 className="text-white text-2xl font-semibold mb-6">
          Welcome Back
        </h2>
        <div className='flex flex-col gap-2'>
          <h3 className='text-white text-xs '>Email Address</h3>
          <input
            placeholder="Email"
            className="
          w-full mb-4 p-3 rounded-lg
          bg-white/10 text-white
          border border-white/20
          outline-none
          focus:border-yellow-400
        "
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-white text-xs '>Password</h3>
          <input
            placeholder="Password"
            type="password"
            className="
          w-full mb-6 p-3 rounded-lg
          bg-white/10 text-white
          border border-white/20
          outline-none
          focus:border-yellow-400
        "
          />
        </div>
        <div className="flex w-full h-10 justify-end text-yellow-400 items-start text-xs">Forgot Password?</div>


        <button className="
        w-full py-3 rounded-lg
        bg-yellow-500 hover:bg-yellow-400
        text-black font-semibold
        transition 
      ">
          Login
        </button>

        <div className="flex items-center my-6">
          <hr className="grow border-white/20" />
          <span className="mx-3 text-white/60 text-xs">
            or continue with
          </span>
          <hr className="grow border-white/20" />
        </div>

        <div className="flex gap-3">
          <button className="flex items-center justify-center gap-2 w-full py-2 border border-white/20 rounded-lg hover:bg-white/10 transition text-white text-sm">
            <img src="/google.png" alt="google" className="w-5 h-5" />
            Google
          </button>
          <button className="flex items-center justify-center gap-2 w-full py-2 border border-white/20 rounded-lg hover:bg-white/10 transition text-white text-sm">
            <img src="/apple.png" alt="apple" className="w-5 h-5" />
            Apple
          </button>
          <button className="flex items-center justify-center gap-2 w-full py-2 border border-white/20 rounded-lg hover:bg-white/10 transition text-white text-sm">
            <img src="/facebook.png" alt="facebook" className="w-5 h-5" />
            Facebook
          </button>
        </div>
        <p className="text-[10px] text-white/60 mt-6 leading-relaxed">
          By continuing, you agree to our{" "}
          <span className="text-yellow-400 cursor-pointer hover:underline">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-yellow-400 cursor-pointer hover:underline">
            Privacy Policy
          </span>
        </p>
      </div>
      <div className='text-white z-50 absolute w-[30vw] top-50 left-20'>
        <div className='text-yellow-500'>Premium Car Rentals</div>
        <div className='text-5xl font-extrabold'>
          <h1>Your Drive.</h1>
          <h1>Your Experience.</h1>
          <h1>Your <span className='text-yellow-500'>Race.</span> </h1>
        </div>
        <div className='w-[20vw] text-xs mt-4'>
          Choose from the world's finest cars and make every journey unforgettable.
        </div>
        <div></div>
      </div>
      <div className="w-[40vw] absolute bg-white/10
      backdrop-blur-xl p-8
    border-white/20
      shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-2 flex rounded-4xl left-20 bottom-10 text-white">
        <div>
          <h1 className='font-bold'>Premium Collection</h1>
          <p className='text-xs'>Handpicked luxary and performance cars</p>
        </div>
        <div>
          <h1 className='font-bold'>Safe and Secure</h1>
          <p className='text-xs'>Top-tier security for a worry-free ride</p>
        </div>
        <div>
          <h1 className='font-bold'>24/7 Support</h1>
          <p className='text-xs'>We are here anytime you need us</p>
        </div>
      </div>
    </div>
  )
}

export default Login
