import React from 'react'

const Register = () => {
  return (
    <form  className='container flex flex-col border-2 md:w-2/3 bg-slate-800 mt-6 m-auto p-6 rounded-xl gap-3 h-auto font-bold text-normal lg:w-2/5' >
    <div className=' text-center font-extrabold text-2xl text-green-800 underline '>Register</div>
    <div className='flex flex-col gap-2 ' >
        <label>UserName</label>
        <input type='text' placeholder=' Enter UserName'  className='p-1 text-green-700 text-lg px-3 rounded-lg   border-2 border-solid border-cyan-900'/>
    </div>
    <div className='flex flex-col gap-2'>
        <label>Email</label>
        <input type='email' placeholder=' Enter Password' className='p-1 text-green-700 text-lg px-3 rounded-lg   border-2 border-solid border-cyan-900'/>
    </div>
    <div className='flex flex-col gap-2'>
        <label>Password</label>
        <input type='password' placeholder=' Enter Password' className='p-1 text-green-700 text-lg px-3  rounded-lg  border-2 border-solid border-cyan-900'/>
    </div>
    <div className='flex flex-col gap-2'>
        <label>Confirm Password</label>
        <input type='password' placeholder=' Enter Password' className='p-1 text-green-700 text-lg px-3 rounded-lg   border-2 border-solid border-cyan-900'/>
    </div>
  
   
    <div className='flex flex-col gap-2 items-end'>
        <button className=' border-2 bg-sky-800 p-1 rounded-lg px-3 '>Register</button>
    </div>
</form>
  )
}

export default Register