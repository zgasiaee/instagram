import React from 'react';

//style
import styles from '../styles/Cards.module.css'

//component
import Stories from './Stories'
import Posts from './Posts';

const Cards = () => {
    return (
        <div className={styles.container}>
            <Stories/>
            <Posts/>
        </div>
    );
};

export default Cards;