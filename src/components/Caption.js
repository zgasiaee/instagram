import React from 'react'
import { faker } from '@faker-js/faker'

//images
import { ReactComponent as Heart } from '../images/heart.svg'
import { ReactComponent as Comment } from '../images/comment.svg'
import { ReactComponent as Direct } from '../images/direct.svg'
import { ReactComponent as Save } from '../images/save.svg'

//style
import styles from '../styles/Caption.module.css'

//component
import Profiler from './Profile'

const Caption = () => {

  const n = Math.floor(Math.random() * 5) + 1

  return (
    <div className={styles.container}>
      <div className={styles.line} style={{cursor:'pointer'}}>
        <div className={styles.space}> 
          <Heart />
          <Comment />
          <Direct />
        </div>
        <Save />
      </div>
      <div className={styles.liked}>
        <Profiler size="small" />
        <p className={styles.textLike}>
          Liked by {<span>{faker.internet.userName().slice(1, 10)}</span>} and{' '}
          {<span>{Math.floor(Math.random() * 200) + 1} others</span>}
        </p>
      </div>
      <div className={styles.comment}>
        {
          [...Array(n)].map(index => {
            return(
                <div key={index} className={styles.textComment}>
                  <h4 className={styles.commentTitel}>{faker.internet.userName().slice(1, 10)}</h4>
                 <span>{faker.lorem.sentence().slice(1,40)}</span>
                </div>
            )
          })
        }
        <span className={styles.allComment}>View All {Math.floor(Math.random() * 50) + 1} Comments</span>
      </div>
      <div className={styles.time}>
          <span>{Math.floor(Math.random() * 20) + 1} HOURS AGO</span>
      </div>
      <div className={styles.addComment}>
        <input placeholder='Add a comment ...' className={styles.input} type='text' />
        <a className={styles.link} href='#'>Post</a>
      </div>
    </div>
  )
}

export default Caption
