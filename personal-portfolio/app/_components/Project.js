"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeFork, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import styles from '../_styles/project.module.css';
import Link from 'next/link';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

function Project() {
  const CustomButton = styled(Button)(({ theme }) => ({
    borderRadius: '25px',
    backgroundColor: '#00ffff',
    color: '#000000',
    padding: '8px',
    '&:hover': {
        backgroundColor: 'rgba(0, 119, 181, 0.5)'
    }
}));

  return (
    <div id='projects' className={styles.project}>
      <h1>Projects Showcase</h1>

      <div className={styles.cards}>
        <Link href={'https://github.com/Njeriwaweru/teenzspring.github.io'} target='_blank' className={styles.card1}>
          <div className={styles.heading}>
            <FontAwesomeIcon className={styles.icon} icon={faAddressBook} />
            <h2>TeenzSpring</h2>
          </div>
            <p>A website showcasing services offered by a foundation called TeenzSpring.</p>
            <div className={styles.teenz}>
              <span></span> <p>JavaScript</p>
              <FontAwesomeIcon icon={faCodeFork} /> 
              <p>0</p>
            </div>
        </Link>

        <Link href={'https://github.com/Njeriwaweru/techlink'} target='_blank' className={styles.card2}>
          <div className={styles.heading}>
            <FontAwesomeIcon className={styles.icon} icon={faAddressBook} />
            <h2>TechLink</h2>
          </div>
            <p>A website displaying the services that the company TechLink offers.</p>
            <div className={styles.tech}>
              <span></span> <p>CSS</p>
              <FontAwesomeIcon icon={faCodeFork} /> 
              <p>0</p>
            </div>
        </Link>

        <Link href={'https://github.com/Njeriwaweru/web'} target='_blank' className={styles.card3}>
          <div className={styles.heading}>
            <FontAwesomeIcon className={styles.icon} icon={faAddressBook} />
            <h2>Pharmacy</h2>
          </div>
            <p>A school project aiming to digitalize the pharmacy section in a hospital.</p>
            <div className={styles.pharmacy}>
              <span></span> <p>PHP</p>
              <FontAwesomeIcon icon={faCodeFork} /> 
              <p>0</p>
            </div>
        </Link>

        <Link href={'https://github.com/Njeriwaweru/Njeriwaweru'} target='_blank' className={styles.card4}>
          <div className={styles.heading}>
            <FontAwesomeIcon className={styles.icon} icon={faAddressBook} />
            <h2>About Me</h2>
          </div>
            <div className={styles.about}>
              <FontAwesomeIcon icon={faCodeFork} /> 
              <p>0</p>
            </div>
        </Link>

        <Link href={'https://github.com/Njeriwaweru/CODSOFT'} target='_blank' className={styles.card5}>
          <div className={styles.heading}>
            <FontAwesomeIcon className={styles.icon} icon={faAddressBook} />
            <h2>Portfolio</h2>
          </div>
            <p>A website showcasing who I am and what I can do.</p>
            <div className={styles.teenz}>
              <span></span> <p>JavaScript</p>
              <FontAwesomeIcon icon={faCodeFork} /> 
              <p>0</p>
            </div>
        </Link>

      </div>
      <div className={styles.button}>
        <Link href={'https://github.com/Njeriwaweru?tab=repositories'} target='_blank'><CustomButton>More projects</CustomButton></Link>
      </div>
    </div>
  )
}

export default Project