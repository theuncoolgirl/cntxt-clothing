export const addCartItem = (cartItems, productToAdd) => {
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

export const clearCartItem = (cartItems, productIdToClear) => {
  const newCartItems = [...cartItems];
  return newCartItems.filter((item) => item.id !== productIdToClear);
};

export const decrementQuantity = (cartItems, productToDecrement) => {
  if (productToDecrement.quantity <= 1) {
    return clearCartItem(cartItems, productToDecrement.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToDecrement.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
