import React, { useRef } from 'react'
import {useDispatch} from 'react-redux'
import { createPhoneBook } from '../Store/ContactSlice';
import { Navigate, useNavigate } from 'react-router-dom';
const Create = () => {

            const Name= useRef();
            const Email=useRef();
            const Mobile=useRef();
            const Altmob=useRef();
            const Group=useRef();
            const dispatch=useDispatch();
            const navigate=useNavigate();
           function handleAdd(e)
            {
              e.preventDefault();

                const email=Email.current.value;
                const name=Name.current.value;
                const mobile=Mobile.current.value;
                const altno=Altmob.current.value;
                const group=Group.current.value;
                let obj={
                  email,name,mobile,altno,group
                }
               
              dispatch(createPhoneBook(obj))
               
              Email.current.value="";
              Name.current.value="";
              Mobile.current.value="";
              Altmob.current.value="";
              Group.current.value="";

              navigate('/');
            }
    
  return (
       

          <form className='container md:w-2/5  h-auto m-auto w-full' onSubmit={handleAdd}>
            <div className='flex flex-col gap-4 p-4 font-bold text-xl '>
               <div className='flex flex-col gap-1'>
                 <label>Name:</label>
                 <input type='text' placeholder='Enter Name:--' className='border-2 border-slate-800 text-lg font-normal p-1 px-2 rounded-md' ref={Name}/>
                
               </div >
               <div className='flex flex-col gap-1'>
                 <label>Email:</label>
                 <input type='email' placeholder='Enter Email:--' className='border-2 border-slate-800 text-lg font-normal p-1 px-2 rounded-md' ref={Email}/>
                
               </div>
               <div className='flex flex-col gap-1'>
                 <label>Mobile:</label>
                 <input type='number' placeholder='Enter Mobile no--' className='border-2 border-slate-800 text-lg font-normal p-1 px-2 rounded-md' ref={Mobile}/>
                
               </div>
               <div className='flex flex-col gap-1'>
                 <label>Alternate mobile:</label>
                 <input type='number' placeholder='Enter another mobile no:--' className='border-2 border-slate-800 text-lg font-normal p-1 px-2 rounded-md' ref={Altmob}/>
                
               </div>
               <div className='flex flex-col gap-1'>
                 <label>Group:</label>
                 <select name="group" placeholder="select group " className='border-2 border-slate-800 text-lg font-normal p-1 px-2 rounded-md' ref={Group}>
                      <option value="">Select...</option>
                      <option value="Family">Family</option>
                      <option value="Friend">Friend</option>
                      <option value="School">School</option>
                      <option value="Company">Company</option>
                      <option value="Company">Other</option>
                     
                  </select>
               </div>

               <div>
                 <button className=' border-2 border-gray-600 bg-slate-600 p-1 px-2 text-white rounded-lg float-right'>Create</button>
               </div>
                
            </div>

          </form>

  )
}

export default Create