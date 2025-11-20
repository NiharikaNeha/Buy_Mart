import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Index from "./components/Pages/Index.jsx";
import ProductDetails from "./components/Pages/ProductDetails.jsx";
import Wishlist from "./components/Pages/Wishlist.jsx";
import Cart from "./components/Pages/Cart.jsx";
import Checkout from "./components/Pages/Checkout.jsx";
import Footer from "./components/Footer/Footer.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scroll.scrollToTop({ duration: 100, smooth: true });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
