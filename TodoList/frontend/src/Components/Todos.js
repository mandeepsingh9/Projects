import {React,useEffect} from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux';
const Todos = () => {

  const dispatch=useDispatch()
 
  const obj= useSelector(state=>state.todo)
   
     
  return (
    <div className='flex flex-col  gap-4 w-4/5 mx-auto mt-4'>
     
    
     {
       obj.data && obj.data.map((item,key)=>{
         return <Todo item={item} key={item.userid}/> 
       }

       )
     }

    </div>
  )
}

export default Todos