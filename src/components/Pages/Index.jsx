import React from "react";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
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
import bannerImg2 from "../../assets/banner.jpg";
import bannerCard1 from "../../assets/banner-card-3.jpg";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import banner4 from "../../assets/banner-4.jpg";
import banner5 from "../../assets/banner-5.jpg";
import brand1 from "../../assets/dell.png";
import brand2 from "../../assets/samsung.png";
import brand3 from "../../assets/sanyo.png";
import brand4 from "../../assets/lenovo.png";
import brand5 from "../../assets/oppo.png";
import brand6 from "../../assets/panasonic.png";
import brand7 from "../../assets/asus.png";
import ProductData from "../../Data.json";
import { LuShoppingCart } from "react-icons/lu";

const Index = () => {
  const products = ProductData.Products;
  const specialOffer = products.find((p) => p.Id === 7);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const exists = cart.some((item) => item.Id === product.Id);

    if (!exists) {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      toast.success("Item Added To Cart");
    } else {
      toast.warning("Item Already In Cart");
    }

    setTimeout(() => {
      navigate("/cart");
    }, 1000);
  };

  return (
    <>
      <div className="bg-element"></div>

      {/* HERO SECTION */}
      <div className="hero-bg">
        <header className="px-[5%] md:px-[8%] lg:px-[12%] py-10 sm:py-16 md:py-20">
          <Swiper
            slidesPerView={1}
            loop={true}
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 3000 }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
          >
            {/* Slide 1 */}
            {[
              { img: heroImg, title: "SMARTWATCHES", price: "1,800" },
              { img: heroImg2, title: "PHONES", price: "9,800" },
              { img: heroImg3, title: "SPEAKERS", price: "2,500" },
            ].map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="hero flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                  <div className="hero-content w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bricolage">
                      THE NEW <br />
                      STANDARDS
                    </h1>
                    <h5 className="font-bold text-lg sm:text-xl mt-3">
                      UNDER FAVORABLE {slide.title}
                    </h5>
                    <span className="hero-span text-2xl sm:text-3xl text-gray-800 font-semibold mt-3 block">
                      FROM
                      <div className="text-5xl sm:text-6xl font-bold text-gray-800 pb-5">
                        <sup>₹</sup>
                        {slide.price}
                      </div>
                    </span>
                    <button className="bg-yellow-400 px-8 sm:px-10 py-3 rounded-md font-semibold text-lg sm:text-xl mt-5 hover:bg-yellow-500 transition">
                      Start Buying
                    </button>
                  </div>
                  <div className="hero-image w-full md:w-1/2 flex justify-center">
                    <img
                      src={slide.img}
                      alt="Hero"
                      className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </header>
      </div>

      {/* BANNER SECTION */}
      <div className="px-[6%] md:px-[10%] lg:px-[12%] py-16 space-y-10">
        {/* Main Banner */}
        <div
          className="relative rounded-2xl overflow-hidden text-center sm:text-left flex items-center justify-start bg-cover bg-center"
          style={{ backgroundImage: `url(${banner5})`, minHeight: "300px" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 p-6 sm:p-10 md:p-14 text-white w-full sm:w-3/4 lg:w-1/2">
            <small className="bg-yellow-500 text-sm sm:text-base md:text-lg px-4 py-2 w-fit rounded-md inline-block mb-3">
              EXCLUSIVE HEADPHONE
            </small>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold font-bricolage leading-tight">
              Release Date & Price
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-2">
              Today's Super Offer
            </p>
          </div>
        </div>

        {/* Grid Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {[banner1, banner2, banner3, banner4].map((banner, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden flex items-center justify-start bg-cover bg-center"
              style={{ backgroundImage: `url(${banner})`, minHeight: "250px" }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 p-6 sm:p-8 text-white">
                <small className="bg-yellow-500 text-xs sm:text-sm md:text-base px-3 py-2 rounded-md inline-block mb-2">
                  New Products
                </small>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-bricolage">
                  Release Date & Price
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 mt-1">
                  Today's Super Offer
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION TITLE */}
      <div className="section-title px-[8%] lg:px-[12%] my-10 text-center md:text-left">
        <span className="text-lg sm:text-xl font-semibold bg-yellow-300 px-5 py-2 rounded-full">
          Our Products
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bricolage pt-4">
          Popular Products
        </h2>
      </div>

      {/* PRODUCTS */}
      <div className="product-wrapper px-[6%] md:px-[10%] lg:px-[12%] py-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {/* Special Offer Card */}
        <div className="bg-white border-2 border-yellow-400 p-6 product-banner-wrap rounded-xl flex flex-col items-center justify-center text-center relative">
          <span className="text-base sm:text-xl text-white font-bold mb-1 bg-red-600 px-3 py-2 rounded">
            Special Offer
          </span>
          <div className="absolute top-[22.5px] right-4 bg-yellow-400 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-sm">
            Save <br /> ₹120
          </div>
          <img
            src={specialOffer.ProductsImage}
            alt={specialOffer.Name}
            className="w-4/5 mx-auto my-4 object-contain"
          />
          <h3 className="text-gray-700 text-base sm:text-lg font-bold">
            {specialOffer.Name}
          </h3>
          <div className="mt-2">
            <span className="line text-gray-500">₹{specialOffer.OldPrice}</span>{" "}
            <span className="text-red-600 text-lg sm:text-xl font-bold">
              ₹{specialOffer.Price}
            </span>
          </div>
          <div className="flex justify-between w-full mt-6 text-xs sm:text-sm font-bold">
            <span>Available: 6</span>
            <span>Already Sold: 20</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-1 overflow-hidden">
            <div className="bg-yellow-400 w-1/5 h-full"></div>
          </div>
          <p className="mt-3 text-gray-700 text-xs sm:text-sm font-sans">
            Hurry Up! Offer Ends In:
          </p>
        </div>

        {/* Product Cards */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
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
                  className="text-sm sm:text-base md:text-lg font-medium mt-3 text-gray-800 hover:underline line-clamp-2"
                >
                  {product.Name}
                </h4>
                <div className="flex mt-5 flex-row items-center justify-between w-full">
                  {product.OldPrice ? (
                    <div className="mt-1 text-sm sm:text-md">
                      <span className="line text-gray-400">
                        ₹{product.OldPrice}
                      </span>{" "}
                      <span className="text-red-600 font-bold">
                        ₹{product.Price}
                      </span>
                    </div>
                  ) : (
                    <div className="text-sm sm:text-lg font-bold mt-1">
                      ₹{product.Price}
                    </div>
                  )}
                  <button
                    className="bg-yellow-500 text-white rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-red-500 hover:shadow-xl transition"
                    onClick={() => handleAddToCart(product)}
                  >
                    <LuShoppingCart className="text-[20px] font-bold" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Toaster */}
          <ToastContainer position="top-right" autoClose={1500} />
        </div>
      </div>

      {/* SECTION TITLE-2 */}
      <div className="section-title px-[8%] lg:px-[12%] my-10 text-center md:text-left">
        <span className="text-lg sm:text-xl font-semibold bg-yellow-300 px-5 py-2 rounded-full">
          Best Deals
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bricolage pt-4">
          Our Best Deals
        </h2>
      </div>
      {/* Best Details */}
      <div className="px-[8%] lg:px-[10%] py-20 bg-gradient-to-b from-yellow-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* LEFT SIDE PRODUCT */}
          <div className="lg:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-5">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.Id}
                className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center border border-gray-200 hover:shadow-xl transition duration-300 group cursor-pointer"
              >
                <p className="text-xs text-white font-bold mb-2 bg-red-600 px-3 py-1 rounded">
                  {product.Category}
                </p>

                <img
                  onClick={() => navigate(`/product/${product.Id}`)}
                  src={product.ProductsImage}
                  alt={product.Name}
                  className="w-4/5 h-28 object-contain transition-transform duration-300 group-hover:scale-105"
                />

                <h4
                  onClick={() => navigate(`/product/${product.Id}`)}
                  className="text-sm sm:text-base font-medium mt-3 text-gray-800 hover:underline text-center line-clamp-2"
                >
                  {product.Name}
                </h4>

                <div className="flex mt-3 items-center justify-between w-full">
                  {product.OldPrice ? (
                    <div className="text-sm">
                      <span className="line-through text-gray-400">
                        ₹{product.OldPrice}
                      </span>{" "}
                      <span className="text-red-600 font-bold">
                        ₹{product.Price}
                      </span>
                    </div>
                  ) : (
                    <div className="text-sm font-bold">₹{product.Price}</div>
                  )}

                  <button
                    className="bg-yellow-500 text-white rounded-full w-[32px] h-[32px] flex items-center justify-center hover:bg-red-500 hover:shadow-xl transition"
                    onClick={() => handleAddToCart(product)}
                  >
                    <LuShoppingCart className="text-[18px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* MIDDLE: SPECIAL OFFER */}
          <div className="lg:col-span-2 bg-white border-2 border-yellow-400 p-8 rounded-2xl flex flex-col items-center justify-center text-center relative shadow-md hover:shadow-lg transition-all duration-300">
            <span className="text-lg sm:text-xl text-white font-bold mb-1 bg-red-600 px-4 py-2 rounded">
              Special Offer
            </span>

            <div className="absolute top-6 right-6 bg-yellow-400 text-white rounded-full h-14 w-14 flex flex-col items-center justify-center font-bold text-sm leading-tight shadow-md">
              Save <br /> ₹120
            </div>

            <img
              src={specialOffer.ProductsImage}
              alt={specialOffer.Name}
              className="w-2/3 mx-auto my-6 object-contain transition-transform duration-300 hover:scale-105"
            />

            <h3 className="text-gray-700 text-base sm:text-lg font-bold">
              {specialOffer.Name}
            </h3>

            <div className="mt-2">
              <span className="line-through text-gray-500">
                ₹{specialOffer.OldPrice}
              </span>{" "}
              <span className="text-red-600 text-lg sm:text-xl font-bold">
                ₹{specialOffer.Price}
              </span>
            </div>

            <div className="flex justify-between w-full mt-6 text-xs sm:text-sm font-bold">
              <span>Available: 6</span>
              <span>Already Sold: 28</span>
            </div>

            <div className="w-full bg-gray-200 h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-yellow-400 w-1/5 h-full"></div>
            </div>

            <p className="mt-3 text-gray-700 text-xs sm:text-sm">
              Hurry Up! Offer ends in:
            </p>

            <button
              className="absolute bottom-4 right-4 bg-yellow-500 text-white rounded-full w-[38px] h-[38px] flex items-center justify-center hover:bg-red-500 hover:shadow-xl transition-transform duration-300 hover:scale-105"
              onClick={() => handleAddToCart(specialOffer)}
            >
              <LuShoppingCart className="text-[20px]" />
            </button>
          </div>

          {/* RIGHT SIDE PRODUCT */}
          <div className="lg:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-5">
            {products.slice(4, 8).map((product) => (
              <div
                key={product.Id}
                className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center border border-gray-200 hover:shadow-xl transition duration-300 group cursor-pointer"
              >
                <p className="text-xs text-white font-bold mb-2 bg-red-600 px-3 py-1 rounded">
                  {product.Category}
                </p>

                <img
                  src={product.ProductsImage}
                  alt={product.Name}
                  className="w-4/5 h-28 object-contain transition-transform duration-300 group-hover:scale-105"
                  onClick={() => navigate(`/product/${product.Id}`)}
                />

                <h4
                  onClick={() => navigate(`/product/${product.Id}`)}
                  className="text-sm sm:text-base font-medium mt-3 text-gray-800 hover:underline text-center line-clamp-2"
                >
                  {product.Name}
                </h4>

                <div className="flex mt-3 items-center justify-between w-full">
                  {product.OldPrice ? (
                    <div className="text-sm">
                      <span className="line-through text-gray-400">
                        ₹{product.OldPrice}
                      </span>{" "}
                      <span className="text-red-600 font-bold">
                        ₹{product.Price}
                      </span>
                    </div>
                  ) : (
                    <div className="text-sm font-bold">₹{product.Price}</div>
                  )}

                  <button
                    className="bg-yellow-500 text-white rounded-full w-[32px] h-[32px] flex items-center justify-center hover:bg-red-500 hover:shadow-xl transition"
                    onClick={() => handleAddToCart(product)}
                  >
                    <LuShoppingCart className="text-[18px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION TITLE-3  */}
      <div className="section-title px-[8%] lg:px-[12%] my-10 text-center md:text-left pt-8">
        <span className="text-lg sm:text-xl font-semibold bg-yellow-300 px-5 py-2 rounded-full">
          Best Sales
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bricolage pt-4">
          Our Best Sales
        </h2>
      </div>

      {/* BEST SALES */}
      <div className="px-[8%] lg:px-[12%] pb-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500 }}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 },
            575: { slidesPerView: 1 },
            767: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
            1199: { slidesPerView: 4 },
            1399: { slidesPerView: 4 },
          }}
          style={{ padding: "20px" }}
        >
          {/* Slide-1 */}
          <SwiperSlide>
            <div className="flex flex-col">
              <div className="pb-3">
                {products.slice(1, 2).map((product) => (
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
                      className="text-sm sm:text-base md:text-lg font-medium mt-3 text-gray-800 hover:underline line-clamp-2"
                    >
                      {product.Name}
                    </h4>
                    <div className="flex mt-5 flex-row items-center justify-between w-full">
                      {product.OldPrice ? (
                        <div className="mt-1 text-sm sm:text-md">
                          <span className="line text-gray-400">
                            ₹{product.OldPrice}
                          </span>{" "}
                          <span className="text-red-600 font-bold">
                            ₹{product.Price}
                          </span>
                        </div>
                      ) : (
                        <div className="text-sm sm:text-lg font-bold mt-1">
                          ₹{product.Price}
                        </div>
                      )}
                      <button
                        className="bg-yellow-500 text-white rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-red-500 hover:shadow-xl transition"
                        onClick={() => handleAddToCart(product)}
                      >
                        <LuShoppingCart className="text-[20px] font-bold" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pb-3">
                {products.slice(2, 3).map((product) => (
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
                      className="text-sm sm:text-base md:text-lg font-medium mt-3 text-gray-800 hover:underline line-clamp-2"
                    >
                      {product.Name}
                    </h4>
                    <div className="flex mt-5 flex-row items-center justify-between w-full">
                      {product.OldPrice ? (
                        <div className="mt-1 text-sm sm:text-md">
                          <span className="line text-gray-400">
                            ₹{product.OldPrice}
                          </span>{" "}
                          <span className="text-red-600 font-bold">
                            ₹{product.Price}
                          </span>
                        </div>
                      ) : (
                        <div className="text-sm sm:text-lg font-bold mt-1">
                          ₹{product.Price}
                        </div>
                      )}
                      <button
                        className="bg-yellow-500 text-white rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-red-500 hover:shadow-xl transition"
                        onClick={() => handleAddToCart(product)}
                      >
                        <LuShoppingCart className="text-[20px] font-bold" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>

          {/* Slide-2 */}
          <SwiperSlide>
            <div className="flex flex-col">
              <div className="pb-3">
                {products.slice(3, 4).map((product) => (
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
                      className="text-sm sm:text-base md:text-lg font-medium mt-3 text-gray-800 hover:underline line-clamp-2"
                    >
                      {product.Name}
                    </h4>
                    <div className="flex mt-5 flex-row items-center justify-between w-full">
                      {product.OldPrice ? (
                        <div className="mt-1 text-sm sm:text-md">
                          <span className="line text-gray-400">
                            ₹{product.OldPrice}
                          </span>{" "}
                          <span className="text-red-600 font-bold">
                            ₹{product.Price}
                          </span>
                        </div>
                      ) : (
                        <div className="text-sm sm:text-lg font-bold mt-1">
                          ₹{product.Price}
                        </div>
                      )}
                      <button
                        className="bg-yellow-500 text-white rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-red-500 hover:shadow-xl transition"
                        onClick={() => handleAddToCart(product)}
                      >
                        <LuShoppingCart className="text-[20px] font-bold" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pb-3">
                {products.slice(5, 6).map((product) => (
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
                      className="text-sm sm:text-base md:text-lg font-medium mt-3 text-gray-800 hover:underline line-clamp-2"
                    >
                      {product.Name}
                    </h4>
                    <div className="flex mt-5 flex-row items-center justify-between w-full">
                      {product.OldPrice ? (
                        <div className="mt-1 text-sm sm:text-md">
                          <span className="line text-gray-400">
                            ₹{product.OldPrice}
                          </span>{" "}
                          <span className="text-red-600 font-bold">
                            ₹{product.Price}
                          </span>
                        </div>
                      ) : (
                        <div className="text-sm sm:text-lg font-bold mt-1">
                          ₹{product.Price}
                        </div>
                      )}
                      <button
                        className="bg-yellow-500 text-white rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-red-500 hover:shadow-xl transition"
                        onClick={() => handleAddToCart(product)}
                      >
                        <LuShoppingCart className="text-[20px] font-bold" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>

          {/* Slide-3 */}
          <SwiperSlide>
            <div className="flex flex-col">
              <div className="pb-3">
                {products.slice(7, 8).map((product) => (
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
                      className="text-sm sm:text-base md:text-lg font-medium mt-3 text-gray-800 hover:underline line-clamp-2"
                    >
                      {product.Name}
                    </h4>
                    <div className="flex mt-5 flex-row items-center justify-between w-full">
                      {product.OldPrice ? (
                        <div className="mt-1 text-sm sm:text-md">
                          <span className="line text-gray-400">
                            ₹{product.OldPrice}
                          </span>{" "}
                          <span className="text-red-600 font-bold">
                            ₹{product.Price}
                          </span>
                        </div>
                      ) : (
                        <div className="text-sm sm:text-lg font-bold mt-1">
                          ₹{product.Price}
                        </div>
                      )}
                      <button
                        className="bg-yellow-500 text-white rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-red-500 hover:shadow-xl transition"
                        onClick={() => handleAddToCart(product)}
                      >
                        <LuShoppingCart className="text-[20px] font-bold" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pb-3">
                {products.slice(9, 10).map((product) => (
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
                      className="text-sm sm:text-base md:text-lg font-medium mt-3 text-gray-800 hover:underline line-clamp-2"
                    >
                      {product.Name}
                    </h4>
                    <div className="flex mt-5 flex-row items-center justify-between w-full">
                      {product.OldPrice ? (
                        <div className="mt-1 text-sm sm:text-md">
                          <span className="line text-gray-400">
                            ₹{product.OldPrice}
                          </span>{" "}
                          <span className="text-red-600 font-bold">
                            ₹{product.Price}
                          </span>
                        </div>
                      ) : (
                        <div className="text-sm sm:text-lg font-bold mt-1">
                          ₹{product.Price}
                        </div>
                      )}
                      <button
                        className="bg-yellow-500 text-white rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-red-500 hover:shadow-xl transition"
                        onClick={() => handleAddToCart(product)}
                      >
                        <LuShoppingCart className="text-[20px] font-bold" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>

          {/* Slide-4 */}
          <SwiperSlide>
            <div className="flex flex-col">
              <div className="pb-3">
                {products.slice(11, 12).map((product) => (
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
                      className="text-sm sm:text-base md:text-lg font-medium mt-3 text-gray-800 hover:underline line-clamp-2"
                    >
                      {product.Name}
                    </h4>
                    <div className="flex mt-5 flex-row items-center justify-between w-full">
                      {product.OldPrice ? (
                        <div className="mt-1 text-sm sm:text-md">
                          <span className="line text-gray-400">
                            ₹{product.OldPrice}
                          </span>{" "}
                          <span className="text-red-600 font-bold">
                            ₹{product.Price}
                          </span>
                        </div>
                      ) : (
                        <div className="text-sm sm:text-lg font-bold mt-1">
                          ₹{product.Price}
                        </div>
                      )}
                      <button
                        className="bg-yellow-500 text-white rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-red-500 hover:shadow-xl transition"
                        onClick={() => handleAddToCart(product)}
                      >
                        <LuShoppingCart className="text-[20px] font-bold" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pb-3">
                {products.slice(13, 14).map((product) => (
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
                      className="text-sm sm:text-base md:text-lg font-medium mt-3 text-gray-800 hover:underline line-clamp-2"
                    >
                      {product.Name}
                    </h4>
                    <div className="flex mt-5 flex-row items-center justify-between w-full">
                      {product.OldPrice ? (
                        <div className="mt-1 text-sm sm:text-md">
                          <span className="line text-gray-400">
                            ₹{product.OldPrice}
                          </span>{" "}
                          <span className="text-red-600 font-bold">
                            ₹{product.Price}
                          </span>
                        </div>
                      ) : (
                        <div className="text-sm sm:text-lg font-bold mt-1">
                          ₹{product.Price}
                        </div>
                      )}
                      <button
                        className="bg-yellow-500 text-white rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-red-500 hover:shadow-xl transition"
                        onClick={() => handleAddToCart(product)}
                      >
                        <LuShoppingCart className="text-[20px] font-bold" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Banner-2 */}
      <div className="px-[5%] sm:px-[8%] lg:px-[12%] py-10">
  <div
    className="banner-1 flex flex-col justify-center gap-5 bg-cover bg-center rounded-xl p-5 sm:p-6 md:p-8"
    style={{ backgroundImage: `url(${bannerImg2})` }}
  >
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
      
      {/* Title */}
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light font-bricolage leading-tight">
        SHOP AND <span className="font-bold">SAVE BIG</span> <br className="sm:hidden" />
        ON HOTTEST TABLETS
      </h3>

      {/* Price Badge */}
      <small className="bg-yellow-500 text-white text-lg sm:text-xl px-4 py-2 text-center w-fit rounded-md rounded-tl-none">
        <span className="font-thin text-sm sm:text-md text-black block">STARTING AT</span>
        <div className="text-xl sm:text-2xl font-bold text-gray-700 p-2 px-5">
          <sup>₹</sup>
          748
          <sup>99</sup>
        </div>
      </small>

    </div>
  </div>
</div>

      {/* Brands */}
      <div className="px-[8%] lg:px-[12%] py-10">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            1399: { slidesPerView: 5 },
            1199: { slidesPerView: 5 },
            991: { slidesPerView: 4 },
            575: { slidesPerView: 3 },
            0: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand1}
                className="object-contain invert:[0.3] hover:invert-[0] cursor-pointer transition"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand2}
                className="object-contain invert:[0.3] hover:invert-[0] cursor-pointer transition"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand3}
                className="object-contain invert:[0.3] hover:invert-[0] cursor-pointer transition"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand4}
                className="object-contain invert:[0.3] hover:invert-[0] cursor-pointer transition"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand5}
                className="object-contain invert:[0.3] hover:invert-[0] cursor-pointer transition"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand6}
                className="object-contain invert:[0.3] hover:invert-[0] cursor-pointer transition"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand7}
                className="object-contain invert:[0.3] hover:invert-[0] cursor-pointer transition"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* SECTION TITLE-4  */}
      <div className="section-title px-[8%] lg:px-[12%] my-10 text-center md:text-left pt-8">
        <span className="text-lg sm:text-xl font-semibold bg-yellow-300 px-5 py-2 rounded-full">
          Top Products
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bricolage pt-4">
          Our Top Products
        </h2>
      </div>

      {/* Top Products */}
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Col-1 */}
          <div>
            <h2 className="top-product text-xl font-bricolage font-semibold border-b border-yellow-200 pb-1">
              Featured Products
            </h2>
            <div className="flex flex-col gap-5 mt-9">
              {products.slice(1, 4).map((product) => (
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
                    className="text-sm sm:text-base md:text-lg font-medium mt-3 text-gray-800 hover:underline line-clamp-2"
                  >
                    {product.Name}
                  </h4>
                  <div className="flex mt-5 flex-row items-center justify-between w-full">
                    {product.OldPrice ? (
                      <div className="mt-1 text-sm sm:text-md">
                        <span className="line text-gray-400">
                          ₹{product.OldPrice}
                        </span>{" "}
                        <span className="text-red-600 font-bold">
                          ₹{product.Price}
                        </span>
                      </div>
                    ) : (
                      <div className="text-sm sm:text-lg font-bold mt-1">
                        ₹{product.Price}
                      </div>
                    )}
                    <button
                      className="bg-yellow-500 text-white rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-red-500 hover:shadow-xl transition"
                      onClick={() => handleAddToCart(product)}
                    >
                      <LuShoppingCart className="text-[20px] font-bold" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Col-2 */}
          <div>
            <h2 className="top-product text-xl font-bricolage font-semibold border-b border-yellow-200 pb-1">
              Order Products
            </h2>
            <div className="flex flex-col gap-5 mt-9">
              {products.slice(5, 8).map((product) => (
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
                    className="text-sm sm:text-base md:text-lg font-medium mt-3 text-gray-800 hover:underline line-clamp-2"
                  >
                    {product.Name}
                  </h4>
                  <div className="flex mt-5 flex-row items-center justify-between w-full">
                    {product.OldPrice ? (
                      <div className="mt-1 text-sm sm:text-md">
                        <span className="line text-gray-400">
                          ₹{product.OldPrice}
                        </span>{" "}
                        <span className="text-red-600 font-bold">
                          ₹{product.Price}
                        </span>
                      </div>
                    ) : (
                      <div className="text-sm sm:text-lg font-bold mt-1">
                        ₹{product.Price}
                      </div>
                    )}
                    <button
                      className="bg-yellow-500 text-white rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-red-500 hover:shadow-xl transition"
                      onClick={() => handleAddToCart(product)}
                    >
                      <LuShoppingCart className="text-[20px] font-bold" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Col-3 */}
          <div>
            <h2 className="top-product text-xl font-bricolage font-semibold border-b border-yellow-200 pb-1">
              Top Rated Products
            </h2>
            <div className="flex flex-col gap-5 mt-9">
              {products.slice(9, 12).map((product) => (
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
                    className="text-sm sm:text-base md:text-lg font-medium mt-3 text-gray-800 hover:underline line-clamp-2"
                  >
                    {product.Name}
                  </h4>
                  <div className="flex mt-5 flex-row items-center justify-between w-full">
                    {product.OldPrice ? (
                      <div className="mt-1 text-sm sm:text-md">
                        <span className="line text-gray-400">
                          ₹{product.OldPrice}
                        </span>{" "}
                        <span className="text-red-600 font-bold">
                          ₹{product.Price}
                        </span>
                      </div>
                    ) : (
                      <div className="text-sm sm:text-lg font-bold mt-1">
                        ₹{product.Price}
                      </div>
                    )}
                    <button
                      className="bg-yellow-500 text-white rounded-full w-[35px] h-[35px] flex items-center justify-center hover:bg-red-500 hover:shadow-xl transition"
                      onClick={() => handleAddToCart(product)}
                    >
                      <LuShoppingCart className="text-[20px] font-bold" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <img
            src={bannerCard1}
            className="w-full object-contain h-[600px] md:h-[500px] lg:h-[800px]"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Index;
