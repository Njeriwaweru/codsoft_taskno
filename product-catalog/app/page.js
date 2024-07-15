"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import ProductCatalog from "./_components/ProductCatalog";
import ShoppingCart from "./_components/ShoppingCart";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";
import Header from "./_components/Header";

const sampleProducts = [
  { id: 1, name: 'Fear of god', price: 4000, image: '/product1.jpg' },
  { id: 2, name: 'AirMax', price: 3500, image: '/product2.jpg' },
  { id: 3, name: 'AirMax', price: 3500, image: '/product3.jpg' },
  { id: 4, name: 'Dior', price: 4000, image: '/product4.jpg' },
  { id: 5, name: 'Dior', price: 4000, image: '/product5.jpg' },
  { id: 6, name: 'Dior', price: 4000, image: '/product6.jpg' },
  { id: 7, name: 'Jordan 4s', price: 3500, image: '/product7.jpg' },
  { id: 8, name: 'Jordan 1s mid', price: 3000, image: '/product8.jpg' },
  { id: 9, name: 'Jordan 1s mid', price: 3000, image: '/product9.jpg' },
  { id: 10, name: 'Jordan 1s', price: 3500, image: '/product10.jpg' },
  { id: 11, name: 'Airforce', price: 3000, image: '/product11.jpg' },
  { id: 12, name: 'Jordan 2s', price: 3000, image: '/product12.jpg' },
  { id: 13, name: 'Jordan 6s', price: 3000, image: '/product13.jpg' },
  { id: 14, name: 'Jordan 9s', price: 3000, image: '/product14.jpg' },
  { id: 15, name: 'Jordan 12s', price: 3000, image: '/product15.jpg' },
];

 function Home() {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const toggleCartVisibility = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <div className={styles.app}>
    <div className={styles.heading}>
      <h1>Product Catalog</h1>
    </div>
    <Header />
    <ProductCatalog products={sampleProducts} addToCart={addToCart} />
    <div className={styles.cartIcon} onClick={toggleCartVisibility}>
        <FontAwesomeIcon icon={faCartShopping} />
        {cart.length > 0 && <span className={styles.cartCount}>{cart.length}</span>}
      </div>
      {isCartVisible && (
        <div className={styles.cartDropdown}>
          <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
        </div>
      )}
  </div>
  );
}

export default Home