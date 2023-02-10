import React from 'react';
import HorizontalScroll from "react-scroll-horizontal"

//style
import styles from '../styles/Stories.module.css'

//component
import Story from './Story';

const Stories = () => {

    const n = Math.floor(Math.random() * 30) + 10;

    return (
        <div  className={styles.container}>
            <HorizontalScroll pageLock={true}
              reverseScroll={true}
               style={{ width: `70em`, height: `80px` }} >
            {
                [...Array(n)].map(index => <Story key={index} />)
            }
            </HorizontalScroll>
        </div>
    );
};

export default Stories;