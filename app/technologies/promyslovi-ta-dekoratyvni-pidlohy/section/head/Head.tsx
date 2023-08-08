import Title from '@/components/title/Title'
import styles from './Head.module.scss'

import React from 'react'
import Image from 'next/image'

const Head = () => {
  return (
    <section className={styles.container}>
      <div className={styles.background}>
        <Image
          src="/img/technologies/page/promyslovi-ta-dekoratyvni-pidlohy/head-bg.jpg"
          fill
          quality={75}
          alt='Фонова картинка'
          priority
        />
      </div>
      <div className="container">
        <Title className={styles.title} title={'title'}>Промислові та декоративні підлоги</Title>
      </div>
    </section>
  )
}

export default Head