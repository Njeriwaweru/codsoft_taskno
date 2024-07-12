import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faLocationDot } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import Image from 'next/image';
import styles from '../_styles/footer.module.css'

function footer() {
  return (
    <div id='footer' className={styles.footer}>
        <div className={styles.heading}>
            <h1>Contact Me</h1>
            <p>Have a question, a project idea, or just want to chat about the latest in tech? I'm all ears! You can reach me via:</p>
        </div>

        <div className={styles.content1}>
            <div className={styles.icons}>
                <Link href={'https://www.linkedin.com/in/praise-waweru-173955215/'} target='_blank'><FontAwesomeIcon className={styles.linkedinIcon} icon={faLinkedinIn} /></Link>
                <Link href={'https://github.com/Njeriwaweru'} target='_blank'><FontAwesomeIcon className={styles.githubIcon} icon={faGithub} /></Link>
                <Link href={'mailto:njeripraise318@gmail.com'} target='_blank'><FontAwesomeIcon className={styles.mailIcon} icon={faEnvelope} /></Link>
            </div>

            <div className={styles.image}>
                <Image src={'/end.png'} width={200} height={200}/>
            </div>
        </div>

        <div className={styles.end}>
            <p>Made with ❤️ by Praise Waweru</p>
        </div>
    </div>
  )
}

export default footer