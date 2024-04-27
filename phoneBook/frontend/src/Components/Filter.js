import React from 'react'

const Filter = () => {
  return (
    <div className='flex flex-wrap gap-6 m-4 font-bold font-xl bg-slate-900 text-slate-200 justify-evenly p-4 rounded-3xl '>
        <div className=' flex-grow '>
          <input type='radio' name='group' value="All" className=' mx-4'/>
           <label>All</label>
        </div>
        <div className=' flex-grow  '> 
          <input type='radio' name='group' value="School" className=' mx-4' />
           <label>School</label>
        </div>
        <div className=' flex-grow '>
          <input type='radio' name='group' value="Company"className=' mx-4' />
           <label>Company</label>
        </div>
        <div className=' flex-grow '>
          <input type='radio' name='group' value="Friend" className=' mx-4'/>
           <label>Friend</label>
        </div>
        <div className=' flex-grow '>
          <input type='radio' name='group' value="Family" className=' mx-4' />
           <label>Family</label>
        </div>
        <div className=' flex-grow '>
          <input type='radio' name='group' value="Other"className=' mx-4' />
           <label>Other</label>
        </div>
    </div>
  )
}

export default Filter