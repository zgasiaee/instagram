import React from 'react';

//style
import styles from '../styles/Sidebar.module.css'

//component
import Suggestions from './Suggestions'
import Account from './Account';
import Footer from './Footer';

//img
import profile from '../images/profile.jpg'

const Sidebar = () => {
    return (
            <div className={styles.container}>
           <Account size='big' text='Switch' img={profile} story={true} />
           <div className={styles.line} style={{justifyContent:'space-between'}}>
              <span className={styles.title}>Suggestion For You</span>
              <p className={styles.text}>See All</p>
           </div>
           <Suggestions/>
           <Footer/>
        </div>
    );
};

export default Sidebar;