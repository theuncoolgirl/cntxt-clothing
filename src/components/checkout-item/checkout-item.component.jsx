import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
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
  const { addItemToCart, decrementItemQuantity, clearItemFromCart } =
    useContext(CartContext);

  const { id, imageUrl, name, price, quantity } = item;

  const clearItemHandler = () => clearItemFromCart(id);
  const removeItemHandler = () => decrementItemQuantity(item);
  const addItemHandler = () => addItemToCart(item);

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
