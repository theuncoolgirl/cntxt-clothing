import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  CartTotal,
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
} from './checkout.styles';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectCartTotal);

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
