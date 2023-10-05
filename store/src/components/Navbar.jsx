import React, { useState, useContext, useEffect } from "react";
import "../css/navbar.css";
import CartProduct from "./CartProduct";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";

function NavbarComponent() {
  const [mobile, setMobile] = useState(false);

  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  // Listen for the 'Esc' key press to close the modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        handleClose();
      }
    };

    if (show) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [show]);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          fabricad
        </Link>
        <ul
          className={mobile ? "nav-links-mobile" : "navbar-container"}
          // onClick={() => setMobile(true)}
        >
          <li className="work">
            <Link to="/work" className="work">
              WORK
            </Link>
          </li>

          <li className="about" onClick={() => setMobile(false)}>
            <span>ABOUT</span>
          </li>
          <div className="navbar-button" onClick={handleShow}>
            <LuShoppingCart className="cart-icon" /> ({productsCount}) items
          </div>
        </ul>
        <HiMenu className="menu" onClick={() => setMobile(!mobile)} />
      </nav>

      {show && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">Shopping Cart</div>
              <div className="modal-close" onClick={handleClose}>
                &#x2715;
              </div>
            </div>
            <div className="modal-body">
              {productsCount > 0 ? (
                <>
                  <p>Items in your cart:</p>
                  {cart.items.map((currentProduct, idx) => (
                    <CartProduct
                      key={idx}
                      id={currentProduct.id}
                      quantity={currentProduct.quantity}
                    ></CartProduct>
                  ))}
                  <h1 className="total">
                    Total: {cart.getTotalCost().toFixed(2)}
                  </h1>

                  <button className="modal-button" onClick={checkout}>
                    Checkout
                  </button>
                </>
              ) : (
                <div>
                  <h1>There are no items in your cart!</h1>
                  <img className="empty" src="/Gallery/empty.png" alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavbarComponent;

///------------------------------------------------------------------
///------------------------------------------------------------------
///------------------------------------------------------------------

// import React, { useState, useContext, useEffect } from "react";
// import "../css/navbar.css";
// import CartProduct from "./CartProduct";
// import { CartContext } from "../CartContext";
// import { Link } from "react-router-dom";
// import { HiMenu } from "react-icons/hi";
// import { LuShoppingCart } from "react-icons/lu";

// function NavbarComponent() {
//   const cart = useContext(CartContext);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const checkout = async () => {
//     await fetch("http://localhost:4000/checkout", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ items: cart.items }),
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((response) => {
//         if (response.url) {
//           window.location.assign(response.url); // Forwarding user to Stripe
//         }
//       });
//   };

//   const productsCount = cart.items.reduce(
//     (sum, product) => sum + product.quantity,
//     0
//   );

//   // Listen for the 'Esc' key press to close the modal
//   useEffect(() => {
//     const handleEsc = (event) => {
//       if (event.keyCode === 27) {
//         handleClose();
//       }
//     };

//     if (show) {
//       window.addEventListener("keydown", handleEsc);
//     }

//     return () => {
//       window.removeEventListener("keydown", handleEsc);
//     };
//   }, [show]);

//   return (
//     <>
//       <nav className="navbar navbar-mobile">
//         <Link to="/" className="nav-logo">
//           fabricad
//         </Link>
//         <ul className="navbar-container container-mobile">
//           <li className="work">
//             <Link to="/work" className="work">
//               WORK
//             </Link>
//           </li>

//           <li className="about">
//             <span>ABOUT</span>
//           </li>
//           <div className="navbar-button" onClick={handleShow}>
//             <LuShoppingCart className="cart-icon" /> ({productsCount}) items
//           </div>
//         </ul>
//         <HiMenu className="menu" />
//       </nav>

//       {show && (
//         <div className="modal">
//           <div className="modal-content">
//             <div className="modal-header">
//               <div className="modal-title">Shopping Cart</div>
//               <div className="modal-close" onClick={handleClose}>
//                 &#x2715;
//               </div>
//             </div>
//             <div className="modal-body">
//               {productsCount > 0 ? (
//                 <>
//                   <p>Items in your cart:</p>
//                   {cart.items.map((currentProduct, idx) => (
//                     <CartProduct
//                       key={idx}
//                       id={currentProduct.id}
//                       quantity={currentProduct.quantity}
//                     ></CartProduct>
//                   ))}
//                   <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

//                   <button className="modal-button" onClick={checkout}>
//                     Purchase items!
//                   </button>
//                 </>
//               ) : (
//                 <h1>There are no items in your cart!</h1>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default NavbarComponent;

///------------------------------------------------------------------
///------------------------------------------------------------------
///------------------------------------------------------------------
