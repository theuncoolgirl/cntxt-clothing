import { createContext, useEffect, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

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

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  const { cartCount, cartItems, cartTotalPrice } = payload;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartCount,
        cartItems,
        cartTotalPrice,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  cartCount: 0,
  cartItems: [],
  cartTotalPrice: 0,
  isCartOpen: false,
};

export const CartProvider = ({ children }) => {
  const [{ cartCount, cartItems, cartTotalPrice, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  };

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = countCartItems(newCartItems);
    const newCartTotalPrice = addCartTotal(newCartItems);
    const payload = {
      cartCount: newCartCount,
      cartItems: newCartItems,
      cartTotalPrice: newCartTotalPrice,
    };
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };

  useEffect(() => {
    updateCartItemsReducer(cartItems);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const decrementItemQuantity = (productToDecrement) => {
    const newCartItems = decrementQuantity(cartItems, productToDecrement);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (productIdToRemove) => {
    const newCartItems = clearCartItem(cartItems, productIdToRemove);
    updateCartItemsReducer(newCartItems);
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
