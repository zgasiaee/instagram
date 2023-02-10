import React from 'react'
import { faker } from '@faker-js/faker'

//style
import styles from '../styles/Suggestions.module.css'

//component
import Account from './Account'

const Suggestions = () => {

  const n = 5

  return (
    <div className={styles.container}>
      { [...Array(n)].map((index) => (
        <Account
          key={index}
          text="Follow"
          username={faker.internet.userName()}
          description={`Followed by ${faker.internet.userName().slice(1,10)} + ${Math.floor(Math.random() * 10) + 1} more `}
          size='medium'
          story={faker.datatype.boolean()}
        />
      ))}
    </div>
  )
}

export default Suggestions
