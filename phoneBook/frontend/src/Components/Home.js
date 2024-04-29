import React from 'react'
import Filter from './Filter'
import Card from './Card'
import {useSelector} from 'react-redux'
const Home = () => {

     const obj=  useSelector(state=>state.contact)
 
  return (
   <div>
    <Filter/>
    <div className=' flex items-center gap-2 flex-wrap justify-evenly'>
        {
          obj.data && obj.data.map((item,key)=>(
            <Card key={item._id} item={item}/>
          ))
        }
   </div>

   </div>
  )
}

export default Home