import React from 'react'
import ShopNavbar from '../Components/ShopNavbar'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

const SingleProductView = () => {
  const location = useLocation();
  const product = location.state?.product; 
  if (!product) {
    return <p>Product data not available.</p>;
  }
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  return (
    <>

    <section className='bg-[#0A0A0A]'>

    <div>
        <ShopNavbar/>
    </div>
    
{/* <div className='w-[90%] mx-auto mt-[100px]'> */}

    {/* <div className='grid grid-cols-12  text-white gap-[50px]'>


<div className='col-span-12  lg:col-span-6 lg:flex justify-center items-center'>
    <img className='' src='https://zestrogaming.com/wp-content/uploads/2022/11/1-625x625.png'></img>
</div>

<div className='col-span-12 lg:col-span-6 '>

<h1 className='text-[38px] font-bold mb-[30px]'>Karachi King 1- Core i5 12400F & RX 6600XT 8GB</h1>
<div className="w-full h-[2px] bg-white my-4"></div>

<p className='text-red-500 text-[14px] mb-[30px]'>Typically ships within 2-3 days from purchase</p>   
<h2 className='text-[28px] font-semibold mb-[30px]'>₨172,000.00</h2>


<ul className='mb-[30px] '>
        <li className='text-[18px] mb-[10px]'><span></span>Core i5 12400F CPU</li>
        <li className='text-[18px] mb-[10px]'><span></span>RX 6600XT 8GB Used Graphics Card</li>
        <li className='text-[18px] mb-[10px]'><span></span>256GB Nvme + 1TB HDD Used</li>
        <li className='text-[18px] mb-[10px]'><span></span>H610m Motherboard</li>
        <li className='text-[18px] mb-[10px]'><span></span>AeroCool Lux 550W 80 Plus Bronze Power Supply</li>
        <li className='text-[18px] mb-[10px]'><span></span>Thunder Phoneix Case</li>
        <li className='text-[18px] mb-[10px]'><span></span>16GB DDR4 3200Mhz RAM</li>
    </ul>
   <p className='text-red-500 my-[30px]'>Due to Dollar Fluctuation, Please confirm the price before placing the order</p>

    <h1 className='text-[24px] font-semibold'>Upgrades</h1>
    <div className="flex items-center space-x-3 my-5">
    
     <input
        type="checkbox"
        id="customCheckbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500 "
      /> 

       
       <label
        htmlFor="customCheckbox"
        className=" font-medium cursor-pointer"
      >
       <p className='text-[18px]'><span>512GB NVME </span>(USD+4,500.00)</p>
      </label>
 </div> 

 <div className="w-full h-[2px] bg-white my-4"></div>
<h2 className='text-[28px] font-semibold'>SubTotal 1200</h2>
<div className="w-full h-[2px] bg-white my-4"></div>

<div className='col-span-4 md:col-span-3 flex items-center justify-center'>
<button class="bg-green-600 font-bold text-[40px] text-white py-2 px-4 rounded-md text-lg md:text-base sm:text-sm flex-grow  my-[30px] ">
      Add To Cart
    </button>
    </div>


    </div>

    </div> */}
<div className="w-[90%] mx-auto mt-[100px]">
    
  <div className="grid grid-cols-12 text-white gap-6">
    {/* Image Section */}
    <div className="col-span-12 lg:col-span-6 flex justify-center items-center">
      <img
        src="https://zestrogaming.com/wp-content/uploads/2022/11/1-625x625.png"
        className="w-full max-w-[400px] lg:max-w-[700px] h-auto"
        alt="Karachi King PC"
      />
    </div>

    {/* Content Section */}
    <div className="col-span-12 lg:col-span-6">
      <h1 className="text-[24px] lg:text-[38px] font-bold mb-[30px] leading-snug">
      {product.title}      </h1>
      <div className="w-full h-[2px] bg-white my-4"></div>
      <p className="text-red-500 text-[14px] mb-[20px] lg:mb-[30px]">
        Typically ships within 2-3 days from purchase
      </p>
      <h2 className="text-[22px] lg:text-[28px] font-semibold mb-[20px] lg:mb-[30px]">
        USD {product.price}
      </h2>

      {/* Features List */}
      <ul className="mb-[30px] space-y-2">
        <li className="text-[16px] lg:text-[18px]">Core i5 12400F CPU</li>
        <li className="text-[16px] lg:text-[18px]">RX 6600XT 8GB Used Graphics Card</li>
        <li className="text-[16px] lg:text-[18px]">256GB Nvme + 1TB HDD Used</li>
        <li className="text-[16px] lg:text-[18px]">H610m Motherboard</li>
        <li className="text-[16px] lg:text-[18px]">
          AeroCool Lux 550W 80 Plus Bronze Power Supply
        </li>
        <li className="text-[16px] lg:text-[18px]">Thunder Phoneix Case</li>
        <li className="text-[16px] lg:text-[18px]">16GB DDR4 3200Mhz RAM</li>
      </ul>

      {/* Price Note */}
      <p className="text-red-500 mb-[20px] lg:mb-[30px]">
        Due to Dollar Fluctuation, Please confirm the price before placing the
        order
      </p>

      {/* Upgrades Section */}
      <h1 className="text-[20px] lg:text-[24px] font-semibold mb-[10px]">
        Upgrades
      </h1>
      <div className="flex items-center space-x-3 my-4">
        <input
          type="checkbox"
          id="customCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
        />
        <label htmlFor="customCheckbox" className="font-medium cursor-pointer">
          <p className="text-[16px] lg:text-[18px]">
            <span>512GB NVME </span>(USD+4,500.00)
          </p>
        </label>
      </div>

      <div className="w-full h-[2px] bg-white my-4"></div>
      <h2 className="text-[22px] lg:text-[28px] font-semibold mb-4">
        SubTotal ₨172,000.00
      </h2>
      <div className="w-full h-[2px] bg-white my-4"></div>

      {/* Add to Cart Button */}
      <div className='col-span-4 md:col-span-3 flex items-center justify-center'>
<button class="bg-green-600 font-bold text-[40px] text-white py-2 px-4 rounded-md text-lg md:text-base sm:text-sm flex-grow  my-[30px] ">
      Add To Cart
    </button>
    </div>
    </div>
  </div>
</div>

    {/* </div> */}



    <div className='w-[90%] mx-auto text-white py-[100px]'>

   

 

<div className="grid grid-cols-[30%_70%] text-white w-full border border-gray-700">
  {/* Header Row */}
  <div className="border border-gray-700 font-semibold p-3 flex items-center justify-center">
    CPU
  </div>
  <div className="border border-gray-700 p-3 flex items-center">
    Core i5 12400F
  </div>

  <div className="border border-gray-700 font-semibold p-3 flex items-center justify-center">
    CPU Cooler
  </div>
  <div className="border border-gray-700 p-3 flex items-center">
    Darkflash ICE 200 Pro Cooler
  </div>

  <div className="border border-gray-700 font-semibold p-3 flex items-center justify-center">
    Motherboard
  </div>
  <div className="border border-gray-700 p-3 flex items-center">
    H610m
  </div>

  <div className="border border-gray-700 font-semibold p-3 flex items-center justify-center">
    Power Supply
  </div>
  <div className="border border-gray-700 p-3 flex items-center">
    AeroCool Lux 550W 80 Plus Bronze
  </div>

  <div className="border border-gray-700 font-semibold p-3 flex items-center justify-center">
    Graphics Card
  </div>
  <div className="border border-gray-700 p-3 flex items-center">
    RX 6600XT 8GB Used
  </div>

  <div className="border border-gray-700 font-semibold p-3 flex items-center justify-center">
    RAM
  </div>
  <div className="border border-gray-700 p-3 flex items-center">
    16GB 3200Mhz DDR4
  </div>

  <div className="border border-gray-700 font-semibold p-3 flex items-center justify-center">
    Storage
  </div>
  <div className="border border-gray-700 p-3 flex items-center">
    256GB Nvme + 1TB HDD Used
  </div>
</div>




    </div>





    </section>
    
    </>
  )
}

export default SingleProductView