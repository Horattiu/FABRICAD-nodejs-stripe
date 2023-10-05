import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "../css/addToCart.css";

function AddToCartButton({ productId }) {
  const cart = useContext(CartContext);

  const handleAddToCart = () => {
    cart.addOneToCart(productId);
  };

  const productQuantity = cart.getProductQuantity(productId);

  return (
    <button className="add-btn" onClick={handleAddToCart}>
      {productQuantity > 0 ? `In Cart: ${productQuantity}` : "Add to Cart"}
    </button>
  );
}

export default AddToCartButton;
