import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../ProductsStore";
import "../css/cartProduct.css";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <div className="product-card-container">
        <div className="title-container">
          <h3>{productData.title}</h3>
        </div>
        <div className="quantity-container">
          <p>{quantity} total</p>
        </div>
        <div className="total-containerr">
          <p>${(quantity * productData.price).toFixed(2)}</p>
        </div>
        <button
          className="remove-button"
          onClick={() => cart.deleteFromCart(id)}
        >
          Remove
        </button>
        {/* <hr></hr> */}
      </div>
    </>
  );
}

export default CartProduct;
