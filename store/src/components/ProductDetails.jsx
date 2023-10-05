import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductData } from "../ProductsStore";
import ThreeModel from "./ThreeModel";
import "../css/productDetails.css";
import AddToCartButton from "./AddToCartButton";
import Navbar from "./Navbar";
import "../css/imageStack.css";

import ImageStack from "./ImageStack";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(""); // Track the selected color

  useEffect(() => {
    // Fetch the product data based on the productId from the URL
    const fetchedProduct = getProductData(productId);

    // Set the product in state
    setProduct(fetchedProduct);
  }, [productId]);

  const handleColorSelection = (color) => {
    // Update the selected color when a color is clicked
    setSelectedColor(color);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className=" details-container">
        {/* <div className="img-container">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="shop-img"
          />
        </div> */}
        {/* <div className="img-container"> */}
        <ImageStack images={[product.imageUrl, ...product.moreImages]} />
        {/* </div> */}

        <div className="product-details">
          <h2 className="title">{product.title}</h2>
          {/* <div className="material-icons">
            <img className="color" src="/icons/variant.jpg" alt="" />
            <img className="color" src="/icons/variant2.jpg" alt="" />
          </div> */}

          <div className="material-icons">
            <img
              className={`color ${selectedColor === "oak" ? "selected" : ""}`}
              src="/icons/variant.jpg"
              alt=""
              onClick={() => handleColorSelection("oak")}
            />
            <img
              className={`color ${
                selectedColor === "red oak" ? "selected" : ""
              }`}
              src="/icons/variant2.jpg"
              alt=""
              onClick={() => handleColorSelection("red oak")}
            />
          </div>
          <p className="product-price">${product.price}</p>

          <div className="size-container">
            <p className="product-size">size:{product.size}</p>
            <p className="product-custom">custom</p>
          </div>

          <AddToCartButton productId={product.id} />
        </div>
      </div>
      <div className="span-container">
        <span className="scroll">scroll to see 3D Model</span>
      </div>
      <div className="model-box">
        <ThreeModel
          modelPath={product.model}
          scale={5}
          texture={product.texturePath}
          // position={{ x: 0, y: 0, z: 0 }}
        />
      </div>
    </>
  );
}

export default ProductDetails;
