import React from 'react';
import styles from '../styles/productCard.module.css'
import Button from 'react-bootstrap/Button';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <h3>{product.name}</h3>
      <p>Ksh{product.price.toFixed(2)}</p>
      <Button onClick={() => addToCart(product)} variant='primary'>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
