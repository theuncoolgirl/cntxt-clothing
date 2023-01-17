import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../context/cart.context';
import {
  CartTotal,
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
} from './checkout.styles';

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems &&
        cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)}
      <CartTotal>Total: ${cartTotalPrice}</CartTotal>
    </CheckoutContainer>
  );
};

export default Checkout;
