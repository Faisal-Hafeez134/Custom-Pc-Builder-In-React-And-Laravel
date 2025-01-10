import React from 'react'
import  { useState } from "react";
import { Link } from 'react-router-dom';
const BuildPcCard = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
  return (
    <>
    <div className='grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12'>

    <div className='col-span-12 md:col-span-6 lg:col-span-3 text-white bg-[#282828] font-[inter] w-full p-5  rounded'>
    <Link to='/productdetail'>

    <img src='https://zestrogaming.com/wp-content/uploads/2022/11/1-618x618.png'></img>
    <h1 className='text-[32px] mb-[20px] font-semibold mt-[50px] text-center '>Braze- Core i5 12400F & RX 6600XT 8GB</h1>
    <h2 className='text-[28px] font-semibold text-green-500 text-center'>USD1500</h2>

    <ul className='mt-5'>
        <li><span></span>Core i5 12400F CPU</li>
        <li><span></span>RX 6600XT 8GB Used Graphics Card</li>
        <li><span></span>256GB Nvme + 1TB HDD Used</li>
        <li><span></span>H610m Motherboard</li>
        <li><span></span>AeroCool Lux 550W 80 Plus Bronze Power Supply</li>
        <li><span></span>Thunder Phoneix Case</li>
        <li><span></span>16GB DDR4 3200Mhz RAM</li>
    </ul>

    {/* <p className='text-red-500 my-5'>Due to Dollar Fluctuation, Please confirm the price before placing the order</p>

    <h1>Upgrades</h1>
    <div className="flex items-center space-x-3 my-2">
      {/* Checkbox */}
      {/* <input
        type="checkbox"
        id="customCheckbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
      /> */}

      {/* Label */}
      {/* <label
        htmlFor="customCheckbox"
        className=" font-medium cursor-pointer"
      >
       <p><span>512GB NVME </span>(USD+4,500.00)</p>
      </label> */}
    {/* </div> */} 

    <h2 className='text-[28px] font-semibold text-green-500 text-center mt-5'>USD1500</h2>


<div className="flex justify-center items-center w-full">
  <button className="bg-green-600 text-white font-bold py-3 px-10 rounded-md text-lg flex-grow mt-[30px]">
    Add to Cart
  </button>
</div>


    </Link>
    </div>

    </div>
    </>
  )
}

export default BuildPcCard