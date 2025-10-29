import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Pages/Index.jsx";
import ProductDetails from "./components/Pages/ProductDetails.jsx";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
