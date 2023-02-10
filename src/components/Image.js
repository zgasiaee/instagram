import React from 'react';

//style
import styles from '../styles/Post.module.css'

const Image = ({imageRandom}) => {

    return (
        <div>
            <img className={styles.image} src={imageRandom} alt="img" /> 
        </div>
    );
};

export default Image;