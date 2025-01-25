import React from 'react'
import ShopNavbar from './Components/ShopNavbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

const AdminLayout = () => {
  return (
    <>
    <ShopNavbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AdminLayout