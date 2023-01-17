import { useContext } from 'react';

import Button, { BUTTON_TYPES } from '../button/button.component';

import { CartContext } from '../../context/cart.context';

import {
  ProductCardContainer,
  ProductPrice,
  ProductName,
  ProductFooter,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addItemHandler = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>
      </ProductFooter>
      <Button buttonType={BUTTON_TYPES.inverted} onClick={addItemHandler}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
