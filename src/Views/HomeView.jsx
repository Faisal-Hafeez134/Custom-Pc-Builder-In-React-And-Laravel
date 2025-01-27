import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import HeroSection from '../Components/HeroSection'
import Brands from '../Components/Brands'
import { MdFavoriteBorder } from "react-icons/md";
import CustomBcCard from '../Components/CustomBcCard';
import Container from '../Components/Container';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../style.css';

const HomeView = () => {
  const [type,setType] = useState('feature');
  const [product,setProduct] = useState([]);
  const [buildPc, setBuildPc] = useState([]);

  const handleTypeClick = (newtype) => {
    setType(newtype);
  };

  // const handleSubmit = (event) => {
  //   product 
  // }

  const fetchData = async () => {
    try
    {
      const response = await axios.get('http://127.0.0.1:8000/api/get-all-product');
      setProduct(response.data.product);
      // console.log(response.data.product)
    } catch (error)
    {
      console.error('Error fetchging data : ' , error);
    }
  }

  const fetchBuildPc = async () => {
    try
    {
      const response = await axios.get('http://127.0.0.1:8000/api/get-all-BuildPc');
      setBuildPc(response.data.buildPc);
      console.log(response.data.buildPc)
    } catch (error)
    {
      console.error('Error fetchging data : ' , error);
    }
  }

  useEffect(()=>{
    fetchData();
    fetchBuildPc();
  },[]);

  const filteredProducts = product.filter((product) => product.type === type   );

 

  return (
    <>
    <HeroSection/>


    <Brands/>
    <section className='bg-[#101828] font-[inter] '>

<div className=''>



<div 
  className="relative text-6xl font-bold text-transparent bg-clip-text flex justify-center pt-[60px] pb-[30px] font-[Krona-One] text-center" 
  style={{
    WebkitTextStrokeWidth: '2px', 
    WebkitTextStrokeColor: '#599D21',  
    textStrokeWidth: '2px',
    textStrokeColor: '#599D21'  
  }}
  
>
  Feature Products
</div>
<Container>
<div className='flex justify-between text-white font-normal opacity-70 pb-[50px]'>

  <div className='text-[13px] flex gap-[40px] '>
    <h3 onClick={() => handleTypeClick('feature')}>FEATURE</h3>
    <h3 onClick={() => handleTypeClick('trending')}>TOP SELLING</h3>
    <h3 onClick={() => handleTypeClick('deal')}>POPULAR</h3>
  </div>
  
  <div className='text-[14px] '>
    <h3>VIEW ALL</h3>
  </div>

</div>

<div className='pb-[50px] flex gap-[50px] flex-wrap sm:justify-center md:justify-center lg:justify-start flex-col md:flex-row' >

{/* <Slider {...settings}> */}


<Card products={product} type={type} />

{/* </Slider> */}











</div>

</Container>
</div>
    
    </section>
    <div className=" w-full border-t-4 border-[#599D21] "></div>


    <section className='bg-[#101828] font-[inter]  py-[50px] flex'>

      <Container>

<h1  className="relative text-6xl font-bold text-transparent bg-clip-text flex justify-center pt-[20px] pb-[30px] font-[Krona-One]" 
  style={{
    WebkitTextStrokeWidth: '2px', 
    WebkitTextStrokeColor: '#599D21',  
    textStrokeWidth: '2px',
    textStrokeColor: '#599D21'  
  }}>Build Your Custom Pc</h1>

<div className='py-[30px] pb-[50px] flex gap-[50px] flex-wrap lg:justify-start justify-center items-center'>
{buildPc?.length > 0 ? (
  buildPc.map((buildpc,index)=> (
<CustomBcCard buildpc={buildpc}/>
))): (
""
)}
  </div>
  </Container>
    </section>

    <div className=" w-full border-t-4 border-[#599D21] "></div>


<section className='bg-[#101828] font-[inter]  py-[50px]'>

<div className='text-white'>
  <h1 className="text-center">Faq</h1>
</div>



</section>



<section  className='bg-[#101828] font-[inter]  py-[50px]'>

<div>


</div>



</section>

    </>
  )
}

export default HomeView