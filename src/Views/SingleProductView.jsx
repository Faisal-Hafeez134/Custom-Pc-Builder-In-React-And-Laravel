import React from 'react'
import ShopNavbar from '../Components/ShopNavbar'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { addToCart } from '../features/cart/cartSlice';
import { useDispatch } from "react-redux";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '../style.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const SingleProductView = () => {
  const dispatch = useDispatch();
  const addCart = (product) => {
    dispatch(
      addToCart({
        name: product.title,
        id: product.id,
        price: product.price,
        totalPrice: product.price,
        image: product.product_images[0].product_img,
      })
    );
  };
  const location = useLocation();
  const product = location.state?.product; 


  const [thumbsSwiper, setThumbsSwiper] = useState(null);










  if (!product) {
    return <p className='bg-[#0A0A0A]'>Product data not available.</p>;
  }
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  return (
    <>

    <section className='bg-[#0A0A0A]'>

    
    
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
<div className="w-[90%] mx-auto  pt-[30px]">
    
  <div className="grid grid-cols-12 text-white lg:gap-[100px] items-center">
    {/* Image Section */}
    <div className="col-span-12 md:col-span-6 lg:col-span-4 gap-10 flex flex-col  justify-center items-center min-h-screen">

{/* 
    <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >

<SwiperSlide>
      <img
        src="https://zestrogaming.com/wp-content/uploads/2022/11/1-625x625.png"
        className="w-full max-w-[400px] lg:max-w-[700px] h-auto"
        alt="Karachi King PC"
      />
      </SwiperSlide>
      
<SwiperSlide>
      <img
        src="https://zestrogaming.com/wp-content/uploads/2022/11/2222222-618x618.png"
        className="w-full max-w-[400px] lg:max-w-[700px] h-auto"
        alt="Karachi King PC"
      />
      </SwiperSlide>
      <SwiperSlide>
      <img
        src="https://zestrogaming.com/wp-content/uploads/2022/11/2222222-618x618.png"
        className="w-full max-w-[400px] lg:max-w-[700px] h-auto"
        alt="Karachi King PC"
      />
      </SwiperSlide>


</Swiper> */}


   <Swiper 
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-full "
      >

{product.product_images.map((product_img,index) => (
        <SwiperSlide key={index}>
          <img src={product_img.product_img} />
        </SwiperSlide>
   ) )}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {product.product_images.map((product_img,index) => (
        <SwiperSlide key = {index}>
          <img src={product_img.product_img} />
        </SwiperSlide>
))}
      </Swiper>


{/* 
<Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        </Swiper> */}
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
      {product.product_specs?.length > 0 && (
      <ul className="mb-[30px] space-y-2">
 
    {product.product_specs.map((product_spec, index) => (
      <li key={product_spec.id}  className="text-[16px] lg:text-[18px]">
        {product_spec.spec_description} {/* Adjust this based on the actual structure of product_spec */}
      </li>
    ))}
  </ul>
)}
        {/* <li className="text-[16px] lg:text-[18px]">RX 6600XT 8GB Used Graphics Card</li>
        <li className="text-[16px] lg:text-[18px]">256GB Nvme + 1TB HDD Used</li>
        <li className="text-[16px] lg:text-[18px]">H610m Motherboard</li>
        <li className="text-[16px] lg:text-[18px]">
          AeroCool Lux 550W 80 Plus Bronze Power Supply
        </li>
        <li className="text-[16px] lg:text-[18px]">Thunder Phoneix Case</li>
        <li className="text-[16px] lg:text-[18px]">16GB DDR4 3200Mhz RAM</li>
      </ul> */}

      {/* Price Note */}
      <p className="text-red-500 mb-[20px] lg:mb-[30px]">
        Due to Dollar Fluctuation, Please confirm the price before placing the
        order
      </p>

      {/* Upgrades Section */}
      <h1 className="text-[20px] lg:text-[24px] font-semibold mb-[10px]">
        Upgrades
      </h1>


      {/* {product.product_upgrade?.length > 0 && (
         product.product_upgrade.map((product_upgrade, index) => (
      <div className="flex items-center space-x-3 my-4" key={index}>
        <input
          type="checkbox"
          id="customCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
        />
        <label htmlFor="customCheckbox" className="font-medium cursor-pointer">
          <p className="text-[16px] lg:text-[18px]">
            <span> {product_upgrade.memory}</span>(USD - {product_upgrade.price})
          </p>
        </label>



        <input
          type="checkbox"
          id="customCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
        />
        <label htmlFor="customCheckbox" className="font-medium cursor-pointer">
          <p className="text-[16px] lg:text-[18px]">
            <span> {product_upgrade.ram}</span>(USD - {product_upgrade.price})
          </p>
        </label>
      </div>




      ))
      )} */}
      {product.product_upgrade?.length > 0 && (
  product.product_upgrade.map((product_upgrade, index) => (
    <div className="flex items-center space-x-3 my-4" key={index}>
      
      {/* Checkbox and memory section */}
      {product_upgrade.memory && (
        <>
          <input
            type="checkbox"
            id={`customCheckbox-memory-${index}`} // Unique id for each checkbox
            checked={product_upgrade.isChecked } // Use actual checked value if needed
            onChange={() => handleCheckboxChange(index)} // You can handle the state changes based on index or id
            className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
          />
          <label htmlFor={`customCheckbox-memory-${index}`} className="font-medium cursor-pointer">
            <p className="text-[16px] lg:text-[18px]">
              <span>{product_upgrade.memory}</span> (USD - {product_upgrade.price})
            </p>
          </label>
        </>
      )}

      {/* Checkbox and RAM section */}
      {product_upgrade.ram && (
        <>
          <input
            type="checkbox"
            id={`customCheckbox-ram-${index}`} // Unique id for each checkbox
            checked={product_upgrade.isChecked } // Use actual checked value if needed
            onChange={() => handleCheckboxChange(index)} // You can handle the state changes based on index or id
            className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
          />
          <label htmlFor={`customCheckbox-ram-${index}`} className="font-medium cursor-pointer">
            <p className="text-[16px] lg:text-[18px]">
              <span>{product_upgrade.ram}</span> (USD - {product_upgrade.price})
            </p>
          </label>
        </>
      )}
      
    </div>
  ))
)}


      <div className="w-full h-[2px] bg-white my-4"></div>
      <h2 className="text-[22px] lg:text-[28px] font-semibold mb-4">
        USD - {product.price}
      </h2>
      <div className="w-full h-[2px] bg-white my-4"></div>

      {/* Add to Cart Button */}
      <div className='col-span-4 md:col-span-3 flex items-center justify-center'>
<button onClick={() => addCart(product)} class="bg-green-600 font-bold text-[40px] text-white py-2 px-4 rounded-md text-lg md:text-base sm:text-sm flex-grow  my-[30px] ">
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
  {/* {product.product_specs?.length > 0 && (
  product.product_specs.map((product_spec, index) => (
    <div key={index} >
   <div className="border border-gray-700 font-semibold p-3 flex items-center justify-center">
    CPU Cooler
  </div>
  <div className="border border-gray-700 p-3 flex items-center">
    Darkflash ICE 200 Pro Cooler
  </div>
  </div>
  )))} */}

{product.product_specs?.length > 0 && (
  product.product_specs.map((product_spec, index) => (
    <div key={index}>
      {/* Render spec name (e.g., CPU Cooler) */}
      <div className="border border-gray-700 font-semibold p-3 flex items-center ">
        {product_spec.spec_heading}  {/* Dynamically render spec name */}
      </div>
      

      {/* Render spec value (e.g., Darkflash ICE 200 Pro Cooler) */}
    </div>
  ))
)}




{/*
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
  </div> */}
</div>




    </div>





    </section>
    
    </>
  )
}

export default SingleProductView