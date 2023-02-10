import React from 'react';

//style
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.links}>
                <li>About</li>
                <li>Help</li>
                <li>Press</li>
                <li>API</li>
                <li>Jobs</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Locations</li>
                <li>Top Accounts</li>
                <li>Hashtags</li>
                <li>Language</li>
            </ul>
            <div className={styles.copyright}>@ 2020 INSTAGRAM FROM FACEBOOK</div>
        </div>
    );
};

export default Footer;