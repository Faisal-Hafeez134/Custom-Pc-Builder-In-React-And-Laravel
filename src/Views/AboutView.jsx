import React from 'react'

const AboutView = () => {
  return (
    <section className="bg-[#101828] h-screen text-white font-[inter] px-[84px] py-12 ">
  <div className="container mx-auto">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold">About Us</h2>
      <p className="text-lg mt-4 text-gray-400">
        Your trusted partner for building the perfect custom PC.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Image Section */}
      <div>
        <img
          src="https://via.placeholder.com/500"
          alt="Custom PC Builder"
          className="rounded-lg shadow-lg"
        />
      </div>
      {/* Text Section */}
      <div>
        <h3 className="text-2xl font-semibold">Why Choose Us?</h3>
        <p className="text-gray-400 mt-4 leading-relaxed">
          At <span className="text-[#4ADE80]">Custom PC Builder</span>, we bring your dream PC to life. 
          Whether you’re a gamer, a designer, or someone who needs a high-performance machine, 
          we provide the tools, expertise, and support to craft a PC that fits your exact needs. 
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-center">
            <span className="bg-[#4ADE80] w-3 h-3 rounded-full mr-3"></span>
            <span>High-quality components from trusted brands</span>
          </li>
          <li className="flex items-center">
            <span className="bg-[#4ADE80] w-3 h-3 rounded-full mr-3"></span>
            <span>Fully customizable to match your requirements</span>
          </li>
          <li className="flex items-center">
            <span className="bg-[#4ADE80] w-3 h-3 rounded-full mr-3"></span>
            <span>Expert support at every step</span>
          </li>
        </ul>
        <button className="mt-6 px-6 py-3 bg-[#4ADE80] text-[#101828] font-semibold rounded-md hover:bg-[#3CC66D]">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>

  )
}

export default AboutView