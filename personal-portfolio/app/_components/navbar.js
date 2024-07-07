import Link from 'next/link'
import React from 'react';
import styles from '../_styles/navbar.module.css'

function navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <h2 className={styles.amaranth}>{'< Praise Waweru />'}</h2>
        </div>

        <div className={styles.links}>
            <Link href={''}>About Me</Link>
            <Link href={''}>Projects</Link>
            <Link href={''}>Contact Me</Link>
        </div>
    </div>
  )
}

export default navbar