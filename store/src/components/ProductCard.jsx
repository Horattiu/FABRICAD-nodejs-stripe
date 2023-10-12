import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../CartContext";
import "../css/productCard.css"; // Import your custom CSS file for styling
import { Canvas, extend, useThree, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // Import GLTFLoader
import ThreeModel from "./ThreeModel";
import ProductDetails from "./ProductDetails";
import AddToCartButton from "./AddToCartButton";

// ProductCard.jsx
function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);

  return (
    <div className="product-card">
      <div className="card-body">
        <Link to={`/product-details/${product.id}`}>
          <img
            src={product.imageUrl}
            alt={product.title}
            className="shop-img"
          />
        </Link>
        <h2 className="title">{product.title}</h2>
        <p className="card-price">${product.price}</p>
        {/* <p className="card-size">size: {product.size}</p> */}

        {/* <AddToCartButton productId={product.id} /> */}
        <Link to={`/product-details/${product.id}`}>
          {" "}
          {/* Add Details button with Link */}
          <button className="details-button">Details</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
