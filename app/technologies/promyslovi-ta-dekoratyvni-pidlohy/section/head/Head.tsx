import Title from '@/components/title/Title'
import styles from './Head.module.scss'

import React from 'react'

const Head = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'title'}>Промислові та декоративні підлоги</Title>
      </div>
    </section>
  )
}

export default Head