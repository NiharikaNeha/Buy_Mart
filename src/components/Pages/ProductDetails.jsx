import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { toast, ToastContainer } from "react-toastify";
import { Autoplay } from "swiper/modules";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import ProductData from "../../Data.json";

import brand1 from "../../assets/dell.png";
import brand2 from "../../assets/samsung.png";
import brand3 from "../../assets/sanyo.png";
import brand4 from "../../assets/lenovo.png";
import brand5 from "../../assets/oppo.png";
import brand6 from "../../assets/panasonic.png";
import brand7 from "../../assets/asus.png";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const products = ProductData.Products;
  const navigate = useNavigate();
  const product = products.find((p) => p.Id === parseInt(id));

  if (!product)
    return (
      <div className="p-10 text-center text-xl alert alert-danger">
        Product Not Found
      </div>
    );

  const [showZoom, setShowZoom] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientX - top) / height) * 100;
    setMousePosition((x, y));
  };

  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishList = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const exists = wishList.some((item) => item.Id === product?.Id);

    setIsWishlisted(exists);
  }, [product?.Id]);

  const handleWishlistIcon = () => {
    const wishList = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const exists = wishList.some((item) => item.Id === product.Id);

    let updatedList;
    if (exists) {
      updatedList = wishList.filter((item) => item.Id !== product.Id);
      toast.info("Item Removed From The Wishlist");
    } else {
      updatedList = [...wishList, product];
      toast.success("Item Added To Wishlist");
    }
    localStorage.setItem("wishlistItems", JSON.stringify(updatedList));
    setIsWishlisted(!exists);
  };

  const handleAddToWishlist = () => {
  const wishList = JSON.parse(localStorage.getItem("wishlistItems")) || [];
  const exists = wishList.some((item) => item.Id === product.Id);

  if (!exists) {
    const updatedList = [...wishList, product];
    localStorage.setItem("wishlistItems", JSON.stringify(updatedList));
    toast.success("Item Added To Wishlist");
  } else {
    toast.info("Item Already In Wishlist");
  }

  setTimeout(() => {
    navigate("/wishlist");
  }, 1000);
};

  const handleAddToCart = () => {
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

  if (!product) {
    return (
      <div className="p-10 text-center text-xl text-red-600">
        Product Not Found
      </div>
    );
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} />

      {/* PAGE SECTION */}
      <div className="w-full bg-yellow-100 py-4 px-[8%] lg:px-[12%]">
        <div className="text-lg text-gray-600 flex justify-center items-center space-x-2">
          <Link to="/" className="hover:underline text-gray-700 font-medium">
            Home
          </Link>
          <span className="text-gray-500">&nbsp; / &nbsp;</span>
          <span className="text-gray-900 font-semibold">Product Details</span>
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="flex flex-col md:flex-row items-center gap-10 px-[8%] lg:px-[12%] py-20">
        <div className="w-full md:w-1/2 flex gap-6 justify-center border rounded-xl shadow-md p-6 relative bg-white">
          <div
            className="relative w-[280px] h-[280px] border rounded-xl shadow-md overflow-hidden cursor-zoom-in"
            onMouseEnter={() => setShowZoom(true)}
            onMouseLeave={() => setShowZoom(false)}
            onMouseMove={handleMouseMove}
          >
            <img
              src={product.ProductsImage}
              alt={product.Name}
              className="w-full h-full object-contain transition-transform duration-200"
              style={
                showZoom
                  ? {
                      transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                      transform: "scale(1.1)",
                    }
                  : { transform: "scale(1)" }
              }
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-md font-semibold bg-red-500 inline-block px-3 py-2 rounded text-white mb-4">
            {product.Category}
          </p>
          <h2 className="text-3xl font-bold font-bricolage text-black mb-3">
            {product.Name}
          </h2>
          <div className="text-2xl font-bold text-red-600 mb-2">
            {product.Price}
            {product.OldPrice && (
              <span className="text-gray-400 text-lg line ml-3 pl-2">
                {product.OldPrice}
              </span>
            )}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in
            perspiciatis molestias. Eum saepe aperiam nemo inventore animi
            quaerat illum.
          </p>
          <div className="flex gap-3 pt-3 pb-3">
            <button
              onClick={handleAddToCart}
              className="font-medium mt-4 px-6 py-2 rounded bg-yellow-300 text-black hover:bg-yellow-400 transition"
            >
              {" "}
              Add To Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="font-medium mt-4 px-6 py-2 rounded bg-yellow-500 text-black hover:bg-yellow-400 transition"
            >
              {" "}
              Add To Wishlist
            </button>
          </div>
          <div className="my-3 bg-red-100 p-3">
            <p className="text-semibold">
              - Estimated Delivery Time 14-30 days
            </p>
            <p className="text-semibold">
              - 18 Months Warranty At Genuine Warranty center
            </p>
            <p className="text-semibold">
              - Use Coupon To Get Extra ₹25 Off ( Only For This Product)
            </p>
          </div>
        </div>
      </div>

      {/* POLICIES */}
      <div className="px-[8%] lg:[12%]">
        <h2 className="font-bricolage font-bold text-3xl mb-5">
          {" "}
          Shipping Policy
        </h2>
        <p className="mb-3 text-md">
          At our Company, we understand the importance of timely delivery. We
          offer a variety of shipping options to suit your needs, including
          standard, expedited, and express shipping. Our dedicated team works
          digently to process and dispatch your orders promptly, aiming to
          deliver them to your doorstep within the estimated and interframe.
        </p>
        <p className="mb-3 text-md">
          ● We strive to provide fast reliable shipping to our shipping to our
          customers. Here's everything you need to know about our shipping
          process.
        </p>
        <p className="mb-1">● Dispatch: Within 24 Hours</p>
        <p className="mb-1">
          ● Free shipping across all products on a minnimum purchase of ₹895
        </p>
        <p className="mb-1">● International delivery time 5 to 7 business days</p>
        <p className="mb-1">● Cash On Delivery(COD) might be available</p>
        <p className="mb-1">● Easy 30 days returns and exchanges</p>
        <p className="mb-1">
          ● Please note that delivery times are estimate and may vary depending on
          factors such as product availability, destiination, and carrier delay.
        </p>

        <h2 className="font-bricolage font-bold text-3xl mb-5 pt-10">
          {" "}
          Returns Policy
        </h2>
        <p className="text-md mb-5 ">
          We want you to be completely satisfied with your purchase from our
          website. Id for any reasons you are not entirely happy with your
          order, we're here to help. Certain exclusions and connditions may
          apply, so we encourage you to review our detailed return policy for
          more information. Rest assured, our goal is to ensure your complete
          satisfaction with every purchase you make from our website.
        </p>
        <p className="mb-1">
          ● Returned items must be unused, undamaged, and in the same condition as
          recieved.
        </p>
        <p className="mb-1">
          ● Original tags, labels, and packages must be intact and included with
          the returned item.
        </p>
        <p className="mb-1">
          ● Proof of purchase, such as your order confirmation or receipt, is
          required for all returns.
        </p>
      </div>

      {/* Add Reviews */}
      <div className="px-[8%] lg:px-[10%] py-[50px]">
        <div className="px-[2%] py-[20px] border rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold pb-4 text-gray-800 font-bricolage">
            Add A Review
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block pt-2 text-lg font-semibold text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block pt-2 text-lg font-semibold text-gray-700">
                Ratings
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-yellow-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Rating
                </option>
                <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                <option value="4">⭐⭐⭐⭐ (4)</option>
                <option value="3">⭐⭐⭐ (3)</option>
                <option value="2">⭐⭐ (2)</option>
                <option value="1">⭐ (1)</option>
              </select>
            </div>
            <div>
              <label className="block pt-2 text-lg font-semibold text-gray-700">
                Your Review
              </label>
              <textarea
                rows="4"
                placeholder="Your Review For Us"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-yellow-400"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
            >
              Submit Your Review
            </button>
          </form>
        </div>
      </div>

      {/* Brands */}
      <div className="px-[8%] lg:px-[12%] py-10">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            1399: { slidesPerView: 5 },
            1199: { slidesPerView: 5 },
            991: { slidesPerView: 4 },
            575: { slidesPerView: 3 },
            0: { slidesPerView: 3 },
          }}
          modules={Autoplay}
        >
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img src={brand1} className="object-contain invert:[0.3] hover:invert-[0] cursor-pointer transition" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img src={brand2} className="object-contain invert:[0.3] hover:invert-[0] cursor-pointer transition" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img src={brand3} className="object-contain invert:[0.3] hover:invert-[0] cursor-pointer transition" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img src={brand4} className="object-contain invert:[0.3] hover:invert-[0] cursor-pointer transition" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img src={brand5} className="object-contain invert:[0.3] hover:invert-[0] cursor-pointer transition" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img src={brand6} className="object-contain invert:[0.3] hover:invert-[0] cursor-pointer transition" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img src={brand7} className="object-contain invert:[0.3] hover:invert-[0] cursor-pointer transition" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ProductDetails;
