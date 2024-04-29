import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterAction } from '../Store/ContactSlice';

const Filter = () => {

 
 const dispatch=useDispatch();
 

 function changevalue(e)
 {
    const data=e.target.value;

     
     dispatch (filterAction(data))
 }


  return (
    <form className='flex flex-wrap gap-6 m-4 font-bold font-xl bg-slate-900 text-slate-200 justify-evenly p-4 rounded-3xl border-4' >
        <div className=' flex-grow '>
          <input type='radio' name='group' value="All" className=' mx-4' onChange={changevalue}    />
           <label>All</label>
        </div>
        <div className=' flex-grow  '> 
          <input type='radio' name='group' value="School" className=' mx-4' onChange={changevalue} />
           <label>School</label>
        </div>
        <div className=' flex-grow '>
          <input type='radio' name='group' value="Company"className=' mx-4' onChange={changevalue}/>
           <label>Company</label>
        </div>
        <div className=' flex-grow '>
          <input type='radio' name='group' value="Friend" className=' mx-4'onChange={changevalue} />
           <label>Friend</label>
        </div>
        <div className=' flex-grow '>
          <input type='radio' name='group' value="Family" className=' mx-4' onChange={changevalue}  />
           <label>Family</label>
        </div>
        <div className=' flex-grow '>
          <input type='radio' name='group' value="Other"className=' mx-4'onChange={changevalue} />
           <label>Other</label>
        </div>
    </form>
  )
}

export default Filter