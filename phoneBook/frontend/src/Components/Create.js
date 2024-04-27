import React from 'react'

const Create = () => {
  return (
    

          <form className='container md:w-2/5  h-auto m-auto w-full'>
            <div className='flex flex-col gap-4 p-4 font-bold text-xl '>
               <div className='flex flex-col gap-1'>
                 <label>Name:</label>
                 <input type='text' placeholder='Enter Name:--' className='border-2 border-slate-800 text-lg font-normal p-1 px-2 rounded-md'/>
                
               </div >
               <div className='flex flex-col gap-1'>
                 <label>Email:</label>
                 <input type='email' placeholder='Enter Email:--' className='border-2 border-slate-800 text-lg font-normal p-1 px-2 rounded-md'/>
                
               </div>
               <div className='flex flex-col gap-1'>
                 <label>Mobile:</label>
                 <input type='number' placeholder='Enter Mobile no--' className='border-2 border-slate-800 text-lg font-normal p-1 px-2 rounded-md'/>
                
               </div>
               <div className='flex flex-col gap-1'>
                 <label>Alternate mobile:</label>
                 <input type='number' placeholder='Enter another mobile no:--' className='border-2 border-slate-800 text-lg font-normal p-1 px-2 rounded-md'/>
                
               </div>
               <div className='flex flex-col gap-1'>
                 <label>Group:</label>
                 <select name="group" placeholder="select group " className='border-2 border-slate-800 text-lg font-normal p-1 px-2 rounded-md'>
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