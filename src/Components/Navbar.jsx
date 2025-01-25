import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { toast } from "react-toastify";
import { logout } from "../features/auth/authSlice";
import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/img/Logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(4); 

  useEffect(() => {
    
  },[]);


  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try{ 
      const token = localStorage.getItem('token');
      console.log(token);
      if (!token) {
        toast.warn('No active session found!', {
          position: 'top-right',
          autoClose: 3000,
        });
        return;
      }
 const response =  await axios.post('http://127.0.0.1:8000/api/logout',null,{
      headers:{
        Authorization: `Bearer ${token}`, // Pass the token
      }
    });
    console.log(response.data.message);
    localStorage.removeItem('token');
    dispatch(logout()); // Dispatch the logout action
    toast.success('Logged out successfully!', {
      position: 'top-right',
      autoClose: 3000, // 3 seconds
    });
  }catch(error)
  {
   
    console.log('error in logout',error);
  }
  };

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const cartItems = useSelector((state) => state.cart.itemList);

  useEffect(() => {
    // Check if cartItems is an array and has data
    if (Array.isArray(cartItems) && cartItems.length > 0) {
      // Calculate total quantity based on the price and totalPrice
      const totalQuantity = cartItems.reduce((acc, item) => acc + (item.totalPrice / item.price), 0);
      setCartQuantity(totalQuantity);
      console.log("Total Quantity:", totalQuantity);
    } else {
      // If no items in the cart, set quantity to 0
      setCartQuantity(0);
    }
  }, [cartItems]); // Recalculate when cartItems changes

  return (
    <>
      {/* Desktop Navbar */}
      <div className="bg-[#101828] border-2 border-[#333741] h-20 lg:flex items-center px-[14px] md:px-[84px] justify-between font-[Inter] font-semibold text-[16px] w-full hidden">
        <div className="gap-5 flex">
          <p className="text-white font-bold text-lg pr-[40px]"><img src={logo}></img></p>
          <div className="font-[Inter] font-semibold text-[16px]">
  
            <NavLink
  to="/"
  className={({ isActive }) =>
    `pr-[32px] ${
      isActive
        ? 'text-[#7DE226]'
        : 'text-white hover:text-[#7DE226]'
    }`
  }
>
  Home
</NavLink>

            <NavLink to="/shop" className={({ isActive }) =>
    `pr-[32px] ${
      isActive
        ? 'text-[#7DE226]'
        : 'text-white hover:text-[#7DE226]'
    }`
  }>
              Shop
            </NavLink>
            <NavLink to="about" 
             className={({ isActive }) =>
              `pr-[32px] ${
                isActive
                  ? 'text-[#7DE226]'
                  : 'text-white hover:text-[#7DE226]'
              }`
            }>
              About
            </NavLink>
            <NavLink to="contact" 
             className={({ isActive }) =>
              `pr-[32px] ${
                isActive
                  ? 'text-[#7DE226]'
                  : 'text-white hover:text-[#7DE226]'
              }`
            }>
              Contact
            </NavLink>
            <NavLink to="/cart" 
             className={({ isActive }) =>
              `pr-[32px] ${
                isActive
                  ? 'text-[#7DE226]'
                  : 'text-white hover:text-[#7DE226]'
              }`
            }>
              Cart
            </NavLink>

            <NavLink to="/custompc" 
             className={({ isActive }) =>
              `pr-[32px] ${
                isActive
                  ? 'text-[#7DE226]'
                  : 'text-white hover:text-[#7DE226]'
              }`
            }>
              CustomPcBuild
            </NavLink>
          </div>
        </div>

        <div className="flex gap-[55px] text-white items-center">
       {/* Cart Icon */}
       <div className="relative">
        <Link to="/cart" className="text-[#7DE226] text-2xl">
          <FaShoppingCart />
        </Link>

        {/* Badge for Cart Quantity */}
        {cartQuantity > 0 && (
          <span
            className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
          >
            {cartQuantity}
          </span>
        )}
      </div>
     
          <div className="bg-[linear-gradient(104.376deg,_#599D21_0%,_#179B7E_100%)] border-[#78FF00] border-[2px] w-[100px] h-[40px] flex items-center justify-center text-white rounded-[8px] shadow">
            {isAuth ? (
            <span onClick={handleLogout} style={{cursor: 'pointer'}}>Logout</span>

            ) : (
              <Link to="Login">Login</Link>
            )}
           
          </div>
        </div>
      </div>



      {/* Hamburger Icon for Mobile */}
      <div className="bg-[#101828] py-[20px]">
      <button className="p-2 lg:hidden flex bg-[#101828] items-center" onClick={handleMenu}>
        <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"} text-gray-600`}></i>
        <p className="  absolute font-bold text-lg text-white left-1/2 transform -translate-x-1/2 "><img src={logo}></img></p>
      </button>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`bg-[#101828] border-2 border-[#333741] py-[40px] px-[14px] md:px-[84px] font-[Inter] font-semibold text-[16px] w-full lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="gap-5 flex items-center justify-center py-4 text-center">
          
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link to="about" className="text-white hover:text-gray-200">
              About
            </Link>
            <Link to="contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
            <Link to="cart" className="text-white hover:text-gray-200 pr-[32px]">
              Cart
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-white items-center mt-4">
          <div className="text-[#7DE226] underline">
            <Link to="login">Log In</Link>
          </div>
          <div className="bg-[linear-gradient(104.376deg,_#599D21_0%,_#179B7E_100%)] border-[#78FF00] border-[2px] w-[100px] h-[40px] flex items-center justify-center text-white rounded-[8px] shadow">
            <Link to="signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
