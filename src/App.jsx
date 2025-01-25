import React from 'react'
import Navbar from './Components/Navbar'
import { useForm } from 'react-hook-form'

import HomeView from './Views/HomeView'
import Footer from './Components/Footer'
import LogInView from './Views/LogInView'
import SignUpView from './Views/SignUpView'
import AboutView from './Views/AboutView'
import ContactView from './Views/ContactView'
import { BrowserRouter as Router, Route, Routes, useLocation, createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddToCart from './Views/AddToCart'
import CheckoutView from './Views/CheckoutView'
import CustomPcView from './Views/CustomPcView'
import SingleProductView from './Views/SingleProductView'
import GraphicShopView from './Views/GraphicShopView'
import Custompcshop from './Views/Custompcshop'
import Layout from './Layout'
import AdminLayout from './AdminLayout'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'
import ShopLayout from './ShopLayout.jsx'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const App = () => {
  // const location = useLocation();
  // const excludedNavbarPaths = ['/productdetail', '/shop','/graphicshop','/custompcshop','/custompcbundle'];



  const router = createBrowserRouter([

    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path:"",
          element: <HomeView/>
        },
        {
          path:'/about',
          element:<AboutView/>
        },
        {
          path:'/contact' ,
          element:<ContactView/>
        },
        {
           path:'/signup',
           element:<SignUpView/> 
        },
        {
          path:'/custompc',
          element: <CustomPcView/>
       },
       {
        path:'/cart',
        element: <AddToCart/>
     },
     {
      path:'/login',
      element: <LogInView/>
   },
        // {
        //   path:'/shop',
        //   element:<Custompcshop/>
        // },
        // {
        //   path:'/productdetail',
        //   element:<SingleProductView/>
        // },
        // {
        //   path:'/graphicshop/:type',
        //   element:<GraphicShopView/>,
        // },
        // {
        //   path:'/gammingpc/:type',
        //   element:<Custompcshop/>,
        // },
        // {
        //   path:'/:type',
        //   element:<Custompcshop/>
        // },
        // {
        //   path:'/:type',
        //   element:<Custompcshop/>,
        // },
        // {
        //   path:'/checkout',
        //   element:<CheckoutView/>
        // }
      
     


      ]
    },

    {
      path: "/",
      element: <ShopLayout/>,
      children: [
        {
          path:'/shop',
          element:<Custompcshop/>
        },
        {
          path:'/productdetail',
          element:<SingleProductView/>
        },
        {
          path:'/graphicshop/:type',
          element:<GraphicShopView/>,
        },
        {
          path:'/gammingpc/:type',
          element:<Custompcshop/>,
        },
        {
          path:'/:type',
          element:<Custompcshop/>
        },
        {
          path:'/:type',
          element:<Custompcshop/>,
        },
        {
          path:'/checkout',
          element:<CheckoutView/>
        }
      ]
    }

  ]);

  const persistor = persistStore(store);
  
  return (

   

    
//     <div>

//     {/* <Navbar/>
//     <HomeView/> 
//     <Footer/> */}
    
//     {/* <LogInView/> */}
//     {/* <SignUpView/> */}
//     {/* <AboutView/> */}
//     {/* <ContactView/> */}
//     {/* {location.pathname !== '/productdetail' && <Navbar/>}
//     {location.pathname !== '/shop' && <Navbar/>} */}

// {!excludedNavbarPaths.includes(location.pathname) && <Navbar />}

//     <Routes>
//       <Route path='/' element={<HomeView/> } />
//       <Route path='/about' element={<AboutView/>} />
//       <Route path='/contact' element={<ContactView/>} />
//       <Route path='/signup' element={<SignUpView/>} />
//       <Route path='/login' element={<LogInView/> } />
//       <Route path='/cart' element={<AddToCart/> } />
//       <Route path='/checkout' element={<CheckoutView/>} />
//       <Route path='/custompcbuilder' element={<CustomPcView/>} />
//       <Route path='/shop' element={<Custompcshop/>} />
//       <Route path='/productdetail' element={<SingleProductView/>} />
//       <Route path='/graphicshop/:type' element={<GraphicShopView/>} />
//       <Route path='/gammingpc/:type' element={<Custompcshop/>} />
//       <Route path='/:type' element={<Custompcshop/>} />
//       <Route path='/checkout' element={<CheckoutView/>} />


//       {/* <Route path='/custompcshop/:type' element={<Custompcshop/>} /> */}




//     </Routes>

//     <Footer/>

    

//     </div>

<Provider store={store}>
{/* <BrowserRouter> */}

<GoogleOAuthProvider clientId="628224003870-qktv102nq7k27i7p53bnfufgdhr3arpe.apps.googleusercontent.com">
    <RouterProvider router={router}/>
</GoogleOAuthProvider>
<PersistGate persistor={persistor}>

</PersistGate>
  <ToastContainer />
  {/* </BrowserRouter> */}
  </Provider>
  )
}

export default App