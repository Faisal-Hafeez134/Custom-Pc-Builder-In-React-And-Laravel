import React, { useState } from 'react'
import ShopNavbar from '../Components/ShopNavbar'
import { BiLogoTelegram } from "react-icons/bi";
import BuildPcCard from '../Components/BuildPcCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import SearchBar from '../Components/SearchBar/SearchBar';
import Pagination from '../Components/Pagination/Pagination';

const Custompcshop = () => {
  const [products, setProducts] = useState([]);
  const [search,setSearch] = useState([]);


  const {type} = useParams();


  const fetchData = async () => {
    try{ 
    const response = await axios.get('http://127.0.0.1:8000/api/get-all-product');
    const product = response.data.product;
    setSearch(product);
    if(type && type  !=='')
    {
     const filterProduct = product.filter((product) => product.category === type);
     setProducts(filterProduct);
    }else{
      setProducts(product);
    }
    }catch(error)
    {
      console.log("error in fetching",error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <>
    <section className='bg-black pb-[50px]'>


        {/* banner section */}
        <div
         style={{
            backgroundImage: 'url("data:image/jpeg;base64,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")'
          }}
          className="bg-cover bg-center  h-[250px] w-auto"

          >

            </div>




            <div className='mt-[50px] '>

                <div className='w-[90%] mx-auto '>

                {/* address center */}
                <div className='grid grid-cols-12 text-white     '>

                    <div className='lg:col-span-8 col-span-12 bg-[#00001D] border-2 border-green-500 rounded p-[50px]  '>
 
                    <div className='grid md:grid-cols-12 grid-cols-4  '>
 
                    <div className='col-span-4  md:col-span-3 flex items-center justify-center '>
<h1  className='text-[100px]'><BiLogoTelegram />
</h1>
                        </div>
                        <div className='col-span-5  text-center md:text-start '>

                            <h1 className='mb-[20px] text-[24px] font-bold'>Karachi Address</h1>
                            <p className='mb-[20px] font-semibold'>Office #UG25, Glamour Mobile & Computer Mall, Main Rashid Minhas Rd, Block 10-A Block 10 A Gulshan-e-Iqbal, Karachi,</p>
                            <h2 className='text-[18px] font-semibold mb-[30px] md:mb-[0px]'>03024067993</h2>

</div>

<div className='col-span-4 md:col-span-3 flex items-center justify-center'>
<button className="bg-green-600 font-bold text-[40px] text-white py-2 px-4 rounded-md text-lg md:text-base sm:text-sm flex-grow  ">
      Call Now
    </button>
</div>

                        </div>


                    </div>

                </div>

                </div>



            </div>



            <div className='w-[90%] mx-auto mt-[80px]'>

<SearchBar  products={search}/>
     



            <BuildPcCard products={products} />

           
            
            </div>


    </section>
    </>
  )
}

export default Custompcshop