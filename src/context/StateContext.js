import React, { useContext, createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  // function for increase quantity button on slug.js
  const incQty = () => {
    setQty((prev) => prev + 1);
  };
  // function for decrease quantity button on slug.js
  const decQty = () => {
    setQty((prev) => {
      if (prev - 1 < 1) return 1;
      return prev - 1;
    });
  };
  //function to add one or more selected product to cart and to check if a product is already existing in cart so as to increase only the product's quantity
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + quantity * product.price
    );
    setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity);
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return { ...cartProduct, quantity: cartProduct.quantity + quantity };
        }
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart.`);
  };
  // function to remove product from cart
  const onRemove = (product) => {
    const foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItem = cartItems.filter((item) => item._id !== product._id);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - product.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantity) => prevTotalQuantity - foundProduct.quantity
    );
    setCartItems(newCartItem);
  };
  // unassigned values to contain product to be reduced/increased on the cart page
  let index;
  let foundProduct;
  // function to reduce or increase the quantity of product on the cart page
  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((item) => item._id === id);
    const newCart = cartItems.filter((item) => item._id !== id);
    if (value === "inc") {
      setCartItems([
        ...newCart,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCart,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantity) => prevTotalQuantity - 1);
      }
    }
  };
  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        toggleCartItemQuantity,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
