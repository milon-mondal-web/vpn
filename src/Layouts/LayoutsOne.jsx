import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Home from '../Pages/Home'

const LayoutsOne = () => {
  return (
      <>
        <Navbar/>
        <Outlet/>
        <Home/>
      </>
  )
}

export default LayoutsOne