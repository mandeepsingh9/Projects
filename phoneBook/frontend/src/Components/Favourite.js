import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Favourite = () => {
  
  const dispatch=useDispatch();
  const obj=useSelector(state=>state.favourite)
  useEffect(()=>{
     
  })
  return (
    <>
        <h1>Comming soon....</h1>
    </>
  )
}

export default Favourite