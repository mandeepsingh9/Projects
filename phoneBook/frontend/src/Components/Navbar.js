import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between  p-4 bg-slate-900 text-white sticky top-0">

     <NavLink to={'/'} className="flex items-center flex-shrink-0 text-black mr-6 lg:mr-10">
       <label className='text-white text-2xl font-extrabold cursor-pointer shadow-transparent'>PhoneBook</label>
     </NavLink>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-8 w-8 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-6 w-6 ${isOpen ? "block"  : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
       <div className=" text-blue-700 text-xl font-bold  lg:flex-grow">
       <NavLink to={"/"}  className={({ isActive }) => isActive ? 'text-green-600 ' : ''}>
         <div className='block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 p-1 px-2 rounded-lg hover:text-red-600 hover:bg-slate-600 '>        
           Home
          </div>
         </NavLink>
         <NavLink to={"/create"}  className={({ isActive }) => isActive ? 'text-green-600 ' : ''}>
         <div className='block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 p-1 px-2 rounded-lg hover:text-red-600 hover:bg-slate-600 '>        
           Create
          </div>
         </NavLink>
         <NavLink to={"/favourite"}  className={({ isActive }) => isActive ? 'text-green-600 ' : ''}>
         <div className='block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 p-1 px-2 rounded-lg hover:text-red-600 hover:bg-slate-600 '>        
           Favourite
          </div>
         </NavLink>
       
       </div>
       <div>
           <input type='text' placeholder='serach name' className='h-8 w-80 px-6 border-2 rounded-xl border-cyan-400 my-auto ' />
           <button className=' ml-4 bg-slate-600 p-1 px-2  rounded-md'>Search</button>
       </div>
     </div>
   </nav>
  )
}

export default Navbar