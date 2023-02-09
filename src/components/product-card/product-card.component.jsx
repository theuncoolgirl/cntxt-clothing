import { useDispatch } from 'react-redux';

import Button, { BUTTON_TYPES } from '../button/button.component';

import { addItemToCart } from '../../store/cart/cart.reducer';

import {
  ProductCardContainer,
  ProductPrice,
  ProductName,
  ProductFooter,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = product;

  const addItemHandler = () => dispatch(addItemToCart(product));

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
