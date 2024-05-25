import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'


const Privarcy = () => {
    const Navigate=useNavigate()
    const {Currentuser}=useSelector(state=>state.users)
  return (
    <>
     { Currentuser ?<Outlet/>: Navigate('/login') }
    </>
  )
}

export default Privarcy