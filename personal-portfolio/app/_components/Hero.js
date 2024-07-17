"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import Image from 'next/image';
import Link from 'next/link'
import styles from '../_styles/hero.module.css'

const CustomButton = styled(Button)(({ theme }) => ({
    borderRadius: '25px',
    backgroundColor: '#00ffff',
    color: '#000000',
    padding: '8px',
    '&:hover': {
        backgroundColor: 'rgba(0, 119, 181, 0.5)'
    }
}));

function Hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.content1}>
            <div className={styles.heading}>
                <h1>Hi, I'm Praise</h1>
                <div className={styles.imageWrapper}>
                    <Image src={'/hand.png'} width={70} height={70} alt='hand'/>
                </div>
            </div>
            <p>
            A dedicated Web Designer and Developer 🌟 with experience in crafting visually appealing and user-friendly websites and applications using JavaScript, 
            React.js, Node.js, and React Native. Always eager to explore and learn new technologies and frameworks to enhance my skills and deliver cutting-edge solutions.
            </p>

            <div className={styles.icons}>
                <Link href={'https://www.linkedin.com/in/praise-waweru-173955215/'} target='_blank'><FontAwesomeIcon className={styles.linkedinIcon} icon={faLinkedinIn} /></Link>
                <Link href={'https://github.com/Njeriwaweru'} target='_blank'><FontAwesomeIcon className={styles.githubIcon} icon={faGithub} /></Link>
                <Link href={'mailto:njeripraise318@gmail.com'} target='_blank'><FontAwesomeIcon className={styles.mailIcon} icon={faEnvelope} /></Link>
            </div>

            <div className={styles.buttons}>
                <Link href={'#footer'}><CustomButton variant='contained' size='small'>Contact Me</CustomButton></Link>
                <Link href={'https://firebasestorage.googleapis.com/v0/b/portfolio-9e098.appspot.com/o/PRAISE%20WAWERU.pdf?alt=media&token=c6908b7b-b085-4fc3-9aef-6eb1b57e12df'} target='_blank'><CustomButton variant='contained' size='small'>See My Resume</CustomButton></Link>
            </div>
        </div>

        <div className={styles.content2}>
            <Image className={styles.bannerImage} src={'/banner1.png'} width={800} height={500} alt='computer girl'/>
        </div>

        
    </div>
  )
}

export default Hero