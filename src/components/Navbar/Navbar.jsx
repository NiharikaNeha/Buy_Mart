import React, { useState } from "react";
import {
  FaBolt,
  FaUserCircle,
  FaGlobeAmericas,
  FaSearch,
  FaRegHeart,
} from "react-icons/fa";
import { LuMenu, LuPhone, LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [open, setOpen] = useState(false);

  const Categories = [
    ["SmartPhone", "📱"],
    ["Laptop", "💻"],
    ["Camera", "📷"],
    ["HeadPhones", "🎧"],
    ["PC Gaming", "🎮"],
    ["Tablets", "📱"],
    ["Television", "📺"],
  ];

  return (
    <>
      <nav className="w-full bg-black text-white text-sm py-3 px-[20%] lg:px-[12%] flex justify-between items-center">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-6">
          {/* Language Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer flex items-center hover:text-gray-200">
              Language <span className="text-yellow-400 ml-1 text-lg">▼</span>
            </span>
            <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md p-3 hidden group-hover:flex flex-col gap-2 z-50">
              <li className="cursor-pointer">English</li>
              <li className="cursor-pointer">Hindi</li>
            </ul>
          </div>

          {/* Currency Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer flex items-center hover:text-gray-200">
              USD <span className="text-yellow-400 ml-1 text-lg">▼</span>
            </span>
            <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md p-3 hidden group-hover:flex flex-col gap-2 z-50">
              <li className="hover:bg-gray-100 cursor-pointer">USD</li>
              <li className="hover:bg-gray-100 cursor-pointer">INR</li>
              <li className="hover:bg-gray-100 cursor-pointer">EUR</li>
            </ul>
          </div>

          {/* Info */}
          <p className="hide">Free Shipping On All Orders over ₹100</p>
        </div>

        {/* RIGHT SECTION */}
        <ul className="flex items-center gap-6">
          <li>
            <a className="flex items-center gap-1 cursor-pointer">
              <FaBolt className="inline-block text-yellow-400 text-lg" />
              Flash Sale
            </a>
          </li>
          <li>
            <a className="flex items-center gap-1 cursor-pointer hover:text-amber-200">
              <FaUserCircle className="inline-block text-yellow-400 text-lg" />
              Account Login
            </a>
          </li>
          <li>
            <Link className="flex items-center gap-1 cursor-pointer hover:text-amber-200">
              <FaGlobeAmericas className="inline-block text-yellow-400 text-lg" />
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Middle Navbar */}

      <div className="middle-nav w-full flex justify-between items-center px-[5%] lg:px-[12%] py-6 gap-10">
        <div className="w-1/5">
          <Link to="/">
            <h2 className="text-4xl font-bricolage text-black font-bold">
              Buy<span className="text-yellow-500">_Mart</span>
            </h2>
          </Link>
        </div>
        <div className="product-search flex items-center h-14 border-4 border-yellow-500 rounded-md w-1/2 overflow-hidden">
          <select className="bg-gray-100 font-semibold p-2 w-1/2 border-none outline-none">
            <option>All Categories</option>
            <option>Camera</option>
            <option>Accessories</option>
            <option>Camera & Lenses</option>
            <option>Drones</option>
            <option>Security Cameras</option>
            <option>Games</option>
          </select>
          <input
            type="text"
            placeholder="Search For Your Product"
            className="w-full px-3 py-2 outline-none font-medium bg-gray-100"
          />
          <button className="bg-yellow-500 text-white px-5 font-bold uppercase h-full">
            <FaSearch className="text-xl text-white" />
          </button>
        </div>
        <div className="get-help flex gap-5 items-center w-1/3 justify-end">
          <div className="flex gap-2 items-center">
            <span className="text-3xl text-gray-500">
              <LuPhone />
            </span>
            <div className="flex flex-col text-sm">
              <span className="text-gray-500 font-bold">Need</span>
              <span className="text-yellow-500 font-bold">Help?</span>
            </div>
          </div>
          <Link to="/wishlist" className="flex gap-2 items-center">
            <span className="text-3xl text-gray-500">
              <FaRegHeart />
            </span>
            <div className="flex flex-col text-sm">
              <span className="text-gray-500 font-bold">My</span>
              <span className="text-yellow-500 font-bold">Wishlist</span>
            </div>
          </Link>
          <Link to="/cart" className="flex gap-2 items-center">
            <span className="text-3xl text-gray-500">
              <LuShoppingCart />
            </span>
            <div className="flex flex-col text-sm">
              <span className="text-gray-500 font-bold">My</span>
              <span className="text-yellow-500 font-bold">Cart</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div
        className={`w-full px-[5%] lg:px-[12%] py-6 flex justify-between items-center gap-6 transition-all duration-500 ${
          menuOpen ? "h-auto" : ""
        }`}
      >
        <div className="relative w-1/5 hide">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">
                <LuMenu />
              </span>
              <span className="font-bold">Shop Categories</span>
            </div>
          </div>
          {open && (
            <ul className="absolute top-full left-0 bg-white shadow-md overflow-hidden mt-2 w-full z-40 transition-all duration-300">
              {Categories.map(([label, icon], i) => (
                <a href="#" key={i} className="flex items-center gap-3 px-4 py-2 border-b last:border-none hover:bg-gray-100">
                  <span>{icon}</span>
                  <span>{label}</span>
                </a>
              ))}
            </ul>
          )}
        </div>
        <ul className="flex"></ul>
      </div>
    </>
  );
};

export default Navbar;
