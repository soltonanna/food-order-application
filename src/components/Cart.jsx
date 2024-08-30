import React, { useContext } from 'react';
import Modal from './UI/Modal';
import Button from './UI/Button';

import { currencyFormatter } from '../utils/formatting';

import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

import CartItem from './CartItem';

const Cart = () => {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price
    }, 0);

    function handleCloseCartModal() {
        userProgressCtx.hideCart();
    }
    function handleGoToCheckout() {
        userProgressCtx.showCheckout();
    }

    return (
        <Modal 
            className='cart' 
            open={userProgressCtx.progress === 'cart'} 
            onClose={userProgressCtx.progress === 'cart' ? handleCloseCartModal : null}
        >
            <h2>Your Cart</h2>
            <ul>
                {
                    cartCtx.items.map((item) => (
                        <CartItem 
                            key={item.id} 
                            name={item.name} 
                            quantity={item.quantity} 
                            price={item.price} 
                            onIncrease={() => cartCtx.addItem(item)}
                            onDecrease={() => cartCtx.removeItem(item.id)}
                        />
                    ))
                }
            </ul>
            <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
            <p className='modal-actions'>
                <Button textOnly onClick={handleCloseCartModal}> Close </Button>
                {cartCtx.items.length > 0 && <Button onClick={handleGoToCheckout}> Go to Checkout </Button>}
            </p>
        </Modal>
    );
}

export default Cart;