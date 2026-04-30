import React from 'react'
import loginbg from '../../assets/loginbg.png'

const Login = () => {
  return (
    <div className='h-screen relative'>
      <img className='w-full absolute h-full object-cover block' src={loginbg} alt="" />
      <div className='w-[30vw] z-5 absolute right-10 top-25 border-2 rounded-2xl h-[80vh] bg-white/10
      backdrop-blur-xl
    border-white/20
      shadow-[0_8px_32px_rgba(0,0,0,0.4)]'>
        <h2 className="text-white text-2xl font-semibold mb-6">
        Welcome Back
      </h2>

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

      <button className="
        w-full py-3 rounded-lg
        bg-yellow-500 hover:bg-yellow-400
        text-black font-semibold
        transition
      ">
        Login
      </button>
      </div>
    </div>
  )
}

export default Login
