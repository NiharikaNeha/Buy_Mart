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
import { useNavigate, useParams } from "react-router-dom";

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
      e.currentTarget.getBoundingClientReact();
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
      updatedList = [...wishlist, product];
      toast.success("Item Added To Wishlist");
    }
    localStorage.setItem("wishlistItems", JSON.stringify(updatedList));
    setIsWishlisted(!exists);
  };

  const handleAddToWishlist = () => {
    const wishList = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const exists = wishList.some((item) => item.Id === product.Id);

    if (exists) {
      const updatedList = [...wishList, product];
      localStorage.setItem("wishlistItems", JSON.stringify(updatedList));
    }

    toast.success("Item Added To Wishlist");

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

  if(!product) {
    return (
      <div className="p-10 text-center text-xl text-red-600">Product Not Found</div>
    )
  }

  return <div>ProductDetails</div>;
};

export default ProductDetails;
