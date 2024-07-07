import React from 'react';
import styles from '../_styles/project.module.css';

function Project() {
  return (
    <div className={styles.project}>
      <h1>Projects Showcase</h1>

      <div className={styles.cards}>
        <div className={styles.card1}>
          <h2>TeenzSpring</h2>
          <p>A website showcasing services offered by a foundation called TeenzSpring.</p>
          <div className={styles.teenz}>
            <span></span> <p>JavaScript</p>
          </div>
        </div>

        <div className={styles.card2}>
          <h2>TechLink</h2>
          <p>A website displaying the services that the company TechLink offers.</p>
          <div className={styles.tech}>
            <span></span> <p>CSS</p>
          </div>
        </div>

        <div className={styles.card3}>
          <h2>Pharmacy</h2>
          <p>A school project aiming to digitalize the pharmacy section in a hospital.</p>
          <div className={styles.pharmacy}>
            <span></span> <p>PHP</p>
          </div>
        </div>

        <div className={styles.card4}>
          <h2>About Me</h2>
        </div>

        <div className={styles.card5}>
          <h2>Portfolio</h2>
          <p>A website showcasing who I am and what I can do.</p>
        </div>

      </div>
    </div>
  )
}

export default Project