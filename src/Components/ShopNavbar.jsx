import React, { useState } from 'react'
import { MdArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import logo from '../assets/img/Logo.png'
const ShopNavbar = () => {


    const [gamingDropdownOpen, setGamingDropdownOpen] = useState(false);

    const [graphicCardsDropdownOpen, setGraphicCardsDropdownOpen] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <section className='bg-[#0A0A0A] h-[70px] w-full lg:flex items-center sticky top-0 z-50 hidden '>
        <div className='w-[90%] mx-auto flex text-white font-semibold font-[inter] text-[14px]'>

            <h1><Link to='/'><img src={logo}></img></Link></h1>
            <div className=''> 
                <ul className='flex gap-[50px] absolute left-1/2 transform -translate-x-1/2 cursor-pointer'>
                    <li>Deals</li>

                    <li className='flex items-center gap-[2px]'
                    onMouseEnter={() => setGamingDropdownOpen(true)}
                    onMouseLeave={()=> setGamingDropdownOpen(false)}
                    >GAMING PC <span className='text-[20px]'><MdArrowDropDown /></span>

                    {gamingDropdownOpen && (
                        <ul className='bg-[#0A0A0A] text-[12px] w-[150px] p-[10px] grid gap-3 absolute top-full'>
                          <li> <Link to='/gammingpc/custompcbundle' className='pt-5'>Gamming Pc Bundle</Link></li> 
                          <li> <Link to='/gammingpc/custompcshop'>Custom Pc Builder</Link></li> 

                        </ul>
                    )}
                    
                    </li>


                    <li  className='flex items-center gap-[2px]'
                     onMouseEnter={() => setGraphicCardsDropdownOpen(true)}
                     onMouseLeave={()=> setGraphicCardsDropdownOpen(false)}
                  
                    >GRAPHIC CARDS <span className='text-[20px]'><MdArrowDropDown /></span>
                     {graphicCardsDropdownOpen && (
                        <ul className='bg-[#0A0A0A] text-[12px] w-[150px] p-[10px] grid gap-3 absolute top-full'>
                           <li className="pt-2">
              <Link to='/graphicshop/nvidia'>Nvidea Graphic Card</Link>
              </li>
            <li>
              <Link to='/graphicshop/amd'>
              AMD Graphic Card</Link>
              </li>

                        </ul>
                    )}
                    </li>

                    <li>
              <Link to='/processor'>
              PROCESSORS</Link>
              </li>
                </ul>
            </div>

        </div>

        </section>





        {/* Hamburger Icon for Mobile */}
        <div className="bg-[#0A0A0A] py-[20px] lg:hidden  ">
      <button className="w-[90%] mx-auto p-2 lg:hidden flex justify-between bg-[#0A0A0A] items-center" onClick={handleMenu}>
        <p className="  font-bold text-lg text-white ">Logo</p>
        <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"} text-gray-600`}></i>
      </button>
      </div>


      <div
  className={`bg-[#0A0A0A] border-2 border-[#333741] py-[60px] px-[14px] md:px-[84px] font-[Inter] font-semibold text-[16px] w-full lg:hidden ${
    menuOpen ? "block" : "hidden"
  }`}
>
  <div className="w-[90%] mx-auto flex flex-col items-center text-white font-semibold font-[inter] text-[14px]">
    <ul className="flex flex-col   gap-[20px] cursor-pointer">
      <li>Deals</li>

      <li
        className="flex flex-col gap-2"
        onMouseEnter={() => setGamingDropdownOpen(true)}
        onMouseLeave={() => setGamingDropdownOpen(false)}
      >
        <div className="flex items-center gap-[2px]">
          GAMING PC <span className="text-[20px]"><MdArrowDropDown /></span>
        </div>

        {gamingDropdownOpen && (
          <ul className="bg-[#1A1A1A] text-[12px] w-auto p-[10px] grid gap-3 absolute">
            <li className="pt-2">Gaming PC Bundle</li>
            <li>Custom PC Builder</li>
          </ul>
        )}
      </li>

      <li
        className="flex flex-col gap-2"
        onMouseEnter={() => setGraphicCardsDropdownOpen(true)}
        onMouseLeave={() => setGraphicCardsDropdownOpen(false)}
      >
        <div className="flex items-center gap-[2px]">
          GRAPHIC CARDS <span className="text-[20px]"><MdArrowDropDown /></span>
        </div>

        {graphicCardsDropdownOpen && (
          <ul className="bg-[#1A1A1A] text-[12px] w-auto p-[10px] grid gap-3 absolute">
            <li className="pt-2">
              <Link to='graphicshop/nvidia'>Nvidea Graphic Card</Link>
              </li>
            <li>
              <Link to='graphicshop/amd'>
              AMD Graphic Card</Link>
              </li>
              
          </ul>
        )}
      </li>

      <li>PROCESSORS</li>
    </ul>
  </div>
</div>





    
    </>
  )}

export default ShopNavbar