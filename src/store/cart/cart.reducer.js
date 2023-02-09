import { createSlice } from '@reduxjs/toolkit';
import {
  addCartItem,
  clearCartItem,
  decrementQuantity,
} from '../../utils/cart/cart.utils';

const options = {
  name: 'cart',
  initialState: {
    cartItems: [],
    isCartOpen: false,
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems = addCartItem(state.cartItems, action.payload);
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
  clearItemFromCart,
  decrementItemQuantity,
  setCartItems,
  setIsCartOpen,
} = cartSlice.actions;
export default cartSlice.reducer;
