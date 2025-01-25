import React from 'react'
import ShopNavbar from './Components/ShopNavbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'


const ShopLayout = () => {
  return (
    <>
    <ShopNavbar/>
    <Outlet/>
    <Footer/>
    </>  )
}

export default ShopLayout