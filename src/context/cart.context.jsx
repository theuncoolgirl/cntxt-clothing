import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartContents: [],
  setCartContents: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartContents, setCartContents] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { cartContents, isCartOpen, setCartContents, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
