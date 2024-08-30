import React, { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext)

  const totalCartItems = cartCtx.items.reduce((totalNumOfItems, item) => {
    return totalNumOfItems + item.quantity;
  }, 0);

  function handleShowCartModal() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
        <div id="title">
            <img src={logo} alt="Food Logo" />
            <h1>Food Order App</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCartModal}> Cart ({totalCartItems}) </Button>
        </nav>
    </header>
  );
}

export default Header;