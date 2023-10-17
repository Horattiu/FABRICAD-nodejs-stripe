import React from "react";
import "../css/customModal.css";
import { FiMail } from "react-icons/fi";

function CustomModal({ onClose }) {
  return (
    <div className="custom-modal">
      <span className="close-button" onClick={onClose}>
        X
      </span>
      <p >
        For custom requirements, contact us at fabricad@gmail.com{" "}
        <FiMail className="mail-icon" />
      </p>
    </div>
  );
}

export default CustomModal;
