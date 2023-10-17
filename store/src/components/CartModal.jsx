import React, { useEffect } from "react";
import "../css/cartModal.css";
import { BsCheckCircle } from "react-icons/bs";

function CartModal({ showModal, setShowModal }) {
  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    }
  }, [showModal, setShowModal]);

  return (
    <div className={`cart-modal ${showModal ? "show" : ""}`}>
      added to cart <BsCheckCircle className="check-icon" />
      <div className="triangle"></div>
    </div>
  );
}

export default CartModal;
