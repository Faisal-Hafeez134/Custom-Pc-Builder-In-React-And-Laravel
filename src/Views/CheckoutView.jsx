import React from 'react';

const CheckoutView = () => {
  return (
    <div className="font-[sans-serif] bg-white">
      <div className="max-lg:max-w-xl mx-auto w-full">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
            <div className="text-center max-lg:hidden">
              <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-2 border-gray-800 pb-1">
                Checkout
              </h2>
            </div>

            <form className="lg:mt-16">
              {/* Shipping Info */}
              <div>
                <h2 className="text-xl font-bold text-gray-800">Shipping Info</h2>
                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  <input
                    type="text"
                    placeholder="Name"
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Street address"
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Postal code"
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="mt-16">
                <h2 className="text-xl font-bold text-gray-800">Payment Method</h2>
                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="card"
                      defaultChecked
                    />
                    <label
                      htmlFor="card"
                      className="ml-4 flex gap-2 cursor-pointer"
                    >
                      <img
                        src="https://readymadeui.com/images/visa.webp"
                        className="w-12"
                        alt="Visa"
                      />
                      <img
                        src="https://readymadeui.com/images/american-express.webp"
                        className="w-12"
                        alt="American Express"
                      />
                      <img
                        src="https://readymadeui.com/images/master.webp"
                        className="w-12"
                        alt="Mastercard"
                      />
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="paypal"
                    />
                    <label
                      htmlFor="paypal"
                      className="ml-4 flex gap-2 cursor-pointer"
                    >
                      <img
                        src="https://readymadeui.com/images/paypal.webp"
                        className="w-20"
                        alt="Paypal"
                      />
                    </label>
                  </div>
                </div>

                {/* Card Details */}
                <div className="grid gap-8 mt-8">
                  <input
                    type="text"
                    placeholder="Cardholder's Name"
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                  />
                  <div className="flex bg-white border-b focus-within:border-blue-600 overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 ml-3"
                      viewBox="0 0 291.764 291.764"
                    >
                      <path
                        fill="#2394bc"
                        d="M...your SVG data..."
                        data-original="#2394bc"
                      />
                    </svg>
                    <input
                      type="number"
                      placeholder="Card Number"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <input
                      type="number"
                      placeholder="EXP."
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                    <input
                      type="number"
                      placeholder="CVV"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block text-sm"
                    >
                      I accept the{' '}
                      <a
                        href="#"
                        className="text-blue-600 font-semibold hover:underline ml-1"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                >
                  Back
                </button>
                <button
                  type="button"
                  className="min-w-[150px] px-6 py-3.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Confirm Payment $240
                </button>
              </div>
            </form>
          </div>

          {/* Right Section */}
          <div className="bg-gray-100 lg:h-screen lg:sticky lg:top-0">
            <div className="relative h-full">
              <div className="p-6 overflow-auto max-lg:max-h-[400px] lg:h-[calc(100vh-60px)] max-lg:mb-8">
                <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
                {/* Order Summary Content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutView;
