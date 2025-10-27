import React from "react";
import "swiper/css/effect-fade";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { toast, ToastContainer } from "react-toastify";

// Importing Images
import heroImg from "../../assets/hero.png";
import heroImg2 from "../../assets/hero-2.png";
import heroImg3 from "../../assets/hero-3.png";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import banner4 from "../../assets/banner-4.jpg";
import banner5 from "../../assets/banner-5.jpg";
import bannerImg2 from "../../assets/banner.jpg";
import ProductData from "../../Data.json";
import brand1 from "../../assets/dell.png";
import brand2 from "../../assets/samsung.png";
import brand3 from "../../assets/sanyo.png";
import brand4 from "../../assets/lenovo.png";
import brand5 from "../../assets/oppo.png";
import brand6 from "../../assets/panasonic.png";
import brand7 from "../../assets/asus.png";
import bannerCard1 from "../../assets/banner-card-3.jpg";

const Index = () => {
  const products = ProductData.Products;
  const specialOffer = products.find((p) => p.Id === 7);
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-element"></div>
      {/*HERO SECTION */}
      <div className="hero-bg">
        <header className="px-[8%] lg:px-[12%] py-20">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 3000 }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="hero flex gap-8">
                <div className="hero-content flex flex-col justify-start items-start w-1/2">
                  <h1 className="text-7xl font-bricolage">
                    THE NEW <br />
                    STANDARDS
                  </h1>
                  <h5 className="font-bold text-xl">
                    UNDER FAVORABLE SMARTWATCHES
                  </h5>
                  <span className="hero-span text-3xl text-gray-800 font-semibold mt-3">
                    FROM <br />
                    <div className="text-6xl font-bold text-gray-800">
                      <sup>₹</sup>
                      1,800
                    </div>
                  </span>
                  <button className="bg-yellow-400 px-[10%] py-3 rounded-md font-semibold text-xl mt-5 hover:bg-yellow-500 transition">
                    Start Buying
                  </button>
                </div>
                <div className="hero-image hide w-1/2">
                  <img src={heroImg} alt="Img" />
                </div>
              </div>
            </SwiperSlide>
            {/* Slide 2 */}
            <SwiperSlide>
              <div className="hero flex gap-8">
                <div className="hero-content flex flex-col justify-start items-start w-1/2">
                  <h1 className="text-7xl font-bricolage">
                    THE NEW <br />
                    STANDARDS
                  </h1>
                  <h5 className="font-bold text-xl">UNDER FAVORABLE PHONES</h5>
                  <span className="hero-span text-3xl text-gray-800 font-semibold mt-3">
                    FROM <br />
                    <div className="text-6xl font-bold text-gray-800">
                      <sup>₹</sup>
                      9,800
                    </div>
                  </span>
                  <button className="bg-yellow-400 px-[10%] py-3 rounded-md font-semibold text-xl mt-5 hover:bg-yellow-500 transition">
                    Start Buying
                  </button>
                </div>
                <div className="hero-image hide w-1/2">
                  <img src={heroImg2} alt="Img" />
                </div>
              </div>
            </SwiperSlide>
            {/* SLide 3 */}
            <SwiperSlide>
              <div className="hero flex gap-8">
                <div className="hero-content flex flex-col justify-start items-start w-1/2">
                  <h1 className="text-7xl font-bricolage">
                    THE NEW <br />
                    STANDARDS
                  </h1>
                  <h5 className="font-bold text-xl">
                    UNDER FAVORABLE SPEAKERS
                  </h5>
                  <span className="hero-span text-3xl text-gray-800 font-semibold mt-3">
                    FROM <br />
                    <div className="text-6xl font-bold text-gray-800">
                      <sup>₹</sup>
                      2,500
                    </div>
                  </span>
                  <button className="bg-yellow-400 px-[10%] py-3 rounded-md font-semibold text-xl mt-5 hover:bg-yellow-500 transition">
                    Start Buying
                  </button>
                </div>
                <div className="hero-image hide w-1/2">
                  <img src={heroImg3} alt="Img" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </header>
      </div>

      {/* BANNER SECTION */}
      <div className="px-[20%] lg:px-[12%] py-20">
        <div
          className="banner-1 flex flex-col justify-center gap-5 bg-cover bg-center rounded-xl p-6 md:p-8 h-[250px] sm:h-[290px]"
          style={{ backgroundImage: `url(${banner5})` }}
        >
          <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
            EXCLUSIVE HEADPHONE
          </small>
          <h3 className="text-5xl font-semibold font-bricolage">
            Relaese Date & Price
          </h3>
          <p className="text-2xl">Today's Super Offer</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-20">
          {/* BANNER-1 */}
          <div className="pt-6">
            <div
              className="flex flex-col gap-1 bg-cover bg-center rounded-xl p-6 md:p-8 h-[250px] sm:h-[390px]"
              style={{ backgroundImage: `url(${banner1})` }}
            >
              <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
                New Products
              </small>
              <h3 className="text-lg md:text-xl font-semibold font-bricolage">
                Relaese Date & Price
              </h3>
              <p className="text-base md:text-sm">Today's Super Offer</p>
            </div>
          </div>
          {/* BANNER-2 */}
          <div className="pt-6">
            <div
              className="flex flex-col gap-1 bg-cover bg-center rounded-xl p-6 md:p-8 h-[250px] sm:h-[390px]"
              style={{ backgroundImage: `url(${banner2})` }}
            >
              <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
                New Products
              </small>
              <h3 className="text-lg md:text-xl font-semibold font-bricolage">
                Relaese Date & Price
              </h3>
              <p className="text-base md:text-sm">Today's Super Offer</p>
            </div>
          </div>
          {/* BANNER-3 */}
          <div className="pt-6">
            <div
              className="flex flex-col gap-1 bg-cover bg-center rounded-xl p-6 md:p-8 h-[250px] sm:h-[390px]"
              style={{ backgroundImage: `url(${banner3})` }}
            >
              <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
                New Products
              </small>
              <h3 className="text-lg md:text-xl font-semibold font-bricolage">
                Relaese Date & Price
              </h3>
              <p className="text-base md:text-sm">Today's Super Offer</p>
            </div>
          </div>
          {/* BANNER-4 */}
          <div className="pt-6">
            <div
              className="flex flex-col gap-1 bg-cover bg-center rounded-xl p-6 md:p-8 h-[250px] sm:h-[390px]"
              style={{ backgroundImage: `url(${banner4})` }}
            >
              <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
                New Products
              </small>
              <h3 className="text-lg md:text-xl font-semibold font-bricolage">
                Relaese Date & Price
              </h3>
              <p className="text-base md:text-sm">Today's Super Offer</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION TITLE */}
      <div className="section-title px-[8%] lg:px-[12%] my-10">
        <span className="text-xl font-semibold bg-yellow-300 px-5 py-2 rounded-full">
          Our Products
        </span>
        <h2 className="text-5xl font-bold font-bricolage pt-4">
          Popular Products
        </h2>
      </div>

      {/* PRODUCTS */}
      <div className="product-wrapper px-[8%] lg:px-[12%] py-10 grid grid-cols-3 gap-10 ">
        {/* Special Offer Card */}
        <div className=" bg-white border-2 border-yellow-400 p-6 product-banner-wrap rounded-xl flex flex-col items-center justify-center text-center relative">
          <span className="text-xl text-white font-bold mb-1 bg-red-600 px-3 py-2 rounded">
            Special Offer
          </span>
          <div className="absolute top-[22.5px] right-4 bg-yellow-400 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-sm">
            {" "}
            Save <br /> ₹120
          </div>
          <img
            src={specialOffer.ProductsImage}
            alt={specialOffer.Name}
            className="w-4/5 mx-auto my-4"
          />
          <h3 className="text-gray-700 text-lg font-bold">
            {specialOffer.Name}
          </h3>
          <div className="mt-2">
            <span className=" line text-gray-500">{specialOffer.OldPrice}</span>{" "}
            <span className="text-red-600 text-xl font-bold">
              {specialOffer.Price}
            </span>
          </div>
          <div className="flex justify-between w-full mt-6 text-md font-bold">
            <span>Available: 6</span>
            <span>Already Sold: 20</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-1 overflow-hidden">
            <div className="bg-yellow-400 w-1/5 h-full"></div>
          </div>
          <p className="mt-3 text-gray-700 text-sm font-sans">
            Hurry Up! Offer Ends In:
          </p>
        </div>
        {/* Product Cards */}
        <div className="lg:col-span-2">
          <div className="grid product-wrap grid-cols-2 md:grid-cols-3 gap-6">
            {products.slice(0, 8).map((product) => (
              <div
                key={product.Id}
                className="bg-white shadow-md rounded-xl p-4 flex-col items-center hover:shadow-xl transition duration-300 group border border-gray-200 cursor-pointer"
              >
                <p className="text-xs text-white font-bold mb-1 bg-red-600 px-3 py-2 rounded">
                  {product.Category}
                </p>
                <img
                  src={product.ProductsImage}
                  alt={product.Name}
                  className="w-4/5 h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                  onClick={() => navigate(`/product/${product.Id}`)}
                />
                <h4
                  onClick={() => navigate(`/product/${product.Id}`)}
                  className="text-lg font-medium mt-3 text-gray-800 hover:underline line-clamp-2"
                >
                  {product.Name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
