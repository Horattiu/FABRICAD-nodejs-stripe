// import { Card, Button, Form, Row, Col } from "react-bootstrap";
// import { CartContext } from "../CartContext";
// import { useContext } from "react";

// function ProductCard(props) {
//   //props.product is the prduct we are selling
//   const product = props.product;
//   const cart = useContext(CartContext);
//   const productQuantity = cart.getProductQuantity(product.id);
//   console.log(cart.items);
//   return (
//     <Card>
//       <Card.Body>
//         <Card.Title>{product.title}</Card.Title>
//         <Card.Text>${product.price}</Card.Text>
//         {productQuantity > 0 ? (
//           <>
//             <Form as={Row}>
//               <Form.Label column="true" sm="6">
//                 In Cart: {productQuantity}
//               </Form.Label>
//               <Col sm="6">
//                 <Button
//                   onClick={() => cart.addOneToCart(product.id)}
//                   sm="6"
//                   className="mx-2"
//                 >
//                   +
//                 </Button>
//                 <Button
//                   onClick={() => cart.removeOneFromCart(product.id)}
//                   sm="6"
//                   className="mx-2"
//                 >
//                   -
//                 </Button>
//               </Col>
//             </Form>
//             <Button
//               variant="danger"
//               onClick={() => cart.deleteFromCart(product.id)}
//               className="my-2"
//             >
//               Remove from cart
//             </Button>
//           </>
//         ) : (
//           <Button
//             variant="primary"
//             onClick={() => cart.addOneToCart(product.id)}
//           >
//             Add to cart
//           </Button>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }

// export default ProductCard;

import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import "./productCard.css"; // Import your custom CSS file for styling

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);

  return (
    <div className="product-card">
      <div className="card-body">
        <h2 className="title">{product.title}</h2>
        <p className="card-price">${product.price}</p>
        {productQuantity > 0 ? (
          <>
            <div className="form-row">
              <label className="form-label" htmlFor="cart-quantity">
                In Cart: {productQuantity}
              </label>
              <div className="quantity-buttons">
                <button
                  onClick={() => cart.addOneToCart(product.id)}
                  className="quantity-btn"
                >
                  +
                </button>
                <button
                  onClick={() => cart.removeOneFromCart(product.id)}
                  className="quantity-btn"
                >
                  -
                </button>
              </div>
            </div>
            <button
              className="remove-btn"
              onClick={() => cart.deleteFromCart(product.id)}
            >
              Remove from cart
            </button>
          </>
        ) : (
          <button
            className="add-btn"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
