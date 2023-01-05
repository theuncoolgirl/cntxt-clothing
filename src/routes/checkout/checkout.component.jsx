import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../context/cart.context';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems &&
            cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)}
        </tbody>
      </table>
    </div>
  );
};

export default Checkout;
