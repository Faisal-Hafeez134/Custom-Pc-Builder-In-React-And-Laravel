import React from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { addToCart } from '../features/cart/cartSlice';
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Navigation} from 'swiper/modules'; // Import the Pagination module
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination';
import { MdArrowBack, MdArrowForward } from 'react-icons/md'; // Import arrow icons
import { Link } from 'react-router-dom';

const Card = ({ products, type }) => {
  const dispatch = useDispatch();
  const filteredProducts = products.filter((product) => product.type === type);
  const limitedProducts = filteredProducts.slice(0, 12);

  const addCart = (product) => {
    dispatch(
      addToCart({
        name: product.title,
        id: product.id,
        price: product.price,
        totalPrice: product.price,
        image: product.product_images[0].product_img,
      })
    );
  };

  return (
    <>
    <Swiper
      slidesPerView={4}
      spaceBetween={1}
      modules={[Pagination, Navigation]}  // Use the necessary modules
        navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}  // Enable custom navigation
        pagination={{ clickable: true }} // Include the Pagination module
      breakpoints={{
        // When the screen width is >= 768px (md)
        1201: {
          slidesPerView: 4, // Show 2 slides on medium screens
          spaceBetween: 20, // Adjust spacing between slides
        },
        1200: {
          slidesPerView: 2, // Show 2 slides on medium screens
          spaceBetween: 20, // Adjust spacing between slides
        },
        768: {
          slidesPerView: 2, // Show 2 slides on medium screens
          spaceBetween: 20, // Adjust spacing between slides
        },
        // When the screen width is >= 1024px (lg)
        1024: {
          slidesPerView: 2, // Show 3 slides on larger screens
          spaceBetween: 30,
        },
        // Default for smaller screens (< 768px)
        0: {
          slidesPerView: 1, // Show 1 slide on small screens
          spaceBetween: 10,
        },
      }}
      className="mySwiper"
    >
      {limitedProducts.map((product) => (
        <SwiperSlide key={product.id} > {/* Apply key directly to SwiperSlide */}

        <Link to='/productdetail' state={{ product: product }}>
          <div className="flex-row gap-[50px] mb-[200px]">
            <div className="h-[650px] w-[350px] bg-[#E0E0E0] rounded-[48px] overflow-hidden flex-grow">
              {/* Top Section */}
              <div className="flex justify-between mb-1 px-[48px] pt-[48px]">
                <div></div>
                <div style={{ color: "red" }}>
                  <MdFavoriteBorder />
                </div>
              </div>

              {/* Product Image */}
              <div className="flex flex-col items-center">
                <img
                  src={product.product_images[0].product_img}
                  alt="Example"
                  className="w-60 h-60 mb-8 pt-[24px]"
                />
              </div>

              {/* Product Info Section */}
              <div className="bg-[#2E2F34] h-[3000px] rounded-[40px] overflow-hidden text-white">
                <div className="px-[40px] pt-[57px]">
                  <h1 className="text-[34px] font-semibold">{product.title}</h1>
                  <h2>Rating Logo</h2>
                  <p className="text-[14px]">{product.description}</p>
                </div>

                <div className="flex justify-between items-center px-[40px] pt-[36px]">
                  <h1>{product.price}</h1>
                  <div
                    onClick={() => addCart(product)}
                    className="bg-[linear-gradient(104.376deg,_#599D21_0%,_#179B7E_100%)] border-[#78FF00] border-[1px] h-[36px] w-[151px] text-center rounded-[30px] flex justify-center items-center cursor-pointer"
                  >
                    Add to cart
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
     {/* Custom navigation buttons */}
     

    </>
  );
};

export default Card;
