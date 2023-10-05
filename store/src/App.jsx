import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import { CartProvider } from "./CartContext";

import Work from "./components/Work";
import React from "react";
import { Canvas, extend, useThree } from "@react-three/fiber";
import ProductDetails from "./components/ProductDetails";
import { getProductData } from "./ProductsStore";
import { useState, useEffect } from "react";
// import { getProductData } from "./ProductsStore";

import Home from "./components/Home";

function App() {
  // const { productId } = useParams();
  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   // Fetch the product data based on the productId from the URL
  //   const fetchedProduct = getProductData(productId);

  //   // Set the product in state
  //   setProduct(fetchedProduct);
  // }, [productId]);

  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="cancel" element={<Cancel />} />
        <Route path="success" element={<Success />} />
        {/* <Route path="product-details" element={<ProductDetails />} /> */}
        <Route
          path="/product-details/:productId"
          element={<ProductDetails element={<ProductDetails />} />}
        />

        {/* <Route
          path="/product-details/:productId"
          component={<ProductDetails />}
        /> */}
      </Routes>
    </CartProvider>
  );
}

export default App;
