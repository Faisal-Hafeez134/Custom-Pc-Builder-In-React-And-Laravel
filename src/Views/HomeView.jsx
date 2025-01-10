import React from 'react'
import Card from '../Components/Card'
import HeroSection from '../Components/HeroSection'
import Brands from '../Components/Brands'
import { MdFavoriteBorder } from "react-icons/md";
import CustomBcCard from '../Components/CustomBcCard';
import Container from '../Components/Container';

const HomeView = () => {
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
    <h3>FEATURE</h3>
    <h3>TOP SELLING</h3>
    <h3>POPULAR</h3>
  </div>
  
  <div className='text-[14px] '>
    <h3>VIEW ALL</h3>
  </div>

</div>

<div className='pb-[50px] flex gap-[50px] flex-wrap sm:justify-center md:justify-center lg:justify-start flex-col md:flex-row' >

<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>

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
  
<CustomBcCard/>
<CustomBcCard/>
<CustomBcCard/>
<CustomBcCard/>
<CustomBcCard/>
<CustomBcCard/>
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