import React from 'react'
import Filter from './Filter'
import Card from './Card'
import {useSelector} from 'react-redux'
const Home = () => {

     const obj=  useSelector(state=>state.contact)
 
  return (
   <div>
    <Filter/>
    <div className=' container flex flex-wrap  items-center    w-3/4 mx-auto '>
        {
         
         obj.filter &&  obj.filter.map((item,key)=>(
            <Card key={item._id} item={item}/>
          ))
        }
   </div>

   </div>
  )
}

export default Home