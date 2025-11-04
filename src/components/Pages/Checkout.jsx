import React, { useEffect, useState } from "react";
import Flags from "../../Flag.json";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("bank");
  const [discount, setDiscount] = useState(100);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryOpen, setCountryOpen] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCart = storedCart.map((item) => ({
      ...item,
      Price: parseFloat(item.Price),
      quantity: item.quantity || 1,
    }));
    setCart(updatedCart);
  }, []);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.Price * item.quantity,
    0
  );
  const shipping = cart.length ? 80 : 0;
  const total = subtotal + shipping - discount;

  const PaymentOption = ({ id, label }) => (
    <label
      htmlFor={id}
      className={`flex items-start gap-3 p-4 border rounded-md cursor-pointer transition-all ${
        selectedPayment === id
          ? "border-yellow-400 bg-yellow-50 shadow-sm"
          : "border-gray-300"
      }`}
    >
      <input
        type="radio"
        id={id}
        name="payment"
        value={id}
        checked={selectedPayment === id}
        onChange={() => setSelectedPayment(id)}
        className="mt-1 w-4 h-4 text-blue-600"
      />
      <span>{label}</span>
    </label>
  );

  return (
    <div className="min-h-screen px-[8%] lg:px-[12%] py-14 bg-white text-gray-800">
      <h1 className="text-5xl font-bricolage font-semibold text-center mb-10">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-4">
        {/* Billing Section */}
        <div className="lg:col-span-2 bg-white p-8 border rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Billing Details</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-md font-medium mb-1">
                First Name <span className="text-2xl text-green-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                className="w-full border rounded-md px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-md font-medium mb-1">
                Last Name <span className="text-2xl text-green-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                className="w-full border rounded-md px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-md font-medium mb-1">
                Company Name (Optional)
              </label>
              <input
                type="text"
                placeholder="Enter Your Company Name"
                className="w-full border rounded-md px-4 py-2"
              />
            </div>

            {/* Country Dropdown with Flags */}
            <div className="md:col-span-2 relative">
              <label className="block text-md font-medium mb-1">
                Country <span className="text-2xl text-green-600">*</span>
              </label>

              {/* Selected Country Button */}
              <button
                type="button"
                onClick={() => setCountryOpen(!countryOpen)}
                className="w-full flex items-center justify-between border rounded-md px-4 py-2 bg-white"
              >
                {selectedCountry ? (
                  <span className="flex items-center gap-2">
                    <img
                      src={selectedCountry.image}
                      alt=""
                      className="w-5 h-4 object-cover rounded-sm"
                    />
                    {selectedCountry.country}
                  </span>
                ) : (
                  "Select Country"
                )}
                <span className="text-gray-600 ml-2">▼</span>
              </button>

              {/* Dropdown Menu */}
              {countryOpen && (
                <ul className="absolute z-10 w-full bg-white border rounded-md shadow-md mt-2 max-h-60 overflow-auto">
                  {Flags.Data.map((flag, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedCountry(flag);
                        setCountryOpen(false);
                      }}
                    >
                      <img
                        src={flag.image}
                        alt={flag.country}
                        className="w-5 h-4 object-cover rounded-sm"
                      />
                      {flag.country}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <label className="block text-md font-medium mb-1">
                Street Address<span className="text-2xl text-green-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Street Address"
                className="w-full border rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-md font-medium mb-1">
                Area Address<span className="text-2xl text-green-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Area Address"
                className="w-full border rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-md font-medium mb-1">
                City<span className="text-2xl text-green-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your City"
                className="w-full border rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-md font-medium mb-1">
                Pincode<span className="text-2xl text-green-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Pincode"
                className="w-full border rounded-md px-4 py-2"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-md font-medium mb-1">
                State<span className="text-2xl text-green-600">*</span>
              </label>
            </div>
            <div>
              <label className="block text-md font-medium mb-1">
                Email Address<span className="text-2xl text-green-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="w-full border rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-md font-medium mb-1">
                Phone Number<span className="text-2xl text-green-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="w-full border rounded-md px-4 py-2"
              />
            </div>
          </form>
          {/* Additional Options */}
          <div className="mt-6 space-y-4">
            <label className="flex items-center text-md gap-2">
              <input type="checkbox" className="text-blue-600" />
              Create An Account?
            </label>
            <label className="flex items-center text-md gap-2">
              <input type="checkbox" className="text-blue-600" />
              Ship To A Different Address?
            </label>
            <div>
              <label className="block text-md font-medium mb-1">
                Oredr Notes<span className="text-2xl text-green-600">*</span>
              </label>
              <textarea
                className="w-ful border rounded-md px-4 py-3 min-h-[100px]"
                placeholder="Notes About Your Order, e.g Special Delivery Instructions"
              ></textarea>
            </div>
          </div>
        </div>
        {/* Order Summary */}
        <div className="bg-gray-50 p-8 rounded-xl border h-fit shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Your Order</h2>

          <div className="space-y-3 text-md">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between">
                <span>
                  {item.Name} X {item.quantity}
                </span>
                <span>₹{(item.Price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <hr className="my-10 pt-2" />
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Shipping</span>
              <span>₹{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Discount</span>
              <span className="text-green-600">- ₹{discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500 border-t pt-2">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
          {/* Payment Method */}
          <div className="pt-6 space-y-4">
            <PaymentOption id="bank" label="Direct Bank Transfer" />
            <PaymentOption id="check" label="Check Payments" />
            <PaymentOption id="cod" label="Cash On Delivery" />
            <PaymentOption id="razorpay" label="RazorPay" />
          </div>

          {/* Terms */}
          <div className="pt-6 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="text-blue-600 w-8 h-8"
                required
              />
              I Have Read And Agree To The Website{" "}
              <span className="text-blue-600 cursor-pointer underline">
                Term & Conditions
              </span>
            </label>
          </div>
          <div className="pt-4">
            {" "}
            <button className="mt-6 w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-md transition">
              Place Your Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
