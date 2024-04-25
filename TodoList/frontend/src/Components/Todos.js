import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'

const Todos = () => {

    let obj=useSelector(state=>state.todo)
   
    if(obj.isLoading)
      return <h1>Loading.....</h1>
   
    

  return (
    <div className='flex flex-col  gap-4 w-4/5 mx-auto mt-4'>
     
    {
       obj.data && obj.data.map((item,key)=>(
          <Todo key={item.userid} item={item}/>
       ))
    }
     

    </div>
  )
}

export default Todos