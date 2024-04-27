import React from 'react'
import Filter from './Filter'
import Card from './Card'

const Home = () => {
  return (
   <div>
    <Filter/>
    <div className=' flex items-center gap-2 flex-wrap justify-evenly'>
          <Card />
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
   </div>

   </div>
  )
}

export default Home