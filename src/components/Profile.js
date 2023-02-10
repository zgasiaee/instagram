import React from 'react'

//style
import styles from '../styles/Profile.module.css'

const Profile = ({ img , size , story }) => {

  const randomId = () => {
    return Math.floor(Math.random() * 70) + 1
  }

  var profile = `https://i.pravatar.cc/150?img=${randomId()}`

  return (
    <div className={story ? styles.storyBorder : ''}>
      <img 
        className={styles.profile}
        src={img ? img : profile}
        alt="profile"
        style={{width : size === 'small' ? '30px' : size === 'medium' ?  '50px' : '60px',
        height : size === 'small' ? '30px' : size === 'medium' ?  '50px' : '60px'}}
      />  
    </div>
  )
}

export default Profile
