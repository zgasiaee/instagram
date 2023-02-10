import React from 'react';

//component
import Profile from './Profile'

//style
import styles from '../styles/Account.module.css'

const Account = ({text , username , description , img , size , story }) => {

    return (
        <div className={styles.line}>
               <Profile story={story ? story : ''} img={img ? img : ''} size={size} />
               <div className={styles.text}>
                  <span className={styles.username}>{username ? username : 'zgasiaee'}</span>
                  <p className={styles.name}>{description ? description : 'zahra asiaee'}</p>
               </div>
               <a className={styles.link} href='#'>{text}</a>
        </div>
    );
};

export default Account;