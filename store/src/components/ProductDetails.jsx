import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductData } from "../ProductsStore";
import ThreeModel from "./ThreeModel";
import "../css/productDetails.css";
import AddToCartButton from "./AddToCartButton";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/imageStack.css";
import CustomModal from "./CustomModal";

import ImageStack from "./ImageStack";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("normal");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  useEffect(() => {
    const fetchedProduct = getProductData(productId);
    // Set the product in state
    setProduct(fetchedProduct);
  }, [productId]);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const openCustomModal = () => {
    setIsCustomModalOpen(true);
  };

  const closeCustomModal = () => {
    setIsCustomModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("custom-modal-overlay")) {
      closeCustomModal();
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const incrementQuantity = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  const decrementQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className=" details-container">
        <ImageStack images={[product.imageUrl, ...product.moreImages]} />

        <div className="product-details">
          <h2 className="title">{product.title}</h2>

          <div className="material-icons">
            <img
              className="color"
              // className={`color ${selectedColor === "oak" ? "selected" : ""}`}
              src="/icons/variant.jpg"
              alt=""
              onClick={() => handleColorSelection("normal")}
            />
            <img
              className="color"
              // className={`color ${
              //   selectedColor === "red oak" ? "selected" : ""
              // }`}
              src="/icons/variant2.jpg"
              alt=""
              onClick={() => handleColorSelection("red oak")}
            />
            <p>color: {selectedColor}</p>
          </div>
          <p className="product-price">${product.price}</p>
          <div className="size-container">
            <p className="product-size">size:{product.size}</p>
            <p className="product-custom" onClick={openCustomModal}>
              custom
            </p>
          </div>
          {isCustomModalOpen && (
            <div className="custom-modal-overlay" onClick={handleOverlayClick}>
              <CustomModal onClose={closeCustomModal} />
            </div>
          )}
          <div className="quantity-selector">
            <label>quantity:</label>
            <button onClick={decrementQuantity}>-</button>
            <div className="quantity-container">
              <span>{selectedQuantity}</span>
            </div>
            <button onClick={incrementQuantity}>+</button>
          </div>
          <AddToCartButton
            productId={product.id}
            selectedColor={selectedColor}
            selectedQuantity={selectedQuantity}
          />
        </div>
      </div>
      {/* <div className="span-container">
        <span className="scroll">scroll to see 3D Model</span>
      </div> */}

      <div className="model-box">
        <div className="model-container">
          <div className="model-box">
            <ThreeModel
              modelPath={product.model}
              scale={5}
              texture={product.texturePath}
              // position={{ x: 0, y: 0, z: 0 }}
            />
          </div>
        </div>
        <div className="empty-box"></div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
