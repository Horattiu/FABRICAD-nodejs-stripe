

import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../css/store.css";
import AOS from "aos";

import { productsArray } from "../ProductsStore";

function Store() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <>
      <h1 id="title" className="products-title">
        Products
      </h1>
      <div data-aos="fade-up" className="store-container">
        {productsArray.map((product, idx) => (
          <div className="cardd" key={idx}>
            <ProductCard
              product={product}
              model={product.model}
              key={product.id}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Store;
