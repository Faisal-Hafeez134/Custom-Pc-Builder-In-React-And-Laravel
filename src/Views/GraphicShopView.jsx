import React from 'react'
import ShopNavbar from '../Components/ShopNavbar'
import GraphicCard from '../Components/GraphicCard'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const GraphicShopView = () => {

    const {type} = useParams();

    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetchData();
    },[type]);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/getproduct/${type}`);
        console.log(response.data);
        setProducts(response.data.product);
      } catch (error)
      {
        console.error('Error fetching data:', error);
      }
    };


    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };


    const [selectedOption, setSelectedOption] = useState('low-to-high');

    const handleSelect = (e) => {
      setSelectedOption(e.target.value);
      // You can handle the filtering logic here based on the selected option.
      console.log(`Selected filter: ${e.target.value}`);
    };

  return (
    <>
    
    <section className='bg-[#0A0A0A] '>
        <div>
        </div>


        <div className='py-[100px]'>
            <div className='w-[95%] mx-auto'>

                <div className='grid grid-cols-12 text-white'>

<div className='col-span-3'>

<h1>CPU MANUFACTURER</h1>


{/* FILTER SECTION */}
<div className="flex items-center space-x-3 my-4">
        <input
          type="checkbox"
          id="customCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
        />
        <label htmlFor="customCheckbox" className="font-medium cursor-pointer">
          <p className="text-[16px] lg:text-[14px]">
            AMD
          </p>
        </label>
      </div>

      <div className="flex items-center space-x-3 my-4">
        <input
          type="checkbox"
          id="customCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
        />
        <label htmlFor="customCheckbox" className="font-medium cursor-pointer">
          <p className="text-[16px] lg:text-[14px]">
            Intel
          </p>
        </label>
      </div>
{/* FILTER SECTION */}


</div>


<div className='col-span-12 lg:col-span-9'>


<div className="">

  <div className="mb-7 bg-[#282828] text-white rounded-md w-48">
    <select className="w-full py-2 px-4 bg-[#282828] text-white">
      <option value="low-to-high">Low to High</option>
      <option value="high-to-low">High to Low</option>
    </select>
  </div>
</div>

<GraphicCard products = {products}/>
</div>

                    </div>


</div>
        </div>


    </section>
    
    </>
  )
}

export default GraphicShopView