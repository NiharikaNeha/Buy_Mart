import React, { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const fixedCart = storedCart.map((item) => ({
      ...item,
      Price: parseFloat(item.Price),
      quantity: item.quantity || 1,
    }));
    setCart(fixedCart);
  }, []);

  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map((item) => {
      if (item.Id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  const removeFromCart = (id) => {
    const confirmRemove = window.confirm(
      "Do You Want To Remove This Item From Cart?"
    );
    if (!confirmRemove) return;

    const updatedCart = cart.filter((item) => item.Id !== id);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    toast.success("Item Removed From Cart");
  };
  const handleApplyCoupon = () => {
    const code = couponCode.trim().toLowerCase();
    if (code === "freeship10") {
      setDiscount(10);
      toast.success("10% Discount Applied");
    } else {
      setDiscount(0);
      toast.error("Invalid Coupon Code");
    }
  };
  const subtotal = cart.reduce((acc, item) => acc + item.Price * item.quantity);
  const shipping = cart.length ? 300 : 0;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount + shipping;
  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    navigate("/checkout");
  };
  return (
    <>
    <div className="px-4 sm:px-8 lg:px-[12%] py-12 bg-gray-800 min-h-screen">
      <h1 className="text-2xl sm-text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-600 font-bricolage"><FaShoppingCart />My SHopping Cart!</h1>
    </div>
    </>
  );
};

export default Cart;
