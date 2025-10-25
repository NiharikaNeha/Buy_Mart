import React from "react";
import "swiper/css/effect-fade";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { toast, ToastContainer } from "react-toastify";

// Importing Images
import heroImg from '../../assets/hero.png'
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
  return(
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
                <button className="bg-yellow-400 px-[10%] py-3 rounded-md font-semibold text-xl mt-5 hover:bg-yellow-500 transition">Start Buying</button>
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
                <h5 className="font-bold text-xl">
                  UNDER FAVORABLE PHONES
                </h5>
                <span className="hero-span text-3xl text-gray-800 font-semibold mt-3">
                  FROM <br />
                  <div className="text-6xl font-bold text-gray-800">
                    <sup>₹</sup>
                    9,800
                  </div>
                </span>
                <button className="bg-yellow-400 px-[10%] py-3 rounded-md font-semibold text-xl mt-5 hover:bg-yellow-500 transition">Start Buying</button>
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
                <button className="bg-yellow-400 px-[10%] py-3 rounded-md font-semibold text-xl mt-5 hover:bg-yellow-500 transition">Start Buying</button>
              </div>
              <div className="hero-image hide w-1/2">
              <img src={heroImg3} alt="Img" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </header>
    </div>
  </>
  )
};

export default Index;
