import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="bg-[#101828] border-2 border-[#333741] h-20 lg:flex items-center px-[14px] md:px-[84px] justify-between font-[Inter] font-semibold text-[16px] w-full hidden">
        <div className="gap-5 flex">
          <p className="text-white font-bold text-lg pr-[40px]">Logo</p>
          <div className="font-[Inter] font-semibold text-[16px]">
            <Link to="/" className="text-white hover:text-gray-200 pr-[32px]">
              Home
            </Link>
            <Link to="about" className="text-white hover:text-gray-200 pr-[32px]">
              About
            </Link>
            <Link to="contact" className="text-white hover:text-gray-200 pr-[32px]">
              Contact
            </Link>
            <Link to="contact" className="text-white hover:text-gray-200 pr-[32px]">
              Cart
            </Link>
          </div>
        </div>

        <div className="flex gap-[25px] text-white items-center">
          <div className="text-[#7DE226] underline">
            <Link to="login">Log In</Link>
          </div>
          <div className="bg-[linear-gradient(104.376deg,_#599D21_0%,_#179B7E_100%)] border-[#78FF00] border-[2px] w-[100px] h-[40px] flex items-center justify-center text-white rounded-[8px] shadow">
            <Link to="signup">Sign Up</Link>
          </div>
        </div>
      </div>



      {/* Hamburger Icon for Mobile */}
      <div className="bg-[#101828] py-[20px]">
      <button className="p-2 lg:hidden flex bg-[#101828] items-center" onClick={handleMenu}>
        <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"} text-gray-600`}></i>
        <p className="  absolute font-bold text-lg text-white left-1/2 transform -translate-x-1/2 ">Logo</p>
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
