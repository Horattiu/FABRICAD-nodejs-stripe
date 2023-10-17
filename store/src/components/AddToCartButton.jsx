import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import "../css/addToCart.css";
import CartModal from "./CartModal";

function AddToCartButton({ productId, selectedQuantity, selectedColor }) {
  const cart = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    cart.addOneToCart(productId, selectedQuantity, selectedColor);
    setShowModal(true);
  };

  const productQuantity = cart.getProductQuantity(productId);

  return (
    <div>
      <button className="add-btn" onClick={handleAddToCart}>
        {productQuantity > 0 ? `Add to Cart` : "Add to Cart"}
      </button>
      <CartModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default AddToCartButton;
