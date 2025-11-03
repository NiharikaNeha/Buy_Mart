import React, { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineRemoveCircle } from "react-icons/md";
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
  const subtotal = cart.reduce(
    (acc, item) => acc + item.Price * item.quantity,
    0
  );
  const shipping = cart.length ? 300 : 0;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount + shipping;
  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    navigate("/checkout");
  };
  return (
    <>
      <div className="px-4 sm:px-8 lg:px-[12%] py-12 bg-gray-50 text-gray-800 min-h-screen">
        <h1 className="flex items-center justify-center gap-3  text-2xl sm-text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-500 font-bricolage">
          <FaShoppingCart />
          My Shopping Cart
        </h1>
        {/* Desktop View */}
        <div className="mb:block overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-6">
            <thead>
              <tr className="text-md text-gray-500 border-b border-gray-200">
                <th></th>
                <th>Product</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.Id} className="bg-white border rounded-xl shadow-sm">
                  <td className="text-center">
                    <button onClick={() => removeFromCart(item.Id)} className="text-xl text-gray-400 hover:text-red-500">
                       <MdOutlineRemoveCircle className="text-xl sm:text-2xl" />
                    </button>
                  </td>
                  <td className="flex items-center gap-4 py-4 px-2">
                    <img
                      src={item.ProductsImage}
                      alt={item.Name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain border p-1 sm:p-2 rounded-lg"
                    />
                    <div>
                      <h3 className=" text-md font-semibold text-gray-700">
                      {item.Name}
                    </h3>
                    <p className="text-sm text-gray-700">{item.Category}</p>
                    </div>
                  </td>
                  <td className="text-center text-gray-800 font-medium">{item.Price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
