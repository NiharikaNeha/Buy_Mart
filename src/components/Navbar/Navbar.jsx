import React from "react";
import { FaBolt, FaUserCircle, FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
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
        <p className="hide">Free Shipping On All Orders over $100</p>
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

      {/* Middle Navbar */}
      <div className="middle-nav w-full flex justify-between items-center px-[5%] lg:px-[12%] py-6 gap-10"></div>
    </nav>
  );
};

export default TopNavbar;
