import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToCart , removeFromCart,deleteFromCart } from '../features/cart/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

const AddToCart = () => {
const dispatch = useDispatch();
    const elements = useSelector((state) => state.cart.itemList);
    const navigate = useNavigate();

    const increment = (item) => {
        dispatch(addToCart({ 
            name : item.title,
            id: item.id,
            price: item.price,
            totalPrice: item.price,
            image: item.image,
           }));  
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart({ 
            name : item.title,
            id: item.id,
            price: item.price,
            totalPrice: item.price,
            image: item.image,
           }));  
    };

    const decrement = (item) => {
        dispatch(removeFromCart({ 
            name : item.title,
            id: item.id,
            price: item.price,
            totalPrice: item.price,
            image: item.image,
        }));
      };

      const subtotal = elements.reduce((total, item) => total + item.totalPrice, 0);


    if (elements.length > 0) {
  return (
    <>
    
    <section className='bg-[#101828]'>

        <div className='w-[90%] mx-auto flex  justify-center '>

        <div className='grid grid-cols-4 lg:grid-cols-12 md:grid-cols-8 py-[100px] gap-[50px] w-full'>

        <div className='bg-white   rounded-[10px] h-[100%] overflow-hidden lg:col-span-8 md:col-span-5 col-span-4'>
          

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

       
            <tr>
                <th scope="col" class="px-6 py-3">
                   Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                <th scope="col" class="px-6 py-3">
                    Total
                </th>
                <th scope="col" class="px-6 py-3">
                    update
                </th>
                <th scope="col" class="px-6 py-3">
                    Delete
                </th>
                
            </tr>
    
        </thead>
        <tbody>

        {elements.map((item) => (
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className='w-[50px]' src={item.image}/>
                </th>
                <td class="px-6 py-4">
                    {item.name}
                </td>
                <td class="px-6 py-4">
                ${item.quantity * item.price}                </td>
                <td class="px-6 py-4 flex gap-5">
                     <button
          
          className="bg-green-600 text-white rounded-full w-8 h-8 flex justify-center items-center hover:bg-green-700"
          onClick={() => increment(item)}
        >
          +
        </button>
        <h1>{item.quantity}</h1>
        <button
          
       
          className="bg-green-600 text-white rounded-full w-8 h-8 flex justify-center items-center hover:bg-green-700"
          onClick={() => decrement(item)}
       >
          -
        </button>
                </td>
                <td class="px-6 py-4" onClick={() => deleteCart(item)}>
                    Delte icon
                </td>
               
            </tr>
                ))};
        
            
           
        </tbody>
    </table>
</div>

        </div>

        <div className='bg-white flex flex-col rounded-[10px]  h-full  col-span-3 md:p-5 lg:p-10 p-10 ' >
            <div className='flex justify-between mb-[20px]'>
                <h1>Sub Total</h1>
                <p>USD - {subtotal}</p>
            </div>
            <div class="h-[1px] bg-gray-300 w-full mb-[50px] "></div>


            <div className='flex justify-between mb-[20px]'>
                <h1>Shipping charges</h1>
                <p>USD - 0</p>
            </div>
            {/* <div className='flex justify-between mb-[20px]'>
                <h1>Address</h1>
                <p>Rs493,344</p>
            </div> */}
            {/* <div className='flex justify-between mb-[20px]'>
                <h1></h1>
                <p>Change Address</p>
            </div> */}

            <div class="h-[1px] bg-gray-300 w-full mb-[50px] "></div>

            <div className='flex justify-between mb-[20px]'>
                <h1>Total</h1>
                <p>USD - {subtotal}</p>
            </div>

            <div class="h-[1px] bg-gray-300 w-full mb-[50px] "></div>
                <div className='flex justify-center'>
                    <Link to='/checkout'>
            <button  className=' bg-gradient-to-r from-[#599D21] to-[#179B7E] text-white  text-lg hover:opacity-80 transition duration-300 w-[300px] h-[70px] rounded-[200px] font-semibold  '>PROCEED TO<br></br> CHECKOUT</button>
            </Link>
            </div>

        </div>

        </div>


        </div>

    </section>
    </>
  )
}
else {50
return <div className='bg-[#101828] text-white text-center h-screen mx-auto flex items-center justify-center'><h1 >Cart is empty</h1></div>;
  }
};

export default AddToCart