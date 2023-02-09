import { useDispatch, useSelector } from 'react-redux';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';
import { setIsCartOpen } from '../../store/cart/cart.reducer';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleCart = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
