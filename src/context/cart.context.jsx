import { createContext, useEffect, useState } from 'react';

const addCartTotal = (cartItems) => {
  return cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );
};

const countCartItems = (cartItems) => {
  return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem =
    cartItems && cartItems.find((item) => item.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decrementQuantity = (cartItems, productToDecrement) => {
  if (productToDecrement.quantity <= 1) {
    return clearCartItem(cartItems, productToDecrement.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToDecrement.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productIdToClear) => {
  const newCartItems = [...cartItems];
  return newCartItems.filter((item) => item.id !== productIdToClear);
};

export const CartContext = createContext({
  addItemToCart: () => {},
  cartCount: 0,
  cartItems: [],
  cartTotalPrice: 0,
  clearItemFromCart: () => {},
  countCartItems: () => {},
  decrementItemQuantity: () => {},
  isCartOpen: false,
  setIsCartOpen: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const newCartCount = countCartItems(cartItems);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotalPrice = addCartTotal(cartItems);
    setCartTotalPrice(newCartTotalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decrementItemQuantity = (productToDecrement) => {
    setCartItems(decrementQuantity(cartItems, productToDecrement));
  };

  const clearItemFromCart = (productIdToRemove) => {
    setCartItems(clearCartItem(cartItems, productIdToRemove));
  };

  const value = {
    addItemToCart,
    cartCount,
    cartItems,
    cartTotalPrice,
    clearItemFromCart,
    countCartItems,
    decrementItemQuantity,
    isCartOpen,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
