import React from 'react'
import Navbar from './Components/Navbar'
import { useForm } from 'react-hook-form'

import HomeView from './Views/HomeView'
import Footer from './Components/Footer'
import LogInView from './Views/LogInView'
import SignUpView from './Views/SignUpView'
import AboutView from './Views/AboutView'
import ContactView from './Views/ContactView'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AddToCart from './Views/AddToCart'
import CheckoutView from './Views/CheckoutView'
import CustomPcView from './Views/CustomPcView'
import ShopView from './Views/ShopView'
import SingleProductView from './Views/SingleProductView'
import GraphicShopView from './Views/GraphicShopView'
import Custompcshop from './Views/Custompcshop'
import CustomPcBundle from './Views/CustomPcBundle'


const App = () => {
  const location = useLocation();
  const excludedNavbarPaths = ['/productdetail', '/shop','/graphicshop','/custompcshop','/custompcbundle'];

  
  return (
  

    
    <div>

    {/* <Navbar/>
    <HomeView/> 
    <Footer/> */}
    
    {/* <LogInView/> */}
    {/* <SignUpView/> */}
    {/* <AboutView/> */}
    {/* <ContactView/> */}
    {/* {location.pathname !== '/productdetail' && <Navbar/>}
    {location.pathname !== '/shop' && <Navbar/>} */}

{!excludedNavbarPaths.includes(location.pathname) && <Navbar />}

    <Routes>
      <Route path='/' element={<HomeView/> } />
      <Route path='/about' element={<AboutView/>} />
      <Route path='/contact' element={<ContactView/>} />
      <Route path='/signup' element={<SignUpView/>} />
      <Route path='/login' element={<LogInView/> } />
      <Route path='/cart' element={<AddToCart/> } />
      <Route path='/checkout' element={<CheckoutView/>} />
      <Route path='/custompcbuilder' element={<CustomPcView/>} />
      <Route path='/shop' element={<ShopView/>} />
      <Route path='/productdetail' element={<SingleProductView/>} />
      <Route path='/graphicshop/:type' element={<GraphicShopView/>} />
      <Route path='/custompcbundle' element={<CustomPcBundle/>} />
      <Route path='/custompcshop/:type' element={<Custompcshop/>} />




    </Routes>

    <Footer/>

    

    </div>

    
   
  )
}

export default App