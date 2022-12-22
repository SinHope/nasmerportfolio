import React from 'react';
import styles from '../styles/Home.module.css';

const MySkills = (props) => {
    return (
        <div>
            <img src="\html5logo.png" alt="html5logo" className={styles.html5logo}></img>
            <img src="\css3logo.png" alt="css3logo" className={styles.csslogo}></img>
            <img src="\javascriptlogo.png" alt="javascriptlogo" className={styles.javascriptlogo}></img>
            <img src="\bootstraplogo.png" alt="bootstraptlogo" className={styles.bootstraplogo}></img>
            <img src="\tailwindcsslogo.png" alt="bootstraptlogo" className={styles.tailwindcsslogo}></img>
            <img src="\reactlogo.png" alt="reactlogo" className={styles.reactlogo}></img>
            <img src="\githublogo.png" alt="bootstraptlogo" className={styles.githublogo}></img>
            <img src="\nextjslogo.png" alt="bootstraptlogo" className={styles.nextjslogo}></img>
            <img src="\npmlogo.png" alt="bootstraptlogo" className={styles.npmlogo}></img>
            <img src="\nodejslogo.png" alt="bootstraptlogo" className={styles.nodejslogo}></img>
            <img src="\emailjslogo.png" alt="bootstraptlogo" className={styles.emailjslogo}></img>
            <img src="\restapilogo.png" alt="bootstraptlogo" className={styles.restapilogo}></img>
        </div>
    );
};

export default MySkills;