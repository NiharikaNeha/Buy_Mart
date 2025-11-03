import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

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
    if (code === "freeship99") {
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
    <div className="px-4 sm:px-6 lg:px-[12%] py-10 bg-gray-50 text-gray-800 min-h-screen">
      <h1 className="flex items-center justify-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-yellow-500 font-bricolage">
        <FaShoppingCart />
        My Shopping Cart
      </h1>

      <ToastContainer position="top-right" autoClose={1500} />

      {/* Empty Cart View */}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-600">
          <FaShoppingBasket className="text-6xl text-yellow-500 mb-4" />
          <p className="text-lg sm:text-xl font-semibold text-center">
            Your Cart Is Empty!
          </p>
        </div>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
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
                {cart.map((item) => (
                  <tr
                    key={item.Id}
                    className="bg-white border rounded-xl shadow-sm"
                  >
                    <td className="text-center">
                      <button
                        onClick={() => removeFromCart(item.Id)}
                        className="text-xl text-gray-400 hover:text-red-500"
                      >
                        <MdOutlineRemoveCircle className="text-2xl" />
                      </button>
                    </td>

                    <td className="flex items-center gap-4 py-4 px-2">
                      <img
                        src={item.ProductsImage}
                        alt={item.Name}
                        className="w-20 h-20 object-contain border p-2 rounded-lg"
                      />
                      <div>
                        <h3 className="text-md font-semibold text-gray-700">
                          {item.Name}
                        </h3>
                        <p className="text-sm text-gray-700">{item.Category}</p>
                      </div>
                    </td>
                    <td className="text-center text-gray-800 font-medium">
                      ₹{item.Price.toFixed(2)}
                    </td>
                    <td className="text-center">
                      <div className="inline-flex items-center border rounded overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.Id, -1)}
                          className="px-3 py-1 hover:bg-gray-200"
                        >
                          -
                        </button>
                        <span className="px-4 font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.Id, 1)}
                          className="px-3 py-1 hover:bg-gray-200"
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
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden flex flex-col gap-6">
            {cart.map((item) => (
              <div
                key={item.Id}
                className="bg-white rounded-xl shadow p-4 flex flex-col gap-4"
              >
                <div className="flex justify-between items-center">
                  <img
                    src={item.ProductsImage}
                    alt={item.Name}
                    className="w-24 h-24 object-contain border p-2 rounded-lg"
                  />
                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="text-xl text-gray-400 hover:text-red-500"
                  >
                    <MdOutlineRemoveCircle />
                  </button>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">{item.Name}</h3>
                  <p className="text-sm text-gray-500">{item.Category}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">
                    ₹{item.Price.toFixed(2)}
                  </span>
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => updateQuantity(item.Id, -1)}
                      className="px-2 py-1 hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.Id, 1)}
                      className="px-2 py-1 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right font-semibold text-gray-700">
                  Total: ₹{(item.Price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Coupon Section */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full md:w-1/2 flex">
          <input
            type="text"
            placeholder="Coupon Code (e.g., FREESHIP99)"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="border px-4 w-full rounded-l-md outline-none text-gray-700"
          />
          <button
            onClick={handleApplyCoupon}
            className="bg-gray-800 text-white px-6 py-2 rounded-r-md hover:bg-red-500 transition"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
