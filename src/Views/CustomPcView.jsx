import React, { useEffect, useState } from 'react'
import Modal from '../Components/Modal/Modal'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const CustomPcView = () => {
    const [openModal, setOpenModal] = useState(false);
    const [buildPc, setBuildPc] = useState([]);
    const [category, setCategory] = useState('');


    const location = useLocation();
  const buildpc = location.state?.buildpc; 
  console.log(buildpc.id);

  const fetchBuildPcParts  = async () =>
  {
    try{
    const response = await axios.get(`http://127.0.0.1:8000/api/get-all-BuildPc-Parts-By-Id/${buildpc.id}`)
    const data = response.data.buildPc;
    setBuildPc(data)
    console.log(data);
    }catch(error){
        console.error('Error fetchging data : ' , error);

    }
  }

  useEffect(()=>{
    fetchBuildPcParts();
  },[]);

  return (
    <section className='mt-[50px] bg-slate-50 shadow-2xl '>

<div className='w-[90%] mx-auto '>

    <div className='grid lg:grid-cols-12 md:grid-cols-12 grid-cols-4 w-full gap-[50px] place-items-center   '>

    <div className='col-span-6'>
        <img src='https://build.zestrogaming.com/wp-content/uploads/2022/11/STROMFLYS-618x618-1-600x600.webp'></img>
    </div>

    <div className='col-span-6'>
        <h1 className='text-[50px] font-bold'>{buildpc.title}</h1>
    <div class="h-[1px] bg-gray-300 w-full my-[30px]  "></div>
    <p className='text-[14px] text-green-600 mb-[50px]'>Typically ships within 2-3 days from purchase</p>
    <h1 className='mb-[30px] text-green-600 text-[42px] font-bold'>USD-{buildpc.price}</h1>
    <h3 className='mb-[30px] text-[22px]' >Customize your Blaze 1 with the ideal components and aesthetic options to create your ultimate gaming PC. Note that the system’s appearance may vary based on your chosen configuration</h3>
    <div class="h-[1px] bg-gray-300 w-full my-[30px]  "></div>


    <div className='grid lg:grid-cols-12 md:grid-cols-5 grid-cols-4 w-full gap-5 '>


     <div className='col-span-4 mb-[40px] cursor-pointer ' onClick={() => {setOpenModal(true); setCategory('processor');}}>
        <div className=' bg-[#E5E7EB] h-[140px] w-[150px] rounded-[5px]  flex items-center justify-center relative'>

            <p className='text-[50px]'>+</p>
            <div className='p-1 w-[100px]  bg-[rgba(245,245,245,0.7)] shadow-lg rounded-[3px] absolute top-[90px] text-center flex flex-col items-center'>
                <p>Processor</p>
                <p className='text-[12px]'>Rs17,500.00</p>
                <p className='bg-lime-400 w-[20px] h-[20px] text-center text-[12px] rounded-[5px]'>1</p>
            </div>


        </div>
     </div>
     <Modal open={openModal} onClose={() => setOpenModal(false)}  category={category}  buildPc={buildPc}/>


     <div className='col-span-4 mb-[40px]  '  onClick={() => {setOpenModal(true); setCategory('cpucooler');}}>
        <div className=' bg-[#E5E7EB] h-[140px] w-[150px] rounded-[5px]  flex items-center justify-center relative'>

            <p className='text-[50px]'>+</p>
            <div className='p-1 w-[100px]  bg-[rgba(245,245,245,0.7)] shadow-lg rounded-[3px] absolute top-[90px] text-center flex flex-col items-center'>
                <p>CPU Cooler</p>
                <p className='text-[12px]'>Rs17,500.00</p>
                <p className='bg-lime-400 w-[20px] h-[20px] text-center text-[12px] rounded-[5px]'>1</p>
            </div>


        </div>
     </div>


     <div className='col-span-4 mb-[40px] '  onClick={() => {setOpenModal(true); setCategory('motherboard');}}>
        <div className=' bg-[#E5E7EB] h-[140px] w-[150px] rounded-[5px]  flex items-center justify-center relative'>

            <p className='text-[50px]'>+</p>
            <div className='p-1 w-[100px]  bg-[rgba(245,245,245,0.7)] shadow-lg rounded-[3px] absolute top-[90px] text-center flex flex-col items-center'>
                <p>Motherboard</p>
                <p className='text-[12px]'>Rs17,500.00</p>
                <p className='bg-lime-400 w-[20px] h-[20px] text-center text-[12px] rounded-[5px]'>1</p>
            </div>


        </div>
     </div>


     <div className='col-span-4 mb-[40px] '  onClick={() => {setOpenModal(true); setCategory('ram');}}>
        <div className=' bg-[#E5E7EB] h-[140px] w-[150px] rounded-[5px]  flex items-center justify-center relative'>

            <p className='text-[50px]'>+</p>
            <div className='p-1 w-[100px]  bg-[rgba(245,245,245,0.7)] shadow-lg rounded-[3px] absolute top-[90px] text-center flex flex-col items-center'>
                <p>Ram</p>
                <p className='text-[12px]'>Rs17,500.00</p>
                <p className='bg-lime-400 w-[20px] h-[20px] text-center text-[12px] rounded-[5px]'>1</p>
            </div>


        </div>
     </div>


     <div className='col-span-4 mb-[40px] '  onClick={() => {setOpenModal(true); setCategory('ssd');}}>
        <div className=' bg-[#E5E7EB] h-[140px] w-[150px] rounded-[5px]  flex items-center justify-center relative'>

            <p className='text-[50px]'>+</p>
            <div className='p-1 w-[100px]  bg-[rgba(245,245,245,0.7)] shadow-lg rounded-[3px] absolute top-[90px] text-center flex flex-col items-center'>
                <p>SSD(Primary)</p>
                <p className='text-[12px]'>Rs17,500.00</p>
                <p className='bg-lime-400 w-[20px] h-[20px] text-center text-[12px] rounded-[5px]'>1</p>
            </div>


        </div>
     </div>


     <div className='col-span-4 mb-[40px] '  onClick={() => {setOpenModal(true); setCategory('hdd');}}>
        <div className=' bg-[#E5E7EB] h-[140px] w-[150px] rounded-[5px]  flex items-center justify-center relative'>

            <p className='text-[50px]'>+</p>
            <div className='p-1 w-[100px]  bg-[rgba(245,245,245,0.7)] shadow-lg rounded-[3px] absolute top-[90px] text-center flex flex-col items-center'>
                <p>HDD(Secondary)</p>
                <p className='text-[12px]'>Rs17,500.00</p>
                <p className='bg-lime-400 w-[20px] h-[20px] text-center text-[12px] rounded-[5px]'>1</p>
            </div>


        </div>
     </div>


     <div className='col-span-4 mb-[40px] '  onClick={() => {setOpenModal(true); setCategory('gpu');}}>
        <div className=' bg-[#E5E7EB] h-[140px] w-[150px] rounded-[5px]  flex items-center justify-center relative'>

            <p className='text-[50px]'>+</p>
            <div className='p-1 w-[100px]  bg-[rgba(245,245,245,0.7)] shadow-lg rounded-[3px] absolute top-[90px] text-center flex flex-col items-center'>
                <p>GPU</p>
                <p className='text-[12px]'>Rs17,500.00</p>
                <p className='bg-lime-400 w-[20px] h-[20px] text-center text-[12px] rounded-[5px]'>1</p>
            </div>


            

            


        </div>
     </div>


     <div className='col-span-4 mb-[40px] ' onClick={() => {setOpenModal(true); setCategory('case');}}>
        <div className=' bg-[#E5E7EB] h-[140px] w-[150px] rounded-[5px]  flex items-center justify-center relative'>

            <p className='text-[50px]'>+</p>
            <div className='p-1 w-[100px]  bg-[rgba(245,245,245,0.7)] shadow-lg rounded-[3px] absolute top-[90px] text-center flex flex-col items-center'>
                <p>Case</p>
                <p className='text-[12px]'>Rs17,500.00</p>
                <p className='bg-lime-400 w-[20px] h-[20px] text-center text-[12px] rounded-[5px]'>1</p>
            </div>


            

            


        </div>
     </div>

     <div className='col-span-4 mb-[40px] '  onClick={() => {setOpenModal(true); setCategory('powersupply');}}>
        <div className=' bg-[#E5E7EB] h-[140px] w-[150px] rounded-[5px]  flex items-center justify-center relative'>

            <p className='text-[50px]'>+</p>
            <div className='p-1 w-[100px]  bg-[rgba(245,245,245,0.7)] shadow-lg rounded-[3px] absolute top-[90px] text-center flex flex-col items-center'>
                <p>Power Supply</p>
                <p className='text-[12px]'>Rs17,500.00</p>
                <p className='bg-lime-400 w-[20px] h-[20px] text-center text-[12px] rounded-[5px]'>1</p>
            </div>


            

            


        </div>
     </div>

     

    </div>

    {/* ////text section///// */}

    <div className='flex text-[14px] justify-between  my-[70px]'>
    <h1 >Ryzen 5 3600 Tray only in 1 Years Warranty</h1>
    <p>logo</p>
    <p>1</p>
    <p>USD17500.00</p>
    </div>

    <div class="h-[1px] bg-gray-300 w-full my-[30px]  "></div>

    {/* increase quantity add to cart */}

    <div className='mb-6 ' >

    <div className='flex gap-[50px]'>

    <div className='bg-gray-300 rounded-[10px] w-[140px] h-[60px] shadow-xl font-semibold text-black flex justify-between items-center p-3 text-[20px]'>
        <p className='text-[40px]'>-</p>
        <p>1</p>
        <p className='text-[40px]'>+</p>
    </div>

    {/* <button class="bg-blue-500 text-white py-2 px-4 rounded-md text-lg md:text-base sm:text-sm w-full md:w-auto">
    Add to Cart
</button> */}
<button class="bg-green-600 font-bold text-[40px] text-white py-2 px-4 rounded-md text-lg md:text-base sm:text-sm flex-grow">
      Add to Cart
    </button>

    </div>

    </div>








    </div>


    </div>

    </div>

    </section>
  )
}

export default CustomPcView