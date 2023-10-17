import { createContext, useState, useMemo } from "react";
import { productsArray, getProductData } from "./ProductsStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  // function addOneToCart(id, quantityToAdd) {
  //   const quantity = getProductQuantity(id, quantity);

  //   if (quantity === 0) {
  //     // product is not in cart
  //     setCartProducts([
  //       ...cartProducts,
  //       {
  //         id: id,
  //         quantity: quantityToAdd,
  //       },
  //     ]);
  //   } else {
  //     // product is in cart
  //     // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
  //     setCartProducts(
  //       cartProducts.map(
  //         (product) =>
  //           product.id === id // if condition
  //             ? { ...product, quantity: product.quantity + quantityToAdd } // if statement is true
  //             : product // if statement is false
  //       )
  //     );
  //   }
  // }
  function addOneToCart(id, quantityToAdd, selectedColor) {
    const existingProduct = cartProducts.find((product) => product.id === id);

    if (!existingProduct) {
      // Product is not in the cart
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: quantityToAdd,
          color: selectedColor,
        },
      ]);
    } else {
      // Product is already in the cart, update its quantity
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + quantityToAdd }
            : product
        )
      );
    }
  }
  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, quantity: product.quantity - 1 } // if statement is true
              : product // if statement is false
        )
      );
    }
  }

  function deleteFromCart(id) {
    // [] if an object meets a condition, add the object to array
    // [product1, product2, product3]
    // [product1, product3]
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
