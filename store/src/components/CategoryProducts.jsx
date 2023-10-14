import React from "react";
import { useParams } from "react-router-dom";
import { productsArray } from "../ProductsStore";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";

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
        <h2> {category} category</h2>
        <div className="products">
          {categoryProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryProducts;
