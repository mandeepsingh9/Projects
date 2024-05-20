import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <form  className='container flex flex-col border-2 md:w-2/3 bg-slate-800 mt-6 m-auto p-6 rounded-xl gap-3 h-auto font-bold text-xl lg:w-2/5' >
        <div className=' text-center font-extrabold text-2xl text-green-800 underline '>LogIn</div>
        <div className='flex flex-col gap-2 ' >
            <label>UserName</label>
            <input type='text' placeholder=' Enter UserName'  className='p-1 text-green-700 text-lg px-3 rounded-lg   border-2 border-solid border-cyan-900'/>
        </div>
        <div className='flex flex-col gap-2'>
            <label>Password</label>
            <input type='password' placeholder=' Enter Password' className='p-1 text-green-700 text-lg px-3 rounded-lg   border-2 border-solid border-cyan-900'/>
        </div>
        <Link to={"/register"}>
        <p className=' font-normal text-sm text-orange-400 hover:text-red-800 cursor-pointer'>Click Here to register</p>
        </Link>
        <div className='flex  justify-center border-2 rounded-lg p-1 px-2 bg-orange-700  cursor-pointer text-lg mx-8'>
         
          <button>Login With Google</button>
         
        </div>
       
        <div className='flex flex-col gap-2 items-end'>
            <button className=' border-2 bg-sky-800 p-1 rounded-lg px-3 '>Login</button>
        </div>
    </form>
  )
}

export default Login