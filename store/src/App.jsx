import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import { CartProvider } from "./CartContext";

import Work from "./components/Work";
import React from "react";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="cancel" element={<Cancel />} />
        <Route path="success" element={<Success />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails element={<ProductDetails />} />}
        />
        {/* <Route path="product-details" element={<ProductDetails />} /> */}
      </Routes>
    </CartProvider>
  );
}

export default App;
