import React from 'react'

const ContactView = () => {
  return (
    <section className="bg-[#101828] text-white font-[inter] min-h-screen w-full px-[14px] md:px-[84px] py-12 overflow-hidden ">
    <div className="">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-lg mt-4 text-gray-400">
          Have questions or need assistance? We're here to help!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 p-3 rounded-md bg-[#1A202C] text-white focus:ring-[#4ADE80] focus:border-[#4ADE80] outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-3 rounded-md bg-[#1A202C] text-white focus:ring-[#4ADE80] focus:border-[#4ADE80] outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full mt-1 p-3 rounded-md bg-[#1A202C] text-white focus:ring-[#4ADE80] focus:border-[#4ADE80] outline-none"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#4ADE80] text-[#101828] font-semibold rounded-md hover:bg-[#3CC66D] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="text-gray-400 mt-2">
              Feel free to reach out to us for any inquiries or support. We're just an email or call away!
            </p>
          </div>
          <div>
            <p className="text-lg">
              📞 <span className="font-semibold">Phone:</span> +1 (123) 456-7890
            </p>
            <p className="text-lg mt-4">
              ✉️ <span className="font-semibold">Email:</span> support@custompcbuilder.com
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold">Follow Us</p>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="p-3 bg-[#1A202C] rounded-full hover:bg-[#4ADE80] transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="p-3 bg-[#1A202C] rounded-full hover:bg-[#4ADE80] transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="p-3 bg-[#1A202C] rounded-full hover:bg-[#4ADE80] transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default ContactView