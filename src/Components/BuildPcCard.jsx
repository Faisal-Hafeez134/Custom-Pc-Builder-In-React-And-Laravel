import React from 'react'
import  { useState } from "react";
import { Link } from 'react-router-dom';
import Pagination from './Pagination/Pagination';
import { useDispatch } from "react-redux";
import { addToCart } from '../features/cart/cartSlice';

const BuildPcCard = ({products}) => {
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
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    const [currentPage, setCurrentPage] = useState(1);
      const recordsPerPage = 8;
      const lastIndex = currentPage * recordsPerPage;
      const firstIndex = lastIndex - recordsPerPage;
      const records = products.slice(firstIndex, lastIndex);
      const npage = Math.ceil(products.length / recordsPerPage);
      const numbers = [...Array(npage + 1).keys()].slice(1);
    
      function prePage() {
        if (currentPage !== 1) {
          setCurrentPage(currentPage - 1);
        }
      }
    
      function changeCpage(id) {
        setCurrentPage(id);
      }
    
      function nextPage() {
        if (currentPage !== npage) {
          setCurrentPage(currentPage + 1);
        }
      }
  
  return (
    <>
    <div className='grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12 gap-[20px]'>

    {records.length > 0 ? (
  records.map((product) =>  (

    <div className='col-span-12 md:col-span-6 lg:col-span-3 text-white bg-[#282828] font-[inter] w-full p-5  rounded' key={product.id}>
    <Link to='/productdetail' state={{ product: product }}>

    <img src={product.product_images[0].product_img}></img>
    <h1 className='text-[32px] mb-[20px] font-semibold mt-[50px] text-center '>{product.title}</h1>
    <h2 className='text-[28px] font-semibold text-green-500 text-center'>USD - {product.price}</h2>

    <ul className='mt-5'>
        <li><span></span>Core i5 12400F CPU</li>
        <li><span></span>RX 6600XT 8GB Used Graphics Card</li>
        <li><span></span>256GB Nvme + 1TB HDD Used</li>
        <li><span></span>H610m Motherboard</li>
        <li><span></span>AeroCool Lux 550W 80 Plus Bronze Power Supply</li>
        <li><span></span>Thunder Phoneix Case</li>
        <li><span></span>16GB DDR4 3200Mhz RAM</li>
    </ul>

   

    <h2 className='text-[28px] font-semibold text-green-500 text-center mt-5'>USD1500</h2>


  </Link>
<div className="flex justify-center items-center w-full" onClick={() => addCart(product)}>


  <button 
                      

className="bg-green-600 text-white font-bold py-3 px-10 rounded-md text-lg flex-grow mt-[30px]">
    Add to Cart
  </button>
</div>


    </div>
   ))
  ) : (  <p className="text-gray-400">No products found.</p>
    
  )}

    </div>





    <>
      {/* Pagination Controls */}
      <nav className="flex justify-center mt-6">
        <ul className="flex space-x-2">
          {/* Prev Button */}
          <li>
            <button
              onClick={prePage}
              className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-md transition"
            >
              Prev
            </button>
          </li>
          {/* Page Numbers */}
          {numbers.map((n, i) => (
            <li key={i}>
              <button
                onClick={() => changeCpage(n)}
                className={`px-4 py-2 rounded-md transition ${
                  currentPage === n
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                {n}
              </button>
            </li>
          ))}
          {/* Next Button */}
          <li>
            <button
              onClick={nextPage}
              className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-md transition"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>

      {/* Display Records */}
   
    </>
    
    </>
  )
}

export default BuildPcCard