import React from 'react'

const AddToCart = () => {
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
                    Delete
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    Delte icon
                </td>
               
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
               
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
               
            </tr>
           
        </tbody>
    </table>
</div>

        </div>

        <div className='bg-white flex flex-col rounded-[10px]  h-full  col-span-3 md:p-5 lg:p-10 p-10 ' >
            <div className='flex justify-between mb-[20px]'>
                <h1>Sub Total</h1>
                <p>Rs493,344</p>
            </div>
            <div class="h-[1px] bg-gray-300 w-full mb-[50px] "></div>


            <div className='flex justify-between mb-[20px]'>
                <h1>Shipping charges</h1>
                <p>Rs493,344</p>
            </div>
            <div className='flex justify-between mb-[20px]'>
                <h1>Address</h1>
                <p>Rs493,344</p>
            </div>
            <div className='flex justify-between mb-[20px]'>
                <h1></h1>
                <p>Change Address</p>
            </div>

            <div class="h-[1px] bg-gray-300 w-full mb-[50px] "></div>

            <div className='flex justify-between mb-[20px]'>
                <h1>Total</h1>
                <p>Rs493,344</p>
            </div>

            <div class="h-[1px] bg-gray-300 w-full mb-[50px] "></div>
                <div className='flex justify-center'>
            <button className=' bg-gradient-to-r from-[#599D21] to-[#179B7E] text-white  text-lg hover:opacity-80 transition duration-300 w-[300px] h-[70px] rounded-[200px] font-semibold  '>PROCEED TO<br></br> CHECKOUT</button>

            </div>

        </div>

        </div>


        </div>

    </section>
    </>
  )
}

export default AddToCart