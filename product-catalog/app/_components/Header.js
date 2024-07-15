import React from 'react';
import Image from 'next/image';
import styles from '../styles/header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.scaleContainer}>
          <Image src='/header.png' width={400} height={400} alt='header' className={styles.animatedImage} />
        </div>
        <p>
          "Step into style and comfort with our exclusive collection of premium shoes. Elevate your look with every stride, 
          whether you're strolling through the city streets or stepping into your next adventure. Discover quality craftsmanship, 
          sleek designs, and the perfect fit that speaks to your individuality. Your journey begins here – find your sole mate today!"
        </p>
      </div>
    </div>
  );
}

export default Header;
