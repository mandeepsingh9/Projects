import React from 'react'

const Todo = ({item}) => {
  return (
    <div className='flex border-2 justify-between p-5 rounded-3xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% shadow-lg shadow-gray-600 hover:shadow-red-500/40'>
        <div className='bg-transparent'><label>{item.item}</label></div>
        <div className='bg-transparent flex gap-5'>
            <label  >✏️</label>
            <label>❌</label>
        </div>
    </div>
  )
}

export default Todo