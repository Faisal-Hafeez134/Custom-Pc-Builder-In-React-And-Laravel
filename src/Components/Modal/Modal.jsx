import React, { useState } from 'react'

const Modal = ({open , onClose,category},{buildPc}) => {

if(!open) return null;


return(
    <>
   

{/* <!-- Modal toggle --> */}


{/* <!-- Main modal --> */}
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50  " >
      <div className="bg-white bg-opacity-95 rounded-2xl shadow-xl w-[1000px] h-[800px] p-6 overflow-y-auto relative mx-5" onClick={(e) => {e.stopPropagation()}}>
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Select Your Product
        </h2>

        {/* Empty Space */}

        <div className="h-40 flex flex-wrap gap-5">

  {/* {buildPc?.length > 0 } */}
          <div className='bg-white w-auto h-auto rounded-[5px]  shadow-2xl mb-5 '>
            <img className='w-[200px] rounded-2xl p-3' src='http://127.0.0.1:8000/product_img/4955062711737998764.jpg'></img>

            <div className="w-full h-px bg-gray-300 mt-1"></div>

            <div className='px-3 mt-2 text-center'>
              <h1 className='text-[14px] font-bold'>{category}</h1>
              <p className='font-bold text-[12px]'>Warranty</p>
              <p>Rs 17500.00</p>
            </div>
    </div>
    

   


        </div>

        



      </div>
    </div>

    </>
)
};

export default Modal