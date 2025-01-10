import React from 'react'
import backgroundImage from '../assets/img/Rectangle.png';
import Container from './Container';

const HeroSection = () => {
  return (
    <>
    <section class="relative  bg-cover h-screen bg-[#101828] flex items-center justify-between font-[Inter]" >

<Container>
    <div className=" flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="text-center   lg:text-left flex-1">
          <h1 className="text-[40px] font-bold mb-4 text-white font-[Krona-One] md:text-[60px]">
            Build Your Dream PC and Get It Delivered in No Time
          </h1>
          <p className="text-[20px] mb-8 text-white font-semibold">
            Our platform lets you design your custom PC, order parts, and have
            it delivered to your doorstep—fast and easy. Your dream setup is
            just a few clicks away.
          </p>
          <a
            href="#builder"
            className="bg-gradient-to-r from-[#599D21] to-[#179B7E] text-white py-3 px-6 rounded-full text-lg hover:opacity-80 transition duration-300"
          >
            Start Building
          </a>
        </div>

        {/* Right Image */}
        <div className="flex-1 bg-cover bg-center bg-no-repeat h-full  relative mt-[50px] md:mt-[0px] "
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'auto', backgroundPosition: 'center', overflow: 'visible', }}>
          <img
            src="https://build.zestrogaming.com/wp-content/uploads/2022/11/Untitled-removebg-preview-4-ezgif.com-webp-to-png-converter.webp"
            alt="Custom PC"
            className="w-[300px]  md:w-full md:h-auto max-w-lg mx-auto lg:mx-0"
          />
        </div>
      </div>

      </Container>

      <div className="absolute bottom-0 w-full border-t-4 border-[#599D21]"></div>

  
</section>

    </>
  )
}

export default HeroSection