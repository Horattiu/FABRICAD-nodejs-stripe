import React from "react";
import { useParams } from "react-router-dom";
import { productsArray } from "../ProductsStore";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/category.css";

function CategoryProducts() {
  const { category } = useParams();

  // Filter products based on the category
  const categoryProducts = productsArray.filter(
    (product) => product.category === category
  );

  return (
    <>
      <Navbar />
      <div>
        <div className="category-title">
          <h2> {category} </h2>
        </div>
        <div className="category-container">
          <div className="products">
            {categoryProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CategoryProducts;
