import React from 'react'

const View = () => {
  return (
<div className="flex mt-5 m-auto  gap-5 md:w-6/12 justify-center h-96  sm:w-5/6 flex-col md:flex-row">

    <div className=" container flex sm:flex-row md:flex-col        items-center border-4 gap-4 md:max-w-60 sm:w-10/12 mt-32 md:mt-0 ">
        <div className="border-2 h-32 w-32 border-slate-950 rounded-full p-2 bg-slate-800 text-8xl  overflow-hidden mt-3">
         <label>🙎🏻‍♂️</label> 
        </div>
        <div className="text-2xl text-sky-900 font-bold">
          <p>@Mandeep</p>
        </div>
       
          <button className=' p-1 text-white px-6 border-2 rounded-lg hover:bg-red-500 bg-green-600'>Update</button>
          <button className='p-1 text-white px-6 border-2 rounded-lg hover:bg-red-500 bg-green-600'>Delete</button>
       
      </div>
      
   
    <div className=" flex flex-col border-2 p-5 items-center w-full">
      <h1 className='text-3xl font-bold text-lime-700 underline'>View</h1>
    <table className="table-auto w-full">

             <tbody>
             <tr>
              <td className=' text-sky-800 font-bold text-xl p-3'>Name:</td>
              <td>Mandeep Kumar</td>
             </tr>
             <tr>
              <td className=' text-sky-800 font-bold text-xl p-3'>Email:</td>
              <td>minturaj@gmail.com</td>
             </tr>
             <tr>
              <td className=' text-sky-800 font-bold text-xl p-3'>Mobile:</td>
              <td>6299892429</td>

             </tr>
             <tr>
              <td className=' text-sky-800 font-bold text-xl p-3'>Alt mob:</td>
              <td>7833123456</td>
             </tr>
                <tr>
              <td className=' text-sky-800 font-bold text-xl p-3'>Group:</td>
              <td>Family</td>
             </tr>
             </tbody>
          </table>   
    </div>
</div>

  )
}

export default View