import React from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaMoneyBill,
  FaTruck,
  FaUserShield,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-700 text-sm px-[8%] lg:px-[12%] pt-20 ">
        <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-4 gap-6 py-10">
          <div className="flex items-center gap-4">
            <FaTruck className="text-5xl text-yellow-500" />
            <p className="text-xl">
              <strong>FREE Delivery</strong> <br />
              free shipping on all order
            </p>
          </div>

          <div className="flex item-center gap-4">
            <FaMoneyBill className="text-5xl text-yellow-500" />
            <p className="xl">
              <strong>Returns</strong> <br /> Back guarantee under 7 days
            </p>
          </div>

          <div className="flex item-center gap-4">
            <FaMoneyBill className="text-5xl text-yellow-500" />
            <p className="xl">
              <strong>Support 24/7</strong> <br /> Support Online 24 Hours A Day
            </p>
          </div>

          <div className="flex item-center gap-4">
            <FaUserShield className="text-5xl text-yellow-500" />
            <p className="xl">
              <strong>Payments</strong> <br /> 100% Payment Security
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-20 border-t border-yellow-500">
          <div className="space-y-2">
            <a href="#">
              <h2 className="text-4xl font-bricolage text-black font-bold">
                Buy<span className="text-yellow-500">_Mart</span>
              </h2>
            </a>
            <p className="text-lg">Find A Location Nearest You.</p>
            <p className="text-lg">
              <a href="#" className="text-red-600 underline font-semibold">
                Our Stores
              </a>
            </p>
            <p className="text-lg mb-5 pb-3">buy_mart75@gmail.com</p>
            <div className="flex gap-3 text-xl mt-5 text-gray-600">
              <FaInstagram className="bg-pink-700 text-white hover:text-pink-700 hover:bg-amber-50 cursor-pointer transition w-8 h-8 rounded-lg flex items-center justify-center" />
              <FaFacebookF className="bg-blue-700 text-white hover:text-blue-700 hover:bg-amber-50 cursor-pointer transition w-8 h-8 flex items-center rounded-lg justify-center p-1" />
              <BsTwitterX className="bg-black text-white hover:text-black hover:bg-amber-50 cursor-pointer transition w-8 h-8 flex items-center rounded-lg justify-center p-1" />
              <FaWhatsapp
                tterX
                className="bg-green-600 text-white hover:text-green-700 hover:bg-amber-50 cursor-pointer transition w-8 h-8 flex items-center rounded-lg justify-center p-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-3xl mb-2">About Us</h3>
            {[
              "About Us",
              "News & Blog",
              "Brands",
              "Press Center",
              "Advertising",
              "Investors",
            ].map((link, i) => (
              <p key={i} className="">
                <a href="#" className="text-lg hover:text-red-500">
                  {link}
                </a>
              </p>
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-3xl mb-2">Support</h3>
            {[
              "Support Center",
              "Manage",
              "Service",
              "Haul Away",
              "Security Center",
              "Contact",
            ].map((link, i) => (
              <p key={i}>
                <a href="#" className="text-lg hover:text-red-500">
                  {link}
                </a>
              </p>
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-3xl mb-2">Orders</h3>
            {[
              "Check Order",
              "Delivery & Pickup",
              "Returns",
              "Exchanges",
              "Developers",
              "Gift",
              "Cards",
            ].map((link, i) => (
              <p key={i}>
                <a href="#" className="text-lg hover:text-red-500">
                  {link}
                </a>
              </p>
            ))}
          </div>
        </div>

        <p className="text-center text-xl text-gray-600 border-t border-yellow-500 py-5">
          2025. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
