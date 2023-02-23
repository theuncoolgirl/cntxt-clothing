import { createSlice } from '@reduxjs/toolkit';
import {
  addCartItem,
  clearCartItem,
  decrementQuantity,
} from '../../utils/cart/cart.utils';

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

const options = {
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
    clearItemFromCart: (state, action) => {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
    decrementItemQuantity: (state, action) => {
      state.cartItems = decrementQuantity(state.cartItems, action.payload);
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
  },
};

const cartSlice = createSlice(options);

export const {
  addItemToCart,
  clearCart,
  clearItemFromCart,
  decrementItemQuantity,
  setCartItems,
  setIsCartOpen,
} = cartSlice.actions;
export default cartSlice.reducer;
