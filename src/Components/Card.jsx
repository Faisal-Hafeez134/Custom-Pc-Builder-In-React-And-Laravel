import React from 'react'
import { MdFavoriteBorder } from "react-icons/md";

const Card = () => {
  return (
<>
   <div className='flex gap-[50px]'>

    <div className='h-[650px] w-[350px]   bg-[#E0E0E0] rounded-[48px] overflow-hidden flex-basis-[200px] flex-grow '>

        <div className='flex justify-between mb-1 px-[48px] pt-[48px] '>
            <div></div>
            <div  style={{ color: "red" }}><MdFavoriteBorder /></div>
        </div>

        <div className="flex flex-col items-center">
      <img src="https://build.zestrogaming.com/wp-content/uploads/2022/11/STROMFLYS-618x618-1-600x600.webp" alt="Example" className="w-60 h-60 mb-8 pt-[24px]" />
     
    </div>


    <div className='bg-[#2E2F34] h-[3000px] rounded-[40px] overflow-hidden text-white '>


    <div className='px-[40px] pt-[57px]'>
        <h1 className='text-[34px] font-semibold'>fff</h1>
        <h2>rating logo</h2>
        <p className='text-[14px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ipsam nobis earum cupiditate quaerat</p>
    </div>

    <div className='flex justify-between items-center px-[40px] pt-[36px]'>
        <h1>$ 250</h1>
        <div className='bg-[linear-gradient(104.376deg,_#599D21_0%,_#179B7E_100%)] border-[#78FF00] border-[1px]  h-[36px] w-[151px] text-center rounded-[30px] flex justify-center items-center'>Add to cart</div>
    </div>

    </div>





    </div>

    

   </div>
    </>

    
  )
}

export default Card