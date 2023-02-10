import React, { useState } from 'react';

//style
import styles from '../styles/Navigation.module.css'

//images
import logo from '../images/logo.png'
import { ReactComponent as Home} from '../images/home.svg'
import { ReactComponent as Inbox} from '../images/inbox.svg'
import { ReactComponent as Explore} from '../images/explore.svg'
import { ReactComponent as Heart} from '../images/heart.svg'
import profile from '../images/profile.jpg'

//components
import Profile from './Profile';

const Navigation = () => {

    const [search , setSearch] = useState('')

    return (
        <div className={styles.container}>
             <img className={styles.logo} src={logo} alt='logo' />
            <div className={styles.inputContainer}>
               <input type='text' placeholder='Search' value={search} onChange={(event)=>setSearch(event.target.value)}/>
               <i className='fa fa-search'></i>
            </div>
            <div className={styles.iconContainer}>
               <Home className={styles.icon}/>
               <Inbox className={styles.icon}/>
               <Explore className={styles.icon}/>
               <Heart className={styles.icon}/>
               <Profile size='small' img={profile} story={true} />
            </div>
        </div>
    );
};

export default Navigation;