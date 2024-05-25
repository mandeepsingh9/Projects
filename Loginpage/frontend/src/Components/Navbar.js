import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux' 
import { LogoutController } from '../stores/AuthSlice'

const Navbar = () => {
       const dispatch=useDispatch()
       const Navigate=useNavigate();
        const {Currentuser}=useSelector(state=>state.users);
        async function handleLogout(e)
        {
          e.preventDefault();
           const abc=await dispatch(LogoutController())
           if(abc.payload.status==="sucess")
            {
                Navigate("/login")
            }
        }

  return (
    <div className='  w-full flex-wrap h-auto items-center justify-between flex p-4  bg-slate-800 sticky top-0 '>
       <div className=' flex items-center gap-10' >
           <p className='text-2xl font-bold ml-5'>PhoneBook</p>
           <nav className='flex list-none gap-5 '>
             <NavLink to={"/"}> <li className=' hover:text-red-500 '>Home</li></NavLink>
             <NavLink>  <li  className=' hover:text-red-500'>Contact</li></NavLink>
              <NavLink><li  className=' hover:text-red-500'>About</li></NavLink>

           </nav>  
       </div>
        <div className=' flex gap-4 items-center'>
            <div className='flex border-2 border-solid rounded-lg h-10'>
                <input type='text' className=' hidden sm:block'/>
                <button className=' rounded-lg p-1 bg-transparent '>🔍</button>
            </div>
           
              {
                 !Currentuser ? 
                 <Link to={"/login"}>
             <div className=' px-3 p-1 font-bold bg-sky-500 rounded-lg border-2 border-solid mr-3 hover:bg-green-900 '>
                <button>LogIn</button>
            </div>  </Link>
              :

            <div className=' text-center font-bold bg-sky-500 rounded-full border-2 border-solid mr-8 w-14 h-14'>
               <label className='text-4xl'>🙎</label>
               <option className=' mt-2 cursor-pointer' onClick={handleLogout}>Logout</option>
            </div>
             }
           
        </div>

    </div>
  )
}

export default Navbar