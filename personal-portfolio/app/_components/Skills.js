import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image'
import styles from '../_styles/skills.module.css'

function Skills() {
  return (
    <div className={styles.skills}>
        <div className={styles.content1}>
            <Image src={'/skills.png'} width={600} height={500} alt=''/>
        </div>

        <div className={styles.content2}>
            <h1>My Skills</h1>
            <p>A PASSIONATE WEB DEVELOPER EAGER TO EXPLORE VARIOUS TECHNOLOGY STACKS</p>

            <div className={styles.icons}>
                <div>
                    <FontAwesomeIcon className={styles.html} icon={faHtml5} />
                    <p>HTML 5</p>
                </div>
                <div>
                    <FontAwesomeIcon className={styles.css} icon={faCss3Alt} />
                    <p>CSS 3</p>
                </div>
                <div>
                    <FontAwesomeIcon className={styles.javascript} icon={faJs} />
                    <p>JavaScript</p>
                </div>
                <div>
                    <FontAwesomeIcon className={styles.react} icon={faReact} />
                    <p>React JS</p>
                </div>
                <div>
                    <FontAwesomeIcon className={styles.git} icon={faGitAlt} />
                    <p>Git</p>
                </div>
                <div>
                    <FontAwesomeIcon className={styles.sql} icon={faDatabase} />
                    <p>SQL Database</p>
                </div>
            </div>

            <div className={styles.list}>
                <ul>
                    <li>Design visually appealing and user-friendly web applications</li>
                    <li>Develop these applications to ensure functionality and performance</li>
                    <li>Seamlessly integrating the frontend with the database for efficient data management and retrieval</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills