import {
  CartItemContainer,
  ItemDetails,
  ItemImg,
  ItemName,
} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <ItemImg src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
