import React from 'react'
import { Link } from 'react-router-dom'

const CustomBcCard = ({buildpc}) => {
  
  return (

    <>
     <div className='flex gap-[50px] justify-center items-center  '>

<div className='h-[450px] lg:w-[350px] w-[300px] bg-[#E0E0E0] rounded-[20px] overflow-hidden  flex flex-col justify-center items-center p-5' key={buildpc.id}>

   

    <div className="text-center py-[50px] ">
 <h1 className='text-[22px] font-bold'>{buildpc.title}</h1>
 <h3 className='18px pb-[20px]'>STARTER</h3>
 <p className='pb-[20px]'>{buildpc.description}</p>
 <h3>STARTING AT</h3>
 <h2 className='pb-[20px]'>USD {buildpc.price}</h2>


 <Link to='/custompc' state={{buildpc:buildpc}} className='bg-[linear-gradient(104.376deg,_#599D21_0%,_#179B7E_100%)] border-[#78FF00] border-[1px]  h-[50px] w-[180px] text-center mx-auto rounded-[30px] flex justify-center items-center text-white font-semibold
 

 '>START BUILDING</Link>

</div>

</div>
</div>





    </>

  )
}

export default CustomBcCard