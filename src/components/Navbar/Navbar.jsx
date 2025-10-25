import React, { useEffect, useRef, useState } from "react";
import {
  FaBolt,
  FaUserCircle,
  FaGlobeAmericas,
  FaSearch,
  FaRegHeart,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { LuMenu, LuPhone, LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currOpen, setCurrOpen] = useState(false);

  // Dropdown options (picked option A for both as agreed)
  const languages = ["English", "Spanish", "French"];
  const currencies = ["USD", "EUR", "INR"];

  const Categories = [
    ["SmartPhone", "📱"],
    ["Laptop", "💻"],
    ["Camera", "📷"],
    ["HeadPhones", "🎧"],
    ["PC Gaming", "🎮"],
    ["Tablets", "📱"],
    ["Television", "📺"],
  ];

  // refs for outside click handling
  const langRef = useRef(null);
  const currRef = useRef(null);
  const catRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
      if (currRef.current && !currRef.current.contains(e.target)) {
        setCurrOpen(false);
      }
      if (catRef.current && !catRef.current.contains(e.target)) {
        setCatOpen(false);
      }
      // do not force-close mobile menu here (user toggles)
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  // helper to toggle one dropdown and close the other
  const toggleLang = () => {
    setLangOpen((s) => !s);
    setCurrOpen(false);
  };
  const toggleCurr = () => {
    setCurrOpen((s) => !s);
    setLangOpen(false);
  };

  // For accessible keyboard handling (Enter / Space)
  const handleKeyToggle = (fn) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fn();
    }
  };

  return (
    <>
      {/* TOP NAV */}
      <nav className="w-full bg-black text-white text-xs md:text-sm py-3 px-4 md:px-[12%] flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-6">
          {/* Language Dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={toggleLang}
              onKeyDown={handleKeyToggle(toggleLang)}
              aria-expanded={langOpen}
              className="flex items-center gap-1 hover:text-gray-200 focus:outline-none"
            >
              <span className="">Lang</span>
              <span className="text-yellow-400 ml-1 text-lg">▼</span>
            </button>

            {langOpen && (
              <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md p-2 flex flex-col gap-1 z-50 min-w-[120px]">
                {languages.map((l) => (
                  <button
                    key={l}
                    className="text-left px-3 py-1 hover:bg-gray-100 rounded"
                    onClick={() => {
                      // Placeholder: you can handle selection (e.g., set locale)
                      console.log("Selected language:", l);
                      setLangOpen(false);
                    }}
                  >
                    {l}
                  </button>
                ))}
              </ul>
            )}
          </div>

          {/* Currency Dropdown */}
          <div ref={currRef} className="relative">
            <button
              onClick={toggleCurr}
              onKeyDown={handleKeyToggle(toggleCurr)}
              aria-expanded={currOpen}
              className="flex items-center gap-1 hover:text-gray-200 focus:outline-none"
            >
              <span className="">USD</span>
              <span className="text-yellow-400 ml-1 text-lg">▼</span>
            </button>

            {currOpen && (
              <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md p-2 flex flex-col gap-1 z-50 min-w-[120px]">
                {currencies.map((c) => (
                  <button
                    key={c}
                    className="text-left px-3 py-1 hover:bg-gray-100 rounded"
                    onClick={() => {
                      // Placeholder: handle currency selection
                      console.log("Selected currency:", c);
                      setCurrOpen(false);
                    }}
                  >
                    {c}
                  </button>
                ))}
              </ul>
            )}
          </div>

          {/* Top info (hidden on small) */}
          <p className="hidden lg:inline">Free Shipping On All Orders over ₹100</p>
        </div>

        {/* RIGHT SECTION */}
        <ul className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
          <li className="hidden sm:flex items-center gap-1">
            <FaBolt className="text-yellow-400" />
            <span>Flash Sale</span>
          </li>
          <li className="flex items-center gap-1 hover:text-amber-200">
            <FaUserCircle className="text-yellow-400" />
            <span className="hidden sm:inline">Account Login</span>
            <span className="inline sm:hidden">Login</span>
          </li>
          <li className="flex items-center gap-1 hover:text-amber-200">
            <FaGlobeAmericas className="text-yellow-400" />
            <span className="hidden sm:inline">Contact</span>
          </li>
        </ul>
      </nav>

      {/* MIDDLE NAV */}
      <div className="middle-nav w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-[12%] py-4 gap-4 md:gap-10">
        {/* Logo */}
        <div className="w-full md:w-1/5 flex justify-center md:justify-start">
          <Link to="/" className="flex items-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              Buy<span className="text-yellow-500">_Mart</span>
            </h2>
          </Link>
        </div>

        {/* Search */}
        <div className="w-full md:w-1/2 flex items-center h-12 md:h-14 border-2 md:border-4 border-yellow-500 rounded-md overflow-hidden">
          <select className="bg-gray-100 font-semibold p-2 w-1/3 md:w-1/4 border-none outline-none text-sm">
            <option>All</option>
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
            className="w-full px-3 py-2 outline-none font-medium bg-gray-100 text-sm"
          />
          <button className="bg-yellow-500 text-white px-4 md:px-5 font-bold uppercase h-full">
            <FaSearch className="text-lg md:text-xl" />
          </button>
        </div>

        {/* Help & Icons */}
        <div className="w-full md:w-1/3 flex justify-between md:justify-end gap-3 md:gap-5 items-center">
          <div className="hidden sm:flex gap-2 items-center">
            <LuPhone className="text-2xl md:text-3xl text-gray-500" />
            <div className="flex flex-col text-xs md:text-sm">
              <span className="text-gray-500 font-bold">Need</span>
              <span className="text-yellow-500 font-bold">Help?</span>
            </div>
          </div>

          <Link to="/wishlist" className="flex gap-1 md:gap-2 items-center">
            <FaRegHeart className="text-2xl text-gray-500" />
            <div className="hidden md:flex flex-col text-xs">
              <span className="font-bold text-gray-500">My</span>
              <span className="font-bold text-yellow-500">Wishlist</span>
            </div>
          </Link>

          <Link to="/cart" className="flex gap-1 md:gap-2 items-center">
            <LuShoppingCart className="text-2xl text-gray-500" />
            <div className="hidden md:flex flex-col text-xs">
              <span className="font-bold text-gray-500">My</span>
              <span className="font-bold text-yellow-500">Cart</span>
            </div>
          </Link>

          <button
            onClick={() => setMenuOpen((s) => !s)}
            className="text-2xl md:hidden text-gray-700"
            aria-label="Toggle menu"
            ref={mobileMenuRef}
          >
            {menuOpen ? <RxCross2 /> : <LuMenu />}
          </button>
        </div>
      </div>

      {/* BOTTOM NAV (Desktop) */}
      <div className="hidden md:flex w-full px-[12%] py-6 justify-between items-center gap-6">
        {/* Shop Categories */}
        <div className="relative w-1/5" ref={catRef}>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setCatOpen((s) => !s);
              // close other dropdowns
              setLangOpen(false);
              setCurrOpen(false);
            }}
            onKeyDown={handleKeyToggle(() => setCatOpen((s) => !s))}
            role="button"
            tabIndex={0}
          >
            <LuMenu className="text-xl" />
            <span className="font-bold">Shop Categories</span>
          </div>

          {catOpen && (
            <ul className="absolute top-full left-0 bg-white text-black shadow-md overflow-hidden mt-2 w-[220px] z-40 rounded">
              {Categories.map(([label, icon], i) => (
                <a
                  href="#"
                  key={i}
                  className="flex items-center gap-3 px-4 py-2 border-b last:border-none hover:bg-gray-100"
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </a>
              ))}
            </ul>
          )}
        </div>

        {/* Nav Menu */}
        <ul className="flex gap-8 w-3/5 font-bold items-center">
          {["Home", "About", "Shop", "Blog", "Faqs", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-yellow-500 transition text-lg"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Today's deal (desktop only) */}
        <Link to="/wishlist" className="flex items-center gap-3">
          <FaRegHeart className="text-2xl text-gray-600" />
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm">Today's Deal</span>
            <span className="bg-red-600 text-white text-sm px-1.5 pt-1 pb-1 rounded-sm uppercase relative">
              hot
            </span>
          </div>
        </Link>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden w-full bg-white px-4 py-4 border-t shadow-sm flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            {["Home", "About", "Shop", "Blog", "Faqs", "Contact"].map(
              (item, index) => (
                <Link
                  key={index}
                  to={`/${item.toLowerCase()}`}
                  className="w-full text-left font-semibold py-2 border-b"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
          </div>

          {/* Mobile small controls - language & currency */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <div ref={langRef} className="relative">
                <button
                  onClick={toggleLang}
                  onKeyDown={handleKeyToggle(toggleLang)}
                  className="px-3 py-2 border rounded"
                >
                  Language
                </button>
                {langOpen && (
                  <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md p-2 flex flex-col gap-1 z-50">
                    {languages.map((l) => (
                      <button
                        key={l}
                        className="text-left px-3 py-1 hover:bg-gray-100 rounded"
                        onClick={() => {
                          console.log("Selected language:", l);
                          setLangOpen(false);
                        }}
                      >
                        {l}
                      </button>
                    ))}
                  </ul>
                )}
              </div>

              <div ref={currRef} className="relative">
                <button
                  onClick={toggleCurr}
                  onKeyDown={handleKeyToggle(toggleCurr)}
                  className="px-3 py-2 border rounded"
                >
                  Currency
                </button>
                {currOpen && (
                  <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md p-2 flex flex-col gap-1 z-50">
                    {currencies.map((c) => (
                      <button
                        key={c}
                        className="text-left px-3 py-1 hover:bg-gray-100 rounded"
                        onClick={() => {
                          console.log("Selected currency:", c);
                          setCurrOpen(false);
                        }}
                      >
                        {c}
                      </button>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/wishlist" className="px-3 py-2 border rounded">
                Wishlist
              </Link>
              <Link to="/cart" className="px-3 py-2 border rounded">
                Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
