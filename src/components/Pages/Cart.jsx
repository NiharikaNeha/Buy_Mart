import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaShoppingCart, FaShoppingBasket } from "react-icons/fa";
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
      Price: parseFloat(
        String(item.Price || item.price || "0").replace(/[^\d.-]/g, "")
      ),
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
      "Do you want to remove this item from your cart?"
    );
    if (!confirmRemove) return;
    const updatedCart = cart.filter((item) => item.Id !== id);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    toast.success("Item removed from cart");
  };

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toLowerCase();
    if (code === "freeship10") {
      setDiscount(10);
      toast.success("10% discount applied!");
    } else {
      setDiscount(0);
      toast.error("Invalid coupon code");
    }
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.Price * item.quantity,
    0
  );
  const shipping = cart.length ? 80 : 0;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount + shipping;

  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    navigate("/checkout");
  };

  return (
    <div className="px-4 sm:px-8 lg:px-[12%] py-14 bg-gray-50 min-h-screen text-gray-800 space-y-12">
      {/* Header */}
      <h1 className="flex items-center justify-center gap-4 text-3xl sm:text-4xl font-bold text-yellow-500">
        <FaShoppingCart />
        My Shopping Cart
      </h1>

      {/* Cart Table */}
      <div className="overflow-x-auto">
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
          <tbody className="space-y-4">
            {cart.map((item) => (
              <tr key={item.Id} className="bg-white rounded-xl shadow-sm">
                <td className="text-center">
                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="text-xl text-gray-400 hover:text-red-500"
                  >
                    <MdOutlineRemoveCircle />
                  </button>
                </td>

                <td className="flex items-center gap-5 py-5 px-4">
                  <img
                    src={item.ProductsImage}
                    alt={item.Name}
                    className="w-24 h-24 object-contain border p-2 rounded-lg"
                  />
                  <div className="space-y-1">
                    <h3 className="text-md font-semibold">{item.Name}</h3>
                    <p className="text-sm text-gray-600">{item.Category}</p>
                  </div>
                </td>

                <td className="text-center text-gray-800 font-medium">
                  ₹{item.Price.toFixed(2)}
                </td>
                <td className="text-center">
                  <div className="inline-flex items-center border rounded overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.Id, -1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-5 font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.Id, 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="text-center font-semibold text-gray-800">
                  ₹{(item.Price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}

            {cart.length === 0 && (
              <tr>
                <td colSpan="5" className="py-12 text-center text-gray-500">
                  <FaShoppingBasket className="inline-block text-4xl mb-2" />
                  <p>Your Cart Is Empty!</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* My Cart */}
      <div className="font-bold bg-white p-8 rounded-xl shadow-md max-w-lg mx-auto space-y-6">
        <h2 className="text-2xl font-semibold border-b border-gray-200 pb-3 text-center">
          My Cart
        </h2>

        <div className="space-y-3 text-gray-700">
          <p className="flex justify-between text-lg">
            <span className="pb-2">Subtotal:</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </p>
          <p className="flex justify-between text-lg">
            <span className="pb-2">Shipping:</span>
            <span>₹{shipping.toFixed(2)}</span>
          </p>
          <p className="flex justify-between text-lg">
            <span className="pb-2">Discount:</span>
            <span className="text-green-600">- ₹{discountAmount.toFixed(2)}</span>
          </p>

          <hr className="my-4" />

          <p className="flex justify-between text-xl font-bold text-gray-900">
            <span>Total:</span>
            <span className="text-gray-600">₹{total.toFixed(2)}</span>
          </p>
        </div>

        {/* Coupon + Buttons */}
        <div className="flex flex-col gap-4 pt-4">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter Coupon Code"
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            onClick={handleApplyCoupon}
            className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-3 rounded-lg transition"
          >
            Apply Coupon
          </button>

          <button
            onClick={handlePlaceOrder}
            className="bg-gray-600 hover:bg-gray-500 text-white font-semibold py-3 rounded-lg transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
