import { useContext } from 'react';
import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartContents } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartContents && cartContents.map((product) => <div></div>)}
      </div>
      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
