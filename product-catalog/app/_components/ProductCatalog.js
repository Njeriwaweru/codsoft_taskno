import React from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/productCatalog.module.css'

const ProductCatalog = ({ products, addToCart }) => {
  return (
    <div className={styles.productCatalog}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductCatalog;
