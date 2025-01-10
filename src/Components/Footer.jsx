import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 text ">
    <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 ">
      {/* Logo and About Section */}
      <div>
        <h1 className="text-white text-2xl font-bold mb-4">YourCompany</h1>
        <p className="text-sm">
          Empowering businesses with cutting-edge technology solutions. 
          Your satisfaction is our priority.
        </p>
        <div className='flex'>

        </div>
      </div>

      {/* Navigation Links */}
      <div>
        <h2 className="text-white text-lg font-semibold mb-4">For Customer</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-green-400 transition">
             Cart
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400 transition">
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400 transition">
              Addresses
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400 transition">
                Account details
            </a>
            <a href="#" className="hover:text-green-400 transition">
                Last password
            </a>
          </li>
        </ul>
      </div>

      {/* Contact and Social Media */}
      <div>
        <h2 className="text-white text-lg font-semibold mb-4">Company</h2>
        
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-green-400 transition">
             About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400 transition">
              Conatact Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400 transition">
              Warranty
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400 transition">
                Privacy Policy
            </a>
            
          </li>
        </ul>
      </div>



      <div>
        <h2 className="text-white text-lg font-semibold mb-4">Company</h2>
        
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-green-400 transition">
             Prebuilt Gamming Pc
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400 transition">
              Graphics Card
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400 transition">
              Processors
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400 transition">
                Gamming Monitor
            </a>
            
          </li>
        </ul>
      </div>




    </div>

    {/* Copyright Section */}
    <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
    </div>
  </footer>
  )
}

export default Footer