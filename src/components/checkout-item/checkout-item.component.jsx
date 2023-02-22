import { useDispatch } from 'react-redux';
import {
  addItemToCart,
  clearItemFromCart,
  decrementItemQuantity,
} from '../../store/cart/cart.slice';
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from './checkout-item.styles';

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, imageUrl, name, price, quantity } = item;

  const clearItemHandler = () => dispatch(clearItemFromCart(id));
  const removeItemHandler = () => dispatch(decrementItemQuantity(item));
  const addItemHandler = () => dispatch(addItemToCart(item));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>${price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
