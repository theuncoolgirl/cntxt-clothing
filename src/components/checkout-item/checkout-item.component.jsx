import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({ item }) => {
  const { removeItemFromCart } = useContext(CartContext);

  const { id, imageUrl, name, price, quantity } = item;

  const removeCartItemHandler = () => removeItemFromCart(id);

  return (
    <tr>
      <td>
        <img src={imageUrl} alt={`${name}`} />
      </td>
      <td>{name}</td>
      <td>
        <span>{'< '}</span>
        {quantity}
        <span>{' >'}</span>
      </td>
      <td>${price}</td>
      <td>
        <span onClick={removeCartItemHandler}>X</span>
      </td>
    </tr>
  );
};

export default CheckoutItem;
