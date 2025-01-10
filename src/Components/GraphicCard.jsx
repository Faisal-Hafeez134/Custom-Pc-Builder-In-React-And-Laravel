import React from 'react'
import  { useState } from "react";
import { Link } from 'react-router-dom';

const GraphicCard = ({products}) => {
  return (
    <>
    
    <div className='grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12 gap-5'>

{products.length > 0 ? (
  products.map((product)=> (

<div className='col-span-12 md:col-span-6 lg:col-span-3 text-white bg-[#282828] font-[inter] w-full p-5  rounded'>
<Link to='/productdetail' state={{ product }}>

<img src='https://zestrogaming.com/wp-content/uploads/2022/11/1-618x618.png'></img>
<h1 className='text-[22px] lg:text-[32px] mb-[20px] font-semibold mt-[50px] text-center '>{product.title}</h1>
<h2 className=' text-[18px] lg:text-[28px] font-semibold text-green-500 text-center'>USD {product.price}</h2>

<ul className='mt-5'>
    <li><span className='font-semibold'>Graphics Coprocessor: </span>RTX 3060</li>
    <li><span></span>RX 6600XT 8GB Used Graphics Card</li>
    <li><span></span>256GB Nvme + 1TB HDD Used</li>
    <li><span></span>H610m Motherboard</li>
    <li><span></span>AeroCool Lux 550W 80 Plus Bronze Power Supply</li>
    <li><span></span>Thunder Phoneix Case</li>
    <li><span></span>16GB DDR4 3200Mhz RAM</li>
</ul>



<h2 className='text-[28px] font-semibold text-green-500 text-center mt-5'>USD1500</h2>


<div className="flex justify-center items-center w-full">
<button className="bg-green-600 text-white font-bold py-3 px-10 rounded-md text-lg flex-grow mt-[30px]">
Add to Cart
</button>
</div>


</Link>
</div>
))
) : (  <p className="text-gray-400">No products found.</p>


)}


</div>

    </>
  )
}

export default GraphicCard