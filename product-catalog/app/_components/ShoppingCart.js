import React from 'react';
import { Button } from 'react-bootstrap';
import styles from '../styles/shoppingCart.module.css';

const ShoppingCart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.shoppingCart}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className={styles.cartItems}>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.cartItemDetails}>
                <span className={styles.cartItemName}>{item.name} </span>
                <span>Ksh {item.price.toFixed(2)}</span>
              </div>
              <div className={styles.cartItemActions}>
                <Button onClick={() => removeFromCart(item.id)} variant='danger'>Remove</Button>
              </div>
            </div>
          ))}
        </div>
      )}
      <h3>Total: Ksh{total.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;
