import Title from '@/components/title/Title'
import styles from './page.module.scss'

import React from 'react'
import Image from 'next/image'

const Article = () => {
  return (
    <article>
      <section className={styles.container}>
        <div className="container">
          <Title title={'h1'}>Як захистити підлоги з мармурової крихти</Title>
          <div className={styles.articleinfo}>
            <div>
              <p className={styles.date}>Дата публікації: <time dateTime="2023-07-20">
                20 липня 2023</time>
              </p>
              <p className={styles.author}>Автор: Сергій Стародубов</p>
            </div>
            <Image className={styles.articleimg} src='/img/blog/author.jpg' alt='' title='' width={100} height={100} />
          </div>
        </div>
      </section>
    </article>
  )
}

export default Article