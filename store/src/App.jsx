import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import "./App.css";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import React from "react";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import Home from "./components/Home";
import CategoryProducts from "./components/CategoryProducts";
import Delivery from "./components/legal/Delivery";
import Contact from "./components/Contact";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="cancel" element={<Cancel />} />
        <Route path="success" element={<Success />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails element={<ProductDetails />} />}
        />
        <Route path="delivery" element={<Delivery />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
