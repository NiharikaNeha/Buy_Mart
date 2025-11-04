import React, { useEffect, useState } from 'react'
import Flags from '../../Flag.json'

const Checkout = () => {
  const [cart, setCart] = useState([])
  const [selectedPayment, setSelectedPayment] = useState("bank")
  const [discount, setDiscount] = useState(100)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [countryOpen, setCountryOpen] = useState(false)

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || []
    const updatedCart = storedCart.map(item => ({
      ...item,
      Price: parseFloat(item.Price),
      quantity: item.quantity || 1
    }))
    setCart(updatedCart)
  }, [])

  const subtotal = cart.reduce((acc, item) => acc + item.Price * item.quantity, 0)
  const shipping = cart.length ? 80 : 0
  const total = subtotal + shipping - discount

  const PaymentOption = ({ id, label }) => (
    <label
      htmlFor={id}
      className={`flex items-start gap-3 p-4 border rounded-md cursor-pointer transition-all ${
        selectedPayment === id ? 'border-yellow-400 bg-yellow-50 shadow-sm' : 'border-gray-300'
      }`}
    >
      <input
        type="radio"
        id={id}
        name="payment"
        value={id}
        checked={selectedPayment === id}
        onChange={() => setSelectedPayment(id)}
        className="mt-1 w-4 h-4 text-yellow-500 accent-yellow-400"
      />
      <span>{label}</span>
    </label>
  )

  return (
    <div className='min-h-screen px-[8%] lg:px-[12%] py-14 bg-white text-gray-800'>
      <h1 className='text-5xl font-bricolage font-semibold text-center mb-10'>Checkout</h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 pt-4'>
        {/* Billing Section */}
        <div className='lg:col-span-2 bg-white p-8 border rounded-xl shadow-sm'>
          <h2 className='text-xl font-semibold mb-6'>Billing Details</h2>
          <form className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <label className='block text-sm font-medium mb-1'>
                First Name <span className='text-2xl text-green-600'>*</span>
              </label>
              <input
                type="text"
                placeholder='Enter Your First Name'
                className='w-full border rounded-md px-4 py-2'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>
                Last Name <span className='text-2xl text-green-600'>*</span>
              </label>
              <input
                type="text"
                placeholder='Enter Your Last Name'
                className='w-full border rounded-md px-4 py-2'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Company Name (Optional)</label>
              <input
                type="text"
                placeholder='Enter Your Company Name'
                className='w-full border rounded-md px-4 py-2'
              />
            </div>

            {/* Country Dropdown with Flags */}
            <div className="md:col-span-2 relative">
              <label className='block text-sm font-medium mb-1'>
                Country <span className='text-2xl text-green-600'>*</span>
              </label>

              {/* Selected Country Button */}
              <button
                type="button"
                onClick={() => setCountryOpen(!countryOpen)}
                className="w-full flex items-center justify-between border rounded-md px-4 py-2 bg-white"
              >
                {selectedCountry ? (
                  <span className="flex items-center gap-2">
                    <img src={selectedCountry.image} alt="" className="w-5 h-4 object-cover rounded-sm" />
                    {selectedCountry.country}
                  </span>
                ) : (
                  "Select Country"
                )}
                <span className="text-gray-500 ml-2">▼</span>
              </button>

              {/* Dropdown Menu */}
              {countryOpen && (
                <ul className="absolute z-10 w-full bg-white border rounded-md shadow-md mt-2 max-h-60 overflow-auto">
                  {Flags.Data.map((flag, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedCountry(flag)
                        setCountryOpen(false)
                      }}
                    >
                      <img src={flag.image} alt={flag.country} className="w-5 h-4 object-cover rounded-sm" />
                      {flag.country}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout
