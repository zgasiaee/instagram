import React from 'react'
import { faker } from '@faker-js/faker'

//component
import Account from './Account'
import Caption from './Caption'
import Image from './Image'

//style
import styles from '../styles/Post.module.css'

//image
import { ReactComponent as LineDots } from '../images/lineDots.svg'

const Post = () => {

  return (
    <div className={styles.container}>
      <Account
        text={<LineDots/>}
        username={faker.internet.userName()}
        description={faker.company.name()}
        size="small"
        story={faker.datatype.boolean()}
      />
      <Image imageRandom={faker.image.abstract(1234, 1200, true)} />
      <Caption />
    </div>
  )
}

export default Post
