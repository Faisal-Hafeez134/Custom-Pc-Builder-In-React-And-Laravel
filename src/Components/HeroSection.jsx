import React from 'react';
import backgroundImage from '../assets/img/Rectangle.png';
import Container from './Container';

const HeroSection = () => {
  return (
    <section className="relative bg-cover h-screen bg-[#101828] flex items-center justify-between font-[Inter]">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 h-full justify-center lg:justify-between">
          {/* Left Content */}
          <div className="text-center lg:text-left flex-1 px-4 lg:px-0">
            <h1 className="text-[32px] lg:text-[48px] xl:text-[60px] font-bold mb-4 text-white font-[Krona-One]">
              Build Your Dream PC and Get It Delivered in No Time
            </h1>
            <p className="text-[16px] md:text-[20px] mb-6 text-white font-semibold">
              Our platform lets you design your custom PC, order parts, and have
              it delivered to your doorstep—fast and easy. Your dream setup is
              just a few clicks away.
            </p>
            <a
              href="#builder"
              className="bg-gradient-to-r from-[#599D21] to-[#179B7E] text-white py-3 px-6 rounded-full text-base md:text-lg hover:opacity-80 transition duration-300"
            >
              Start Building
            </a>
          </div>

          {/* Right Image */}
          <div
            className="flex-1 bg-cover bg-center bg-no-repeat h-[300px] md:h-[400px] lg:h-[500px] w-full lg:w-auto relative"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'contain',
            }}
          >
            <img
              src="https://build.zestrogaming.com/wp-content/uploads/2022/11/Untitled-removebg-preview-4-ezgif.com-webp-to-png-converter.webp"
              alt="Custom PC"
              className="w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] mx-auto lg:mx-0"
            />
          </div>
        </div>
      </Container>

      {/* Decorative Border */}
      <div className="absolute bottom-0 w-full border-t-4 border-[#599D21]"></div>
    </section>
  );
};

export default HeroSection;
