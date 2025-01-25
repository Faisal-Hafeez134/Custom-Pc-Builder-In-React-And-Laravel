import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import ShopNavbar from './Components/ShopNavbar'

const Layout = () => {
    const location = useLocation();

    const shopRoutes = ['/shop', '/productdetail', '/graphicshop/:type', '/gammingpc/:type', '/checkout'];

    // Determine which navbar to render
    const isShopRoute = shopRoutes.some((route) => location.pathname.startsWith(route));
  return (
    <>
   {/* <Navbar/> */}
   {isShopRoute ? <ShopNavbar /> : <Navbar />}
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout