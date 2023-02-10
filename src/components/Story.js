import React from 'react';
import { faker } from '@faker-js/faker';

//style
import styles from '../styles/Stories.module.css'

//component
import Profile from './Profile'

const Story = () => {

    var userName = faker.internet.userName()
    userName = userName.length > 9 ? userName.slice(0,10) + '...' : userName

    return (
        <div className={styles.storyContainer}>
            <Profile story={true} size='big' />
            <p className={styles.username}>{userName}</p>
        </div>
    );
};

export default Story;